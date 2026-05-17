// Генерация vCard 3.0 — максимальная совместимость с iOS/Android контактами
function escapeVCard(value) {
  if (!value) return '';
  return String(value)
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '');
}

// RFC 2425 line folding: длинные строки разворачиваются по 75 октетов,
// продолжение начинается с пробела (или таба). Иначе iOS/Android парсеры могут не распарсить PHOTO.
function foldLine(line) {
  if (line.length <= 75) return line;
  const parts = [];
  let i = 0;
  parts.push(line.slice(i, i + 75));
  i += 75;
  while (i < line.length) {
    parts.push(' ' + line.slice(i, i + 74));
    i += 74;
  }
  return parts.join('\r\n');
}

// Извлекаем «handle» из URL или строки.
function extractHandle(value, hosts) {
  if (!value) return '';
  let v = String(value).trim();
  if (!v) return '';
  const lower = v.toLowerCase();
  const looksLikeUrl = lower.startsWith('http://') || lower.startsWith('https://') ||
    (hosts || []).some(h => lower.startsWith(h + '/') || lower.startsWith('www.' + h + '/') || lower.startsWith(h));
  if (looksLikeUrl) {
    let urlStr = v;
    if (!/^https?:\/\//i.test(urlStr)) urlStr = 'https://' + urlStr;
    try {
      const u = new URL(urlStr);
      const segs = u.pathname.split('/').filter(Boolean);
      if (segs.length) {
        return segs[segs.length - 1].replace(/^@/, '');
      }
      return v.replace(/^@/, '').replace(/\/+$/, '');
    } catch (e) {}
  }
  return v.replace(/^@/, '').replace(/\/+$/, '');
}

function igHandle(v) { return extractHandle(v, ['instagram.com']); }
function tgHandle(v) { return extractHandle(v, ['t.me', 'telegram.me']); }
function fbHandle(v) { return extractHandle(v, ['facebook.com', 'fb.com']); }
function tkHandle(v) {
  const h = extractHandle(v, ['tiktok.com']);
  return h.replace(/^@/, '');
}

function liHandle(v) {
  if (!v) return '';
  let s = String(v).trim();
  if (!s) return '';
  const lower = s.toLowerCase();
  if (lower.startsWith('http://') || lower.startsWith('https://') || lower.includes('linkedin.com/')) {
    let urlStr = s;
    if (!/^https?:\/\//i.test(urlStr)) urlStr = 'https://' + urlStr;
    try {
      const u = new URL(urlStr);
      const segs = u.pathname.split('/').filter(Boolean);
      for (let i = 0; i < segs.length; i++) {
        if (/^(in|company|pub)$/i.test(segs[i]) && segs[i + 1]) {
          return segs[i + 1].replace(/^@/, '');
        }
      }
      if (segs.length) return segs[segs.length - 1].replace(/^@/, '');
    } catch (e) {}
  }
  return s.replace(/^@/, '').replace(/\/+$/, '');
}

function ytHandle(v) {
  if (!v) return '';
  let s = String(v).trim();
  if (!s) return '';
  const lower = s.toLowerCase();
  if (lower.startsWith('http://') || lower.startsWith('https://') || lower.includes('youtube.com/') || lower.includes('youtu.be/')) {
    let urlStr = s;
    if (!/^https?:\/\//i.test(urlStr)) urlStr = 'https://' + urlStr;
    try {
      const u = new URL(urlStr);
      const segs = u.pathname.split('/').filter(Boolean);
      if (!segs.length) return '@' + s.replace(/^@/, '').replace(/\/+$/, '');
      const first = segs[0];
      if (first.startsWith('@')) return first;
      if (/^(channel|c|user)$/i.test(first) && segs[1]) {
        return first.toLowerCase() + '/' + segs[1];
      }
      return '@' + first.replace(/^@/, '');
    } catch (e) {}
  }
  return '@' + s.replace(/^@/, '').replace(/\/+$/, '');
}

function ytUrl(v) {
  return 'https://youtube.com/' + ytHandle(v);
}

function waNumber(v) {
  return String(v || '').replace(/\D/g, '');
}

function buildVCard(card, baseUrl) {
  const lines = ['BEGIN:VCARD', 'VERSION:3.0'];

  const fullName = [card.first_name, card.last_name].filter(Boolean).join(' ');
  lines.push(`N:${escapeVCard(card.last_name)};${escapeVCard(card.first_name)};;;`);
  lines.push(`FN:${escapeVCard(fullName)}`);

  if (card.company) lines.push(`ORG:${escapeVCard(card.company)}`);
  if (card.position) lines.push(`TITLE:${escapeVCard(card.position)}`);
  if (card.bio) lines.push(`NOTE:${escapeVCard(card.bio)}`);

  if (card.phone) lines.push(`TEL;TYPE=CELL,VOICE:${escapeVCard(card.phone)}`);
  if (card.phone_secondary) lines.push(`TEL;TYPE=WORK,VOICE:${escapeVCard(card.phone_secondary)}`);
  if (card.email) lines.push(`EMAIL;TYPE=INTERNET:${escapeVCard(card.email)}`);
  if (card.website) {
    const site = /^https?:\/\//i.test(card.website) ? card.website : 'https://' + card.website;
    lines.push(`URL:${escapeVCard(site)}`);
  }
  if (card.address) lines.push(`ADR;TYPE=WORK:;;${escapeVCard(card.address)};;;;`);

  if (card.instagram) {
    const h = igHandle(card.instagram);
    if (h) lines.push(`X-SOCIALPROFILE;TYPE=instagram:https://instagram.com/${escapeVCard(h)}`);
  }
  if (card.telegram) {
    const h = tgHandle(card.telegram);
    if (h) lines.push(`X-SOCIALPROFILE;TYPE=telegram:https://t.me/${escapeVCard(h)}`);
  }
  if (card.linkedin) {
    const h = liHandle(card.linkedin);
    if (h) lines.push(`X-SOCIALPROFILE;TYPE=linkedin:https://linkedin.com/in/${escapeVCard(h)}`);
  }
  if (card.whatsapp) {
    const n = waNumber(card.whatsapp);
    if (n) lines.push(`X-SOCIALPROFILE;TYPE=whatsapp:https://wa.me/${escapeVCard(n)}`);
  }
  if (card.facebook) {
    const h = fbHandle(card.facebook);
    if (h) lines.push(`X-SOCIALPROFILE;TYPE=facebook:https://facebook.com/${escapeVCard(h)}`);
  }
  if (card.youtube) {
    const h = ytHandle(card.youtube);
    if (h) lines.push(`X-SOCIALPROFILE;TYPE=youtube:https://youtube.com/${escapeVCard(h)}`);
  }
  if (card.tiktok) {
    const h = tkHandle(card.tiktok);
    if (h) lines.push(`X-SOCIALPROFILE;TYPE=tiktok:https://tiktok.com/@${escapeVCard(h)}`);
  }

  if (baseUrl && card.slug) {
    lines.push(`URL;TYPE=profile:${escapeVCard(baseUrl.replace(/\/$/, ''))}/${escapeVCard(card.slug)}`);
  }

  if (card.avatar_url) {
    const m = /^data:image\/([a-zA-Z]+)(?:;[^,]*)?;base64,(.+)$/.exec(card.avatar_url);
    if (m) {
      let type = m[1];
      if (/^jpe?g$/i.test(type)) type = 'JPEG';
      else type = type.toUpperCase();
      const data = m[2].replace(/\s+/g, '');
      lines.push(foldLine(`PHOTO;ENCODING=b;TYPE=${type}:${data}`));
    }
  }

  lines.push(`REV:${new Date().toISOString()}`);
  lines.push('END:VCARD');

  return lines.join('\r\n') + '\r\n';
}

module.exports = { buildVCard, foldLine, extractHandle, igHandle, tgHandle, fbHandle, tkHandle, liHandle, ytHandle, ytUrl, waNumber };

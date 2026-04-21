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
  if (card.website) lines.push(`URL:${escapeVCard(card.website)}`);
  if (card.address) lines.push(`ADR;TYPE=WORK:;;${escapeVCard(card.address)};;;;`);

  // Соц.сети — через X-SOCIALPROFILE + TYPE, хорошо читается iOS 16+
  if (card.instagram) lines.push(`X-SOCIALPROFILE;TYPE=instagram:https://instagram.com/${escapeVCard(card.instagram.replace(/^@/, ''))}`);
  if (card.telegram) lines.push(`X-SOCIALPROFILE;TYPE=telegram:https://t.me/${escapeVCard(card.telegram.replace(/^@/, ''))}`);
  if (card.linkedin) lines.push(`X-SOCIALPROFILE;TYPE=linkedin:${escapeVCard(card.linkedin.startsWith('http') ? card.linkedin : 'https://linkedin.com/in/' + card.linkedin)}`);
  if (card.whatsapp) lines.push(`X-SOCIALPROFILE;TYPE=whatsapp:https://wa.me/${escapeVCard(card.whatsapp.replace(/\D/g, ''))}`);
  if (card.facebook) lines.push(`X-SOCIALPROFILE;TYPE=facebook:${escapeVCard(card.facebook.startsWith('http') ? card.facebook : 'https://facebook.com/' + card.facebook)}`);
  if (card.youtube) lines.push(`X-SOCIALPROFILE;TYPE=youtube:${escapeVCard(card.youtube.startsWith('http') ? card.youtube : 'https://youtube.com/@' + card.youtube.replace(/^@/, ''))}`);
  if (card.tiktok) lines.push(`X-SOCIALPROFILE;TYPE=tiktok:https://tiktok.com/@${escapeVCard(card.tiktok.replace(/^@/, ''))}`);

  // Ссылка на визитку — чтобы можно было всегда вернуться
  if (baseUrl && card.slug) {
    lines.push(`URL;TYPE=profile:${escapeVCard(baseUrl.replace(/\/$/, ''))}/${escapeVCard(card.slug)}`);
  }

  lines.push(`REV:${new Date().toISOString()}`);
  lines.push('END:VCARD');

  return lines.join('\r\n') + '\r\n';
}

module.exports = { buildVCard };

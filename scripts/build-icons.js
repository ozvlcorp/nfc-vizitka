// Генерирует PNG-иконки из icon.svg с помощью sharp.
// Установи sharp один раз: npm install --save-dev sharp
// Затем запусти: node scripts/build-icons.js

const path = require('path');
const fs = require('fs');

async function main() {
  let sharp;
  try {
    sharp = require('sharp');
  } catch (e) {
    console.error('Модуль "sharp" не установлен. Выполни: npm install --save-dev sharp');
    console.error('Либо используй онлайн-конвертер SVG → PNG и положи файлы в public/icons/:');
    console.error('  • icon-192.png (192×192)');
    console.error('  • icon-512.png (512×512)');
    process.exit(1);
  }

  const svgPath = path.join(__dirname, '..', 'public', 'icons', 'icon.svg');
  const outDir = path.join(__dirname, '..', 'public', 'icons');
  const svg = fs.readFileSync(svgPath);

  const sizes = [192, 512];
  for (const size of sizes) {
    const out = path.join(outDir, `icon-${size}.png`);
    await sharp(svg).resize(size, size).png().toFile(out);
    console.log(`✓ ${out}`);
  }

  // Favicon
  await sharp(svg).resize(64, 64).png().toFile(path.join(outDir, 'favicon.png'));
  console.log('✓ favicon.png');
}

main().catch(err => { console.error(err); process.exit(1); });

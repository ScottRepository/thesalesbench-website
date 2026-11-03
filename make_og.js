const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');

async function generateOG() {
  const width = 1200;
  const height = 630;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Background: Deep institutional navy
  ctx.fillStyle = '#0A192F';
  ctx.fillRect(0, 0, width, height);

  // Load horizontal gold logo
  const logo = await loadImage('/home/scottcarpentier/thesalesbench-website/assets/logo-horizontal.jpg');
  
  // Calculate scaled dimensions to fit nicely in 1200x630
  // logo is 1024x506
  const targetW = 900;
  const targetH = (logo.height / logo.width) * targetW;
  const x = (width - targetW) / 2;
  const y = (height - targetH) / 2;

  ctx.drawImage(logo, x, y, targetW, targetH);

  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync('/home/scottcarpentier/thesalesbench-website/og-image-v2.png', buffer);
  fs.writeFileSync('/home/scottcarpentier/thesalesbench-website/logo-og.png', buffer);
  console.log('Successfully created 1200x630 OG image');
}

generateOG().catch(console.error);

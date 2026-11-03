const { createCanvas, loadImage } = require('canvas');
const QRCode = require('qrcode');
const fs = require('fs');

async function run() {
  const logo = await loadImage('/home/scottcarpentier/thesalesbench-website/assets/actual-logo.png');
  const qrSize = 1400;
  const canvas = createCanvas(qrSize, qrSize);
  const ctx = canvas.getContext('2d');

  // Generate QR Matrix at High error correction (30% recovery tolerance)
  const matrixCanvas = createCanvas(qrSize, qrSize);
  await QRCode.toCanvas(matrixCanvas, 'https://www.thesalesbench.com', {
    errorCorrectionLevel: 'H',
    margin: 4,
    width: qrSize,
    color: {
      dark: '#0A192F', // Brand Navy
      light: '#FFFFFF'
    }
  });

  // Draw full QR code
  ctx.drawImage(matrixCanvas, 0, 0);

  // Logo sizing:
  // actual-logo.png aspect ratio is 331 x 92 (width:height = 3.6:1)
  // Let badge width be 42% of QR code width (~588px), height = 163px
  const logoW = qrSize * 0.42;
  const logoH = (logo.height / logo.width) * logoW;
  const logoX = (qrSize - logoW) / 2;
  const logoY = (qrSize - logoH) / 2;
  const pad = 18;

  // Draw crisp white background plate with rounded corners
  ctx.save();
  ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
  ctx.shadowBlur = 24;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 6;

  ctx.fillStyle = '#FFFFFF';
  const radius = 22;

  function roundRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
  }

  roundRect(ctx, logoX - pad, logoY - pad, logoW + pad * 2, logoH + pad * 2, radius);
  ctx.fill();
  ctx.restore();

  // Draw the exact logo image sharply inside the card
  ctx.drawImage(logo, logoX, logoY, logoW, logoH);

  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync('/home/scottcarpentier/thesalesbench-website/thesalesbench-qr-code.png', buffer);
  fs.writeFileSync('/home/scottcarpentier/Downloads/TheSalesBench_QRCode.png', buffer);
  fs.writeFileSync('/home/scottcarpentier/.gemini/antigravity/brain/d0dedf12-f008-4fde-bbf1-85ee6e3c0a6f/thesalesbench-qr-code.png', buffer);
  console.log('Generated extra crisp high-res QR code with actual horizontal logo');
}

run().catch(console.error);

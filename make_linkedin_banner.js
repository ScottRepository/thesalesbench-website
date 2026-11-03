const { createCanvas, loadImage } = require('canvas');
const QRCode = require('qrcode');
const fs = require('fs');

async function createLinkedInBanner() {
  // Official LinkedIn personal profile banner dimensions: 1584 x 396 (4:1 aspect ratio)
  const width = 1584;
  const height = 396;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Background: Deep Institutional Navy with subtle radial glow
  ctx.fillStyle = '#0A192F';
  ctx.fillRect(0, 0, width, height);

  const bgGrad = ctx.createRadialGradient(width / 2, height / 2, 40, width / 2, height / 2, 800);
  bgGrad.addColorStop(0, '#112240');
  bgGrad.addColorStop(1, '#0A192F');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, width, height);

  // Subtle luxury border frame
  ctx.strokeStyle = 'rgba(212, 175, 55, 0.28)';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(24, 24, width - 48, height - 48);

  // Load the exact pill logo
  const logo = await loadImage('/home/scottcarpentier/thesalesbench-website/assets/exact-logo-master.png');

  // We place the Logo and QR Code side-by-side in the right/center portion of the banner
  // (Leaving the far left clear since LinkedIn profile photo overlaps the lower-left area on desktop & mobile)
  
  // Logo sizing:
  // exact-logo-master.png aspect ratio is 326 x 84 (approx 3.88:1)
  const logoW = 680;
  const logoH = (logo.height / logo.width) * logoW; // ~175px

  // QR Code sizing
  const qrSize = 175;
  const qrMargin = 12;

  // Generate QR Code canvas
  const qrCanvas = createCanvas(qrSize, qrSize);
  await QRCode.toCanvas(qrCanvas, 'https://www.thesalesbench.com', {
    errorCorrectionLevel: 'M',
    margin: 2,
    width: qrSize,
    color: {
      dark: '#0A192F',
      light: '#FFFFFF'
    }
  });

  // Calculate layout side-by-side
  const gap = 60;
  const totalContentW = logoW + gap + (qrSize + qrMargin * 2);
  // Shift right to account for LinkedIn circular avatar in lower-left (avatar extends ~250px from left)
  const startX = 420; 
  const logoX = startX;
  const logoY = (height - logoH) / 2;

  // Draw Logo with soft elevation shadow
  ctx.save();
  ctx.shadowColor = 'rgba(0, 0, 0, 0.6)';
  ctx.shadowBlur = 30;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 8;
  ctx.drawImage(logo, logoX, logoY, logoW, logoH);
  ctx.restore();

  // Draw QR Code Card beside the logo
  const qrCardX = logoX + logoW + gap;
  const qrCardY = (height - (qrSize + qrMargin * 2 + 26)) / 2;

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

  // Draw crisp white backing plate with subtle gold border
  ctx.save();
  ctx.shadowColor = 'rgba(0, 0, 0, 0.55)';
  ctx.shadowBlur = 24;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 6;
  ctx.fillStyle = '#FFFFFF';
  roundRect(ctx, qrCardX, qrCardY, qrSize + qrMargin * 2, qrSize + qrMargin * 2 + 26, 14);
  ctx.fill();
  ctx.restore();

  // Subtle gold border on QR card
  ctx.save();
  ctx.strokeStyle = '#D4AF37';
  ctx.lineWidth = 1.5;
  roundRect(ctx, qrCardX, qrCardY, qrSize + qrMargin * 2, qrSize + qrMargin * 2 + 26, 14);
  ctx.stroke();
  ctx.restore();

  // Draw QR Code
  ctx.drawImage(qrCanvas, qrCardX + qrMargin, qrCardY + qrMargin, qrSize, qrSize);

  // Small bold label under QR Code
  ctx.font = '700 11px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.fillStyle = '#0A192F';
  ctx.textAlign = 'center';
  ctx.fillText('SCAN TO VISIT', qrCardX + (qrSize + qrMargin * 2) / 2, qrCardY + qrSize + qrMargin + 17);

  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync('/home/scottcarpentier/thesalesbench-website/linkedin-banner.png', buffer);
  fs.writeFileSync('/home/scottcarpentier/Downloads/TheSalesBench_LinkedIn_Banner.png', buffer);
  fs.writeFileSync('/home/scottcarpentier/.gemini/antigravity/brain/d0dedf12-f008-4fde-bbf1-85ee6e3c0a6f/linkedin-banner.png', buffer);
  console.log('LinkedIn banner created successfully at 1584x396');
}

createLinkedInBanner().catch(console.error);

const { createCanvas, loadImage } = require('canvas');
const QRCode = require('qrcode');
const fs = require('fs');

async function run() {
  const logo = await loadImage('/home/scottcarpentier/thesalesbench-website/assets/actual-logo.png');

  // ==========================================
  // 1. GENERATE SOCIAL PREVIEW IMAGE (1200x630)
  // ==========================================
  const ogW = 1200;
  const ogH = 630;
  const ogCanvas = createCanvas(ogW, ogH);
  const ogCtx = ogCanvas.getContext('2d');

  // Fill luxury institutional navy background
  ogCtx.fillStyle = '#0A192F';
  ogCtx.fillRect(0, 0, ogW, ogH);

  // Subtle radial gradient in center for elegance
  const grad = ogCtx.createRadialGradient(ogW / 2, ogH / 2, 50, ogW / 2, ogH / 2, 500);
  grad.addColorStop(0, '#112240');
  grad.addColorStop(1, '#0A192F');
  ogCtx.fillStyle = grad;
  ogCtx.fillRect(0, 0, ogW, ogH);

  // Scale the actual logo into a prominent card in center
  // Target width 720px
  const cardW = 760;
  const cardH = (logo.height / logo.width) * cardW;
  const cardX = (ogW - cardW) / 2;
  const cardY = (ogH - cardH) / 2 - 20;

  // Draw card with subtle drop shadow
  ogCtx.save();
  ogCtx.shadowColor = 'rgba(0, 0, 0, 0.5)';
  ogCtx.shadowBlur = 35;
  ogCtx.shadowOffsetX = 0;
  ogCtx.shadowOffsetY = 12;

  ogCtx.drawImage(logo, cardX, cardY, cardW, cardH);
  ogCtx.restore();

  // Subtitle underneath logo on the social card
  ogCtx.font = '500 24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ogCtx.fillStyle = '#D4B483';
  ogCtx.textAlign = 'center';
  ogCtx.letterSpacing = '2px';
  ogCtx.fillText('FRACTIONAL REVENUE ARCHITECT · B2B SAAS', ogW / 2, cardY + cardH + 60);

  const ogBuffer = ogCanvas.toBuffer('image/png');
  fs.writeFileSync('/home/scottcarpentier/thesalesbench-website/og-image-v3.png', ogBuffer);
  fs.writeFileSync('/home/scottcarpentier/thesalesbench-website/og-image-v2.png', ogBuffer);
  fs.writeFileSync('/home/scottcarpentier/thesalesbench-website/logo-og.png', ogBuffer);
  console.log('1. Generated 1200x630 social card');

  // ==========================================
  // 2. GENERATE BRANDED QR CODE (1200x1200)
  // ==========================================
  const qrSize = 1200;
  const qrCanvas = createCanvas(qrSize, qrSize);
  const qrCtx = qrCanvas.getContext('2d');

  // High error correction QR
  const matrixCanvas = createCanvas(qrSize, qrSize);
  await QRCode.toCanvas(matrixCanvas, 'https://www.thesalesbench.com', {
    errorCorrectionLevel: 'H',
    margin: 4,
    width: qrSize,
    color: {
      dark: '#0A192F',
      light: '#FFFFFF'
    }
  });

  qrCtx.drawImage(matrixCanvas, 0, 0);

  // Logo Badge in Center (Wide aspect ratio)
  // Width: ~34% of QR size, Height proportional
  const targetBadgeW = qrSize * 0.36;
  const targetBadgeH = (logo.height / logo.width) * targetBadgeW;
  const badgeX = (qrSize - targetBadgeW) / 2;
  const badgeY = (qrSize - targetBadgeH) / 2;
  const pad = 12;

  // Draw clean white protective card with shadow behind the logo
  qrCtx.save();
  qrCtx.shadowColor = 'rgba(0, 0, 0, 0.35)';
  qrCtx.shadowBlur = 24;
  qrCtx.shadowOffsetX = 0;
  qrCtx.shadowOffsetY = 4;

  qrCtx.fillStyle = '#FFFFFF';
  const rx = 18;
  
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

  roundRect(qrCtx, badgeX - pad, badgeY - pad, targetBadgeW + pad * 2, targetBadgeH + pad * 2, rx);
  qrCtx.fill();
  qrCtx.restore();

  // Draw the exact logo image directly in the center
  qrCtx.drawImage(logo, badgeX, badgeY, targetBadgeW, targetBadgeH);

  const qrBuffer = qrCanvas.toBuffer('image/png');
  fs.writeFileSync('/home/scottcarpentier/thesalesbench-website/thesalesbench-qr-code.png', qrBuffer);
  fs.writeFileSync('/home/scottcarpentier/Downloads/TheSalesBench_QRCode.png', qrBuffer);
  fs.writeFileSync('/home/scottcarpentier/.gemini/antigravity/brain/d0dedf12-f008-4fde-bbf1-85ee6e3c0a6f/thesalesbench-qr-code.png', qrBuffer);
  fs.writeFileSync('/home/scottcarpentier/.gemini/antigravity/brain/d0dedf12-f008-4fde-bbf1-85ee6e3c0a6f/og-image-v3.png', ogBuffer);
  console.log('2. Generated 1200x1200 QR code with exact actual logo');
}

run().catch(console.error);

const { createCanvas, loadImage } = require('canvas');
const QRCode = require('qrcode');
const fs = require('fs');

async function main() {
  const logo = await loadImage('/home/scottcarpentier/thesalesbench-website/assets/exact-logo-master.png');
  const timestamp = Date.now();

  // =========================================================================
  // 1. STANDALONE QR CODE (1400x1400)
  // =========================================================================
  const qrSize = 1400;
  const qrCanvas = createCanvas(qrSize, qrSize);
  const qrCtx = qrCanvas.getContext('2d');

  // Fill solid white
  qrCtx.fillStyle = '#FFFFFF';
  qrCtx.fillRect(0, 0, qrSize, qrSize);

  // Generate QR matrix
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

  // Logo width = 46% of QR size (~644px)
  const logoW = qrSize * 0.46;
  const logoH = (logo.height / logo.width) * logoW;
  const logoX = (qrSize - logoW) / 2;
  const logoY = (qrSize - logoH) / 2;
  const pad = 16;

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

  // Draw clean solid white backplate with shadow to ensure scanner contrast
  qrCtx.save();
  qrCtx.shadowColor = 'rgba(0, 0, 0, 0.4)';
  qrCtx.shadowBlur = 24;
  qrCtx.shadowOffsetX = 0;
  qrCtx.shadowOffsetY = 6;
  qrCtx.fillStyle = '#FFFFFF';
  roundRect(qrCtx, logoX - pad, logoY - pad, logoW + pad * 2, logoH + pad * 2, 22);
  qrCtx.fill();
  qrCtx.restore();

  // Draw the exact logo image directly
  qrCtx.drawImage(logo, logoX, logoY, logoW, logoH);

  const qrBuffer = qrCanvas.toBuffer('image/png');
  fs.writeFileSync('/home/scottcarpentier/thesalesbench-website/thesalesbench-qr-code.png', qrBuffer);
  fs.writeFileSync(`/home/scottcarpentier/thesalesbench-website/qr-code-${timestamp}.png`, qrBuffer);
  fs.writeFileSync('/home/scottcarpentier/Downloads/TheSalesBench_QRCode.png', qrBuffer);
  fs.writeFileSync('/home/scottcarpentier/.gemini/antigravity/brain/d0dedf12-f008-4fde-bbf1-85ee6e3c0a6f/thesalesbench-qr-code.png', qrBuffer);


  // =========================================================================
  // 2. SOCIAL CARD (1200x630) WITH LOGO + SUBTITLE + QR CODE IN BOTTOM RIGHT
  // =========================================================================
  const scW = 1200;
  const scH = 630;
  const scCanvas = createCanvas(scW, scH);
  const scCtx = scCanvas.getContext('2d');

  // Background: Deep Institutional Navy with subtle radial gradient
  scCtx.fillStyle = '#0A192F';
  scCtx.fillRect(0, 0, scW, scH);

  const bgGrad = scCtx.createRadialGradient(scW / 2, scH / 2, 60, scW / 2, scH / 2, 650);
  bgGrad.addColorStop(0, '#112240');
  bgGrad.addColorStop(1, '#0A192F');
  scCtx.fillStyle = bgGrad;
  scCtx.fillRect(0, 0, scW, scH);

  // Border frame
  scCtx.strokeStyle = 'rgba(212, 175, 55, 0.25)';
  scCtx.lineWidth = 1.5;
  scCtx.strokeRect(36, 36, scW - 72, scH - 72);

  // Draw Primary Logo
  const mainLogoW = 680;
  const mainLogoH = (logo.height / logo.width) * mainLogoW;
  const mainLogoX = 80;
  const mainLogoY = 125;

  scCtx.save();
  scCtx.shadowColor = 'rgba(0, 0, 0, 0.55)';
  scCtx.shadowBlur = 30;
  scCtx.shadowOffsetX = 0;
  scCtx.shadowOffsetY = 10;
  scCtx.drawImage(logo, mainLogoX, mainLogoY, mainLogoW, mainLogoH);
  scCtx.restore();

  // Eyebrow / Tagline
  scCtx.font = '600 21px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  scCtx.fillStyle = '#D4B483';
  scCtx.textAlign = 'left';
  scCtx.fillText('FRACTIONAL REVENUE ARCHITECT · B2B SAAS', mainLogoX + 10, mainLogoY + mainLogoH + 54);

  // Value props
  scCtx.font = '400 18px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  scCtx.fillStyle = '#94A3B8';
  scCtx.fillText('Stop Late-Stage Deal Slippage  ·  BYOK AI Sales Infrastructure  ·  Predictable ARR', mainLogoX + 10, mainLogoY + mainLogoH + 92);

  // URL Display
  scCtx.font = '700 24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  scCtx.fillStyle = '#FFFFFF';
  scCtx.fillText('thesalesbench.com', mainLogoX + 10, mainLogoY + mainLogoH + 155);

  // Bottom-right QR code
  const miniQRSize = 175;
  const miniCanvas = createCanvas(miniQRSize, miniQRSize);
  await QRCode.toCanvas(miniCanvas, 'https://www.thesalesbench.com', {
    errorCorrectionLevel: 'M',
    margin: 2,
    width: miniQRSize,
    color: {
      dark: '#0A192F',
      light: '#FFFFFF'
    }
  });

  const qrCardPad = 12;
  const qrCardX = scW - miniQRSize - 80;
  const qrCardY = scH - miniQRSize - 75;

  scCtx.save();
  scCtx.shadowColor = 'rgba(0, 0, 0, 0.6)';
  scCtx.shadowBlur = 25;
  scCtx.shadowOffsetX = 0;
  scCtx.shadowOffsetY = 8;
  scCtx.fillStyle = '#FFFFFF';
  roundRect(scCtx, qrCardX - qrCardPad, qrCardY - qrCardPad, miniQRSize + qrCardPad * 2, miniQRSize + qrCardPad * 2 + 28, 16);
  scCtx.fill();
  scCtx.restore();

  scCtx.drawImage(miniCanvas, qrCardX, qrCardY, miniQRSize, miniQRSize);

  scCtx.font = '700 11px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  scCtx.fillStyle = '#0A192F';
  scCtx.textAlign = 'center';
  scCtx.fillText('SCAN TO VISIT', qrCardX + miniQRSize / 2, qrCardY + miniQRSize + 18);

  const scBuffer = scCanvas.toBuffer('image/png');
  fs.writeFileSync('/home/scottcarpentier/thesalesbench-website/social-card-with-qr.png', scBuffer);
  fs.writeFileSync(`/home/scottcarpentier/thesalesbench-website/social-card-${timestamp}.png`, scBuffer);
  fs.writeFileSync('/home/scottcarpentier/thesalesbench-website/og-image-v3.png', scBuffer);
  fs.writeFileSync('/home/scottcarpentier/thesalesbench-website/og-image-v2.png', scBuffer);
  fs.writeFileSync('/home/scottcarpentier/thesalesbench-website/logo-og.png', scBuffer);
  fs.writeFileSync('/home/scottcarpentier/Downloads/TheSalesBench_SocialCard_With_QR.png', scBuffer);
  fs.writeFileSync('/home/scottcarpentier/.gemini/antigravity/brain/d0dedf12-f008-4fde-bbf1-85ee6e3c0a6f/social-card-with-qr.png', scBuffer);

  console.log('Generated with timestamp:', timestamp);
}

main().catch(console.error);

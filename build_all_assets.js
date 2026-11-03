const { createCanvas, loadImage } = require('canvas');
const QRCode = require('qrcode');
const fs = require('fs');

async function main() {
  const logo = await loadImage('/home/scottcarpentier/thesalesbench-website/assets/actual-logo.png');

  // =========================================================================
  // FILE 1: STANDALONE QR CODE (1400x1400) WITH EXACT SOCIAL CARD LOGO EMBEDDED
  // =========================================================================
  const qrSize = 1400;
  const qrCanvas = createCanvas(qrSize, qrSize);
  const qrCtx = qrCanvas.getContext('2d');

  // White base
  qrCtx.fillStyle = '#FFFFFF';
  qrCtx.fillRect(0, 0, qrSize, qrSize);

  // Generate QR Matrix
  const matrixCanvas = createCanvas(qrSize, qrSize);
  await QRCode.toCanvas(matrixCanvas, 'https://www.thesalesbench.com', {
    errorCorrectionLevel: 'H', // 30% recovery capacity
    margin: 4,
    width: qrSize,
    color: {
      dark: '#0A192F', // Brand Navy
      light: '#FFFFFF'
    }
  });
  qrCtx.drawImage(matrixCanvas, 0, 0);

  // Center logo sizing: 
  // actual-logo is 326x84 (~3.88:1 aspect ratio)
  // Let width = 44% of QR code width (~616px), height = 158px
  const centerW = qrSize * 0.44;
  const centerH = (logo.height / logo.width) * centerW;
  const centerX = (qrSize - centerW) / 2;
  const centerY = (qrSize - centerH) / 2;
  const pad = 20;

  // Solid white backing plate with clean shadow behind the logo
  qrCtx.save();
  qrCtx.shadowColor = 'rgba(0, 0, 0, 0.4)';
  qrCtx.shadowBlur = 28;
  qrCtx.shadowOffsetX = 0;
  qrCtx.shadowOffsetY = 6;
  qrCtx.fillStyle = '#FFFFFF';

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

  roundRect(qrCtx, centerX - pad, centerY - pad, centerW + pad * 2, centerH + pad * 2, 24);
  qrCtx.fill();
  qrCtx.restore();

  // Draw the exact logo image sharply
  qrCtx.drawImage(logo, centerX, centerY, centerW, centerH);

  const qrBuf = qrCanvas.toBuffer('image/png');
  fs.writeFileSync('/home/scottcarpentier/thesalesbench-website/thesalesbench-qr-code.png', qrBuf);
  fs.writeFileSync('/home/scottcarpentier/Downloads/TheSalesBench_QRCode.png', qrBuf);
  fs.writeFileSync('/home/scottcarpentier/.gemini/antigravity/brain/d0dedf12-f008-4fde-bbf1-85ee6e3c0a6f/thesalesbench-qr-code.png', qrBuf);
  console.log('File 1: Branded QR Code generated successfully');


  // =========================================================================
  // FILE 2: SOCIAL CARD (1200x630) WITH LOGO + SUBTITLE + QR CODE IN BOTTOM RIGHT
  // =========================================================================
  const scW = 1200;
  const scH = 630;
  const scCanvas = createCanvas(scW, scH);
  const scCtx = scCanvas.getContext('2d');

  // Background: Deep Institutional Navy with subtle gradient
  scCtx.fillStyle = '#0A192F';
  scCtx.fillRect(0, 0, scW, scH);

  const bgGrad = scCtx.createRadialGradient(scW / 2, scH / 2, 60, scW / 2, scH / 2, 650);
  bgGrad.addColorStop(0, '#112240');
  bgGrad.addColorStop(1, '#0A192F');
  scCtx.fillStyle = bgGrad;
  scCtx.fillRect(0, 0, scW, scH);

  // Decorative border framing
  scCtx.strokeStyle = 'rgba(212, 175, 55, 0.25)';
  scCtx.lineWidth = 1.5;
  scCtx.strokeRect(36, 36, scW - 72, scH - 72);

  // Left Content Area (Logo + Headline + Value props)
  // Draw primary logo
  const logoCardW = 680;
  const logoCardH = (logo.height / logo.width) * logoCardW;
  const logoCardX = 80;
  const logoCardY = 120;

  scCtx.save();
  scCtx.shadowColor = 'rgba(0, 0, 0, 0.55)';
  scCtx.shadowBlur = 30;
  scCtx.shadowOffsetX = 0;
  scCtx.shadowOffsetY = 10;
  scCtx.drawImage(logo, logoCardX, logoCardY, logoCardW, logoCardH);
  scCtx.restore();

  // Eyebrow / Tagline above or below
  scCtx.font = '600 21px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  scCtx.fillStyle = '#D4B483';
  scCtx.textAlign = 'left';
  scCtx.fillText('FRACTIONAL REVENUE ARCHITECT · B2B SAAS', logoCardX + 10, logoCardY + logoCardH + 54);

  // Strategic bullet badges
  scCtx.font = '400 18px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  scCtx.fillStyle = '#94A3B8';
  scCtx.fillText('Stop Late-Stage Deal Slippage  ·  BYOK AI Sales Infrastructure  ·  Predictable ARR', logoCardX + 10, logoCardY + logoCardH + 92);

  // URL Display
  scCtx.font = '700 24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  scCtx.fillStyle = '#FFFFFF';
  scCtx.fillText('thesalesbench.com', logoCardX + 10, logoCardY + logoCardH + 155);

  // Bottom-Right: QR Code Placed on a Crisp White Card
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

  // Draw QR code inside card
  scCtx.drawImage(miniCanvas, qrCardX, qrCardY, miniQRSize, miniQRSize);

  // "SCAN TO VISIT" label under QR
  scCtx.font = '700 11px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  scCtx.fillStyle = '#0A192F';
  scCtx.textAlign = 'center';
  scCtx.fillText('SCAN TO VISIT', qrCardX + miniQRSize / 2, qrCardY + miniQRSize + 18);

  const scBuf = scCanvas.toBuffer('image/png');
  fs.writeFileSync('/home/scottcarpentier/thesalesbench-website/social-card-with-qr.png', scBuf);
  fs.writeFileSync('/home/scottcarpentier/Downloads/TheSalesBench_SocialCard_With_QR.png', scBuf);
  fs.writeFileSync('/home/scottcarpentier/.gemini/antigravity/brain/d0dedf12-f008-4fde-bbf1-85ee6e3c0a6f/social-card-with-qr.png', scBuf);

  // Also update default social preview og-image-v3.png with this card
  fs.writeFileSync('/home/scottcarpentier/thesalesbench-website/og-image-v3.png', scBuf);
  fs.writeFileSync('/home/scottcarpentier/thesalesbench-website/og-image-v2.png', scBuf);
  fs.writeFileSync('/home/scottcarpentier/thesalesbench-website/logo-og.png', scBuf);
  console.log('File 2: Social Card with QR in bottom right generated successfully');
}

main().catch(console.error);

const QRCode = require('qrcode');
const fs = require('fs');

async function createBrandedQR() {
  const targetUrl = 'https://www.thesalesbench.com';

  // High Error Correction (Level 'H') allows up to 30% of code to be covered or distorted
  const qrSvg = await QRCode.toString(targetUrl, {
    type: 'svg',
    errorCorrectionLevel: 'H',
    margin: 4,
    color: {
      dark: '#0A192F', // Brand institutional navy
      light: '#FFFFFF'
    }
  });

  const vbMatch = qrSvg.match(/viewBox="([^"]+)"/);
  const [minX, minY, width, height] = vbMatch[1].split(' ').map(Number);

  // Center badge occupies ~26% of width (safely within 30% Level H tolerance)
  const badgeW = width * 0.28;
  const badgeH = badgeW;
  const badgeX = (width - badgeW) / 2;
  const badgeY = (height - badgeH) / 2;
  const cx = width / 2;
  const cy = height / 2;

  const overlay = `
  <defs>
    <linearGradient id="qrGold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F5E6B3" />
      <stop offset="45%" stop-color="#D4AF37" />
      <stop offset="100%" stop-color="#AA7A1E" />
    </linearGradient>
    <filter id="badgeShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" flood-color="#000" flood-opacity="0.35" />
    </filter>
  </defs>

  <!-- White halo buffer around the center emblem to keep scanner contrast sharp -->
  <rect x="${badgeX - 1.5}" y="${badgeY - 1.5}" width="${badgeW + 3}" height="${badgeH + 3}" rx="${(badgeW + 3) * 0.18}" fill="#FFFFFF" />

  <!-- Outer Navy Container with Gold Border -->
  <rect x="${badgeX}" y="${badgeY}" width="${badgeW}" height="${badgeH}" rx="${badgeW * 0.16}" fill="#0A192F" stroke="url(#qrGold)" stroke-width="${width * 0.009}" filter="url(#badgeShadow)" />

  <!-- Inner Gold Border Detail -->
  <rect x="${badgeX + 1.2}" y="${badgeY + 1.2}" width="${badgeW - 2.4}" height="${badgeH - 2.4}" rx="${badgeW * 0.13}" fill="none" stroke="rgba(212,175,55,0.4)" stroke-width="${width * 0.003}" />

  <!-- Centered Typography & Monogram -->
  <text x="${cx}" y="${cy - badgeH * 0.12}" font-family="'Cinzel', Georgia, serif" font-size="${badgeW * 0.23}" font-weight="700" fill="url(#qrGold)" text-anchor="middle" letter-spacing="0.08em">THE</text>
  <text x="${cx}" y="${cy + badgeH * 0.12}" font-family="'Cinzel', Georgia, serif" font-size="${badgeW * 0.21}" font-weight="700" fill="#FFFFFF" text-anchor="middle" letter-spacing="0.06em">SALES BENCH</text>
  <text x="${cx}" y="${cy + badgeH * 0.29}" font-family="'Inter', sans-serif" font-size="${badgeW * 0.08}" font-weight="600" fill="#D4AF37" text-anchor="middle" letter-spacing="0.16em">REVENUE ARCHITECTED</text>
  `;

  const finalSvg = qrSvg.replace('</svg>', overlay + '</svg>');

  fs.writeFileSync('/home/scottcarpentier/thesalesbench-website/thesalesbench-qr-code.svg', finalSvg);
  fs.writeFileSync('/home/scottcarpentier/Downloads/TheSalesBench_QRCode.svg', finalSvg);
  console.log('Branded SVG generated and saved to repo and Downloads.');
}

createBrandedQR();

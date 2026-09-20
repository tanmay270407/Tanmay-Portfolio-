const sharp = require('sharp');
const fs = require('fs');

async function extractAuthenticLaptop() {
  const full = await sharp('logo2/5a73ead3-fe93-4380-8b6e-8ed079d7bf49.png')
    .raw()
    .toBuffer({ resolveWithObject: true });

  const X0 = 780;
  const Y0 = 208;
  const W = 846;
  const H = 538;

  const out = Buffer.alloc(W * H * 4, 0);

  // Top-Right Fillet:
  const Cx_tr = 1600.3;
  const Cy_tr = 227.1;
  const R_tr = 15.0;

  // Base apex:
  const Cx_bl = 795.5;
  const Cy_bl = 686.5;
  const R_bl = 4.5;

  for (let y = 0; y < H; y++) {
    const fullY = y + Y0;
    for (let x = 0; x < W; x++) {
      const fullX = x + X0;

      // Calculate signed distance to boundary (positive = inside laptop, negative = outside)
      let dist = 999;

      // 1. Outside to the left of the entire laptop
      if (fullX < 791) {
        dist = Math.min(dist, fullX - 791);
      }

      // 2. Base left corner apex rounding (x in [791, 798], y in [680, 693])
      if (fullX < 798 && fullY >= 680 && fullY <= 693) {
        const dApex = R_bl - Math.hypot(fullX - Cx_bl, fullY - Cy_bl);
        dist = Math.min(dist, dApex);
      }

      // 3. Screen Top Edge and Corners
      // Screen top line: y_top(fullX) = 212.0 - 0.13542 * (fullX - 1600.0)
      const yTop = 212.0 - 0.13542 * (fullX - 1600.0);

      if (fullX >= 1114 && fullX <= 1603) {
        // Main screen top line
        const dTop = (fullY - yTop) * 0.991;
        dist = Math.min(dist, dTop);
      } else if (fullX > 1603 && fullY <= 226) {
        // Top-right corner
        const dTr = R_tr - Math.hypot(fullX - Cx_tr, fullY - Cy_tr);
        dist = Math.min(dist, dTr);
      } else if (fullX < 1114 && fullY <= 285) {
        // Outside top-left above screen and above base
        const dTopLeft = Math.min(fullX - 1114, fullY - 280);
        dist = Math.min(dist, dTopLeft);
      }

      // 4. Screen Right Edge (fullY from 226 down to 640)
      if (fullY >= 226 && fullY <= 640) {
        const xRight = 1615.5 - 0.115 * (fullY - 226);
        const dRight = (xRight - fullX) * 0.993;
        dist = Math.min(dist, dRight);
      }

      // 5. Base Right Edge (fullY from 640 to 682)
      if (fullY > 640 && fullY <= 682) {
        const xBaseRight = 1570.0 - 0.38 * (fullY - 640);
        const dBaseRight = (xBaseRight - fullX) * 0.93;
        dist = Math.min(dist, dBaseRight);
      }

      // 6. Outside beyond rightmost laptop point
      if (fullX > 1616) {
        dist = Math.min(dist, 1616 - fullX);
      }

      // 7. Base Top-Left Edge (from apex 792, 684 up to hinge ~1035, 649)
      // Line: y_base_top(fullX) = 684.0 - 0.145 * (fullX - 792.0)
      const yBaseTop = 684.0 - 0.145 * (fullX - 792.0);

      // Screen Left Edge (from top-left ~1118, 276 down to hinge ~1048, 610)
      // Line: x_left(fullY) = 1116.0 - 0.20 * (fullY - 280.0)
      const xScreenLeft = 1116.0 - 0.20 * (fullY - 280.0);

      // The region to the left of the screen AND above the base top edge is EMPTY background:
      if (fullX < xScreenLeft && fullY < yBaseTop) {
        // Distance to the corner formed by screen left edge and base top edge:
        const dLeft = (fullX - xScreenLeft) * 0.98;
        const dBaseTop = (fullY - yBaseTop) * 0.989;
        dist = Math.min(dist, Math.max(dLeft, dBaseTop));
      }

      // 8. Base Front Edge (bottom of laptop)
      let yFront = 0;
      if (fullX <= 1280) {
        yFront = 684.0 + 0.0922 * (fullX - 792.0);
      } else {
        yFront = 729.0 - 0.1821 * (fullX - 1280.0);
      }

      // Shadow allowance: 4px contact shadow
      const maxBottom = yFront + 4.0;
      const dBottom = maxBottom - fullY;
      dist = Math.min(dist, dBottom);

      // Alpha calculation with 1.5px anti-aliasing
      let alpha = 0;
      if (dist >= 0.75) {
        alpha = 255;
      } else if (dist > -0.75) {
        alpha = Math.round(((dist + 0.75) / 1.5) * 255);
      } else {
        alpha = 0;
      }

      if (alpha > 0) {
        const fullIdx = (fullY * full.info.width + fullX) * 3;
        const outIdx = (y * W + x) * 4;

        out[outIdx] = full.data[fullIdx];
        out[outIdx+1] = full.data[fullIdx+1];
        out[outIdx+2] = full.data[fullIdx+2];

        // Soft fade for contact shadow under chassis
        if (fullY > yFront) {
          const shadowFade = Math.max(0, (maxBottom - fullY) / 4.0);
          alpha = Math.round(alpha * shadowFade);
        }

        out[outIdx+3] = alpha;
      }
    }
  }

  // Save to both public and src/assets/images
  await sharp(out, { raw: { width: W, height: H, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile('public/assets/realistic_laptop.png');

  await sharp(out, { raw: { width: W, height: H, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile('src/assets/images/realistic_laptop.png');

  console.log('Successfully generated authentic realistic_laptop.png!');
}

extractAuthenticLaptop().catch(err => {
  console.error(err);
  process.exit(1);
});

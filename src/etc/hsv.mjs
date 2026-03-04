/**
 * RGBとHSVの変換.
 */
export { toHSV, fromHSV };

/**
 * RGBからHSVに変換.
 * @param {number[]} rgb - RGB
 * @return {number[]} HSV
 */
function toHSV(rgb) {
  const [r, g, b] = rgb;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);

  let h;
  if (max == min) {
    h = 0;
  } else if (max === r) {
    h = parseInt(60 * (g - b) / (max - min));
  } else if (max === g) {
    h = parseInt((60 * (b - r) / (max - min))) + 120;
  } else if (max === b) {
    h = parseInt((60 * (r - g) / (max - min))) + 240;
  } else {
    h = 0;
  }

  while (h < 0) {
    h += 360;
  }
  let s = (max == 0) ? 0 : parseInt(255 * (max - min) / max);
  let v = max;
  return [h, s, v];
}

/**
 * HSVからRGBに変換.
 * @param {number[]} hsv - HSV
 * @return {number[]} RGB
 */
function fromHSV(hsv) {
  const [h, s, v] = hsv;

  if (s === 0) {
    return [v, v, v];
  }

  let i = parseInt(h / 60) % 6;
  let f = h / 60.0 - i;
  let p = parseInt((v * (1.0 -             s / 255.0)) + 0.5);
  let q = parseInt((v * (1.0 -         f * s / 255.0)) + 0.5);
  let t = parseInt((v * (1.0 - (1.0 - f) * s / 255.0)) + 0.5);

  let r, g, b;
  switch (i) {
    case 0: r = v; g = t; b = p; break;
    case 1: r = q; g = v; b = p; break;
    case 2: r = p; g = v; b = t; break;
    case 3: r = p; g = q; b = v; break;
    case 4: r = t; g = p; b = v; break;
    case 5: r = v; g = p; b = q; break;
  }
  return [r, g, b];
};

import {Colors} from './helpers/colors';
import {rgbToRrggbb} from './helpers/rgbToRrggbb';

export default function getColorFromGradient(gradient, step) {

  const keys = Object.keys(gradient);

  keys.map(key => {
    const item = gradient[key];

    if (item.charAt(0) === '#' && item.length === 7) {
      return true;
    } else if (item.charAt(0) === '#' && item.length === 4) {
      gradient[key] = rgbToRrggbb(item);
    } else {
      gradient[key] = Colors[item.toLowerCase()];
    }
  });

  if (gradient[step]) return gradient[step];

  const R = {};
  const G = {};
  const B = {};

  const closestStart = Math.max(...keys.filter(v => v < step));
  const closestEnd = Math.min(...keys.filter(v => v > step));

  const percent = ((100 * (step - closestStart)) / (closestEnd - closestStart)) / 100;

  R.start = parseInt(gradient[closestStart].replace('#','').substring(0,2), 16);
  G.start = parseInt(gradient[closestStart].replace('#','').substring(2,4), 16);
  B.start = parseInt(gradient[closestStart].replace('#','').substring(4,6), 16);

  R.end = parseInt(gradient[closestEnd].replace('#','').substring(0,2), 16);
  G.end = parseInt(gradient[closestEnd].replace('#','').substring(2,4), 16);
  B.end = parseInt(gradient[closestEnd].replace('#','').substring(4,6), 16);

  // formula get from this https://stackoverflow.com/a/27536
  R.final = Math.round(R.end * percent + R.start * (1 - percent)).toString(16);
  G.final = Math.round(G.end * percent + G.start * (1 - percent)).toString(16);
  B.final = Math.round(B.end * percent + B.start * (1 - percent)).toString(16);

  R.final = (R.final.length === 1) ? `0${R.final}` : R.final;
  G.final = (G.final.length === 1) ? `0${G.final}` : G.final;
  B.final = (B.final.length === 1) ? `0${B.final}` : B.final;

  return `#${R.final}${G.final}${B.final}`;

}

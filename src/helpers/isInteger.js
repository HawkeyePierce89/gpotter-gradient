// https://github.com/Financial-Times/polyfill-service/blob/master/polyfills/Number/isInteger/polyfill.js
export default Number.isInteger || function (value) {
  return typeof value === 'number' &&
    isFinite(value) &&
    Math.floor(value) === value;
};

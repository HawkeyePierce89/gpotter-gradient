const expect = require('chai').expect;
const getColorFromGradient = require('../index').default;

describe('step is invalid', function() {
  const input = {
    0: '#fff',
    100: '#000'
  };

  [-1, 101, NaN, undefined, null, {}, [], 'step', new Error('1')].forEach(item => {
    it(`step = ${item}`, function() {
      expect(getColorFromGradient(input, item)).to.equal(null);
    });
  });
});

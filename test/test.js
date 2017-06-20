const expect = require('chai').expect;
const getColorFromGradient = require('../index').default;

describe('#getColorFromGradient', function() {
  it('start point', function() {
    const gradient = {
      0: '#ff3336',
      60: '#aa7acc',
      100: '#0091ff'
    };
    expect(getColorFromGradient(gradient, 0)).to.equal('#ff3336');
  });
  it('end point', function() {
    const gradient = {
      0: '#ff3336',
      60: '#aa7acc',
      100: '#0091ff'
    };
    expect(getColorFromGradient(gradient, 100)).to.equal('#0091ff');
  });
  it('intermediate point', function() {
    const gradient = {
      0: '#ff3336',
      60: '#aa7acc',
      100: '#0091ff'
    };
    expect(getColorFromGradient(gradient, 60)).to.equal('#aa7acc');
  });
  it('point between start and intermediate', function() {
    const gradient = {
      0: '#ff3336',
      60: '#aa7acc',
      100: '#0091ff'
    };
    expect(getColorFromGradient(gradient, 27)).to.equal('#d9537a');
  });
});

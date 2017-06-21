const expect = require('chai').expect;
const getColorFromGradient = require('../index').default;

describe('rrggbb', function() {
  const rrggbb = {
    0: '#ff3336',
    41: '#4a2138',
    60: '#aa7acc',
    100: '#0091ff'
  };

  it('start point', function() {
    expect(getColorFromGradient(rrggbb, 0)).to.equal('#ff3336');
  });
  it('point between start and intermediate', function() {
    expect(getColorFromGradient(rrggbb, 27)).to.equal('#882737');
  });
  it('intermediate point', function() {
    expect(getColorFromGradient(rrggbb, 55)).to.equal('#9163a5');
  });
  it('point between intermediate and end', function() {
    expect(getColorFromGradient(rrggbb, 83)).to.equal('#4887e9');
  });
  it('end point', function() {
    expect(getColorFromGradient(rrggbb, 100)).to.equal('#0091ff');
  });
});

describe('rgb', function() {
  const rgb = {
    0: '#cba',
    42: '#456',
    78: '#f00',
    100: '#819'
  };

  it('start point', function() {
    expect(getColorFromGradient(rgb, 0)).to.equal('#ccbbaa');
  });
  it('point between start and intermediate', function() {
    expect(getColorFromGradient(rgb, 27)).to.equal('#75797e');
  });
  it('intermediate point', function() {
    expect(getColorFromGradient(rgb, 51)).to.equal('#73404d');
  });
  it('point between intermediate and end', function() {
    expect(getColorFromGradient(rgb, 83)).to.equal('#e40423');
  });
  it('end point', function() {
    expect(getColorFromGradient(rgb, 100)).to.equal('#881199');
  });
});

describe('color-words', function() {
  const colorWords = {
    0: 'grey',
    45: 'navy',
    85: 'wheat',
    100: 'greenyellow'
  };

  it('start point', function() {
    expect(getColorFromGradient(colorWords, 0)).to.equal('#808080');
  });
  it('point between start and intermediate', function() {
    expect(getColorFromGradient(colorWords, 23)).to.equal('#3f3f80');
  });
  it('intermediate point', function() {
    expect(getColorFromGradient(colorWords, 60)).to.equal('#5c5393');
  });
  it('point between intermediate and end', function() {
    expect(getColorFromGradient(colorWords, 86)).to.equal('#f0e0aa');
  });
  it('end point', function() {
    expect(getColorFromGradient(colorWords, 100)).to.equal('#adff2f');
  });
});
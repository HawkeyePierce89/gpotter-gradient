# gpotter-gradient

Get color from gradient

## Installation npm package
npm install gpotter-gradient

## Usage npm package
````js
const getColorFromGradient = require('gpotter-gradient').default;
const gradient = {
  0: '#ff3336',
  60: '#aa7acc',
  100: '#0091ff'
};

const color = getColorFromGradient(gradient, 27);
`````

## Usage browser library
````html
<script src="dist/gpotter-gradient.client.js"></script>
<script>
const gradient = {
  0: '#ffffff',
  58: '#aa7acc',
  100: '#00bb33'
};

const color = getColorFromGradient(gradient, 33);
</script>
`````
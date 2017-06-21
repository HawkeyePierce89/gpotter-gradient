# gpotter-gradient

Get color of linear gradient at a certain step

## Installation npm package
````npm install gpotter-gradient````

## Usage npm package
````js
const getColorFromGradient = require('gpotter-gradient').default;
const gradient = {
  0: '#ff3336',
  41: '#4a2138',
  60: '#aa7acc',
  100: '#0091ff'
};

const color = getColorFromGradient(gradient, 27); // #882737
`````

## Usage browser library
````html
<script src="dist/gpotter-gradient.client.js"></script>
<script>
const gradient = {
  0: '#ff3336',
  41: '#4a2138',
  60: '#aa7acc',
  100: '#0091ff'
};

const color = getColorFromGradient(gradient, 33); // #6d2538
</script>
`````

## Input gradient format
You can use several color notations to specify gradient

<!-- language: lang-none -->1) #rrggbb notation
````js
const gradient = {
  0: '#ff3336',
  60: '#aa7acc',
  100: '#0091ff'
};
`````

<!-- language: lang-none -->2) #rgb notation
````js
const gradient = {
  0: '#fa0',
  60: '#08f',
  100: '#a7f'
};
`````

<!-- language: lang-none -->3) color words notation; you can use extended colors https://www.w3.org/TR/css3-color/
````js
const gradient = {
  0: 'darkorchid',
  60: 'blue',
  100: 'orchid'
};
`````

## Output color format
Output color format in #rrggbb notation

## Tests
You can run tests in npm:
````npm run test````

Or you can test visually in the browser by using html files in "view" directory.
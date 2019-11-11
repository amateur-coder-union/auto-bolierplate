const path = require('path');
const buble = require('rollup-plugin-buble');
const typescript = require('rollup-plugin-typescript');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const imagex = require('../plugins/image-resolve');

const resolveFile = function(filePath) {
  return path.join(__dirname, '..', filePath);
};

module.exports = [
  {
    input: resolveFile('src/index.ts'),
    output: {
      file: resolveFile('dist/main.js'),
      format: 'cjs',
    },
    preferBuiltins: true,
    plugins: [typescript(), imagex(), resolve(), commonjs(), buble()],
    external: [ 'fs', 'path' ]
  },
];

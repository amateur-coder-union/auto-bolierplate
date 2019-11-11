const { extname, basename } = require('path');
const {
  createReadStream,
  createWriteStream,
  existsSync,
  mkdirSync,
  removeSync
} = require('fs-extra');

module.exports = (opt = {}) => {
  const extensions = opt.extensions || /\.(png|jpg|jpeg|gif|svg)$/;
  console.log(process.env.IS_PROD);
  if (process.env.IS_PROD) removeSync('./dist/assets');
  return {
    name: 'image-resolver',

    load(id) {
      const ext = extname(id);
      if (!extensions.test(ext)) return null; // not an image
      const base = basename(id);

      const output = './dist/assets';
      if (!existsSync(output)) {
        const dirs = output.split('/');
        for (
          let i = 0, dir = dirs[0];
          i < dirs.length;
          i++, dir += `/${dirs[i]}`
        ) {
          if (dir !== '' && !existsSync(dir)) {
            mkdirSync(dir);
          }
        }
      }

      const outputFile = `${output}/${base}`;
      let baseIndex = outputFile.indexOf('/');
      baseIndex = baseIndex !== -1 ? baseIndex + 1 : 0;
      createReadStream(id).pipe(createWriteStream(outputFile));
      return `const img = images.read('./assets/${base}'); export default img;`;
    },
  };
};

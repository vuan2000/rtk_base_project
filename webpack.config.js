const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: path.join(__dirname, './src/assets/scss/main.scss'),
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
};

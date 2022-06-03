// module.exports = {
//     plugins: {
//         'postcss-import': {},
//         // 'postcss-cssnext': {
//         //     browsers: ['last 2 versions', '> 5%']
//         // }
//     },
// };
module.exports = {
    plugins: {
      'postcss-flexbugs-fixes': {},
      'postcss-preset-env': {
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 3,
        features: {
          'custom-properties': false,
        },
      },
    },
  }
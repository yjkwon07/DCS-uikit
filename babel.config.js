module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-typescript',
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
        importSource: '@emotion/react',
      },
    ],
    '@emotion/babel-preset-css-prop',
  ],
  plugins: [
    '@babel/transform-runtime',
    '@emotion/babel-plugin',
    'babel-plugin-lodash',
    'babel-plugin-twin',
    'babel-plugin-macros',
  ],
};

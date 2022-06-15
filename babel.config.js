module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-typescript',
    '@emotion/babel-preset-css-prop',
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
        importSource: '@emotion/react',
      },
    ],
  ],
  plugins: ['babel-plugin-twin', 'babel-plugin-macros'],
};

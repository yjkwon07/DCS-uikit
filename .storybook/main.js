const path = require('path');
const fs = require('fs');

const babel = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-typescript',
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
        importSource: '@emotion/react',
      },
      // @see https://github.com/storybookjs/storybook/issues/12881
      'preset-react-jsx-transform', // Can name this anything, just an arbitrary alias to avoid duplicate presets
    ],
    '@emotion/babel-preset-css-prop',
  ],
  plugins: ['babel-plugin-twin', 'babel-plugin-macros'],
};

module.exports = {
  stories: ['../src/components/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-a11y', '@storybook/addon-links'],
  core: {
    builder: 'webpack5',
  },
  babel: async (options) => {
    const pluginsPackageNameList = babelOptionFlatName(babel.plugins);
    const presetsPackageNameList = babelOptionFlatName(babel.presets);

    options.plugins = options.plugins
      .filter((plugin) => isDuplicatePackage(plugin, pluginsPackageNameList))
      .concat(toPackageAbsolute(babel.plugins));

    options.presets = options.presets
      .filter((preset) => isDuplicatePackage(preset, presetsPackageNameList))
      .concat(toPackageAbsolute(babel.presets));
    return options;
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
    });

    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};

function packageAbsoluteDir(filepath) {
  let currDir = path.dirname(require.resolve(filepath));
  while (true) {
    if (fs.existsSync(path.join(currDir, 'package.json'))) {
      return currDir;
    }
    const { dir, root } = path.parse(currDir);
    if (dir === root) {
      throw new Error(`Could not find package.json in the parent directories starting from ${filepath}.`);
    }
    currDir = dir;
  }
}

function babelOptionFlatName(optionPackageList) {
  return optionPackageList.map((optionPackage) => {
    if (Array.isArray(optionPackage)) {
      return packageAbsoluteDir(optionPackage[0]);
    }
    return packageAbsoluteDir(optionPackage);
  });
}

function isDuplicatePackage(option, currentPackageList) {
  if (Array.isArray(option)) {
    return (
      typeof option[0] === 'string' && !currentPackageList.find((currentPackage) => option[0].includes(currentPackage))
    );
  }
  return !currentPackageList.find((currentPackage) => option.includes(currentPackage));
}

function toPackageAbsolute(packageList) {
  return packageList.map((package) => {
    if (Array.isArray(package) && typeof package[0] === 'string') {
      return [packageAbsoluteDir(package[0]), ...package.slice(1)];
    }
    return packageAbsoluteDir(package);
  });
}

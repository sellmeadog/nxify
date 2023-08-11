const { join } = require('path');

process.env.EXPO_ROUTER_APP_ROOT = join(__dirname, 'src/app');

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['expo-router/babel', 'nativewind/babel'],
  };
};

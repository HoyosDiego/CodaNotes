module.exports = function (api) {
  api.cache.forever();

  const plugins = ["expo-router/babel"];

  return {
    presets: ["babel-preset-expo"],
    plugins: plugins,
  };
};

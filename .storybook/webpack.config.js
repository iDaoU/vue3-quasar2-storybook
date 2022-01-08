const path = require('path')

module.exports = ({ config }) => {
  config.resolve.alias = {
    ...config.resolve.alias,
    "quasar-variables": "quasar/src/styles/quasar.variables.scss",
    "quasar-variables-styl": "quasar/src/css/variables.sass",
    "quasar-styl": "quasar/dist/quasar.sass",
    "quasar-addon-styl": "quasar/src/css/flex-addon.sass",
  };

  config.module.rules.push({
    test: /\.(scss|sass)$/,
    use: ["style-loader", "css-loader", "sass-loader"],
    include: path.resolve(__dirname, "../"),
  });

  return config;
};
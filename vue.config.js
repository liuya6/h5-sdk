const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    // 主题色
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [path.resolve(__dirname, `./src/style/theme/index.scss`)],
    },
  },
});

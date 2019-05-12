const path = require("path")

module.exports = {
  name: "vuepress-theme-musubii",
  plugins: [
    "@vuepress/active-header-links",
    [
      "@vuepress/search",
      {
        searchMaxSuggestions: 10
      }
    ],
    [
      "@vuepress/register-components",
      {
        componentsDir: [path.resolve(__dirname, "components")]
      }
    ],
    "./plugins/palette-scss",
    "./plugins/style-scss"
  ]
}

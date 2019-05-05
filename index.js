const path = require("path")

module.exports = {
  name: "vuepress-theme-musubii",
  plugins: [
    "@vuepress/pagination",
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
    ]
  ]
}

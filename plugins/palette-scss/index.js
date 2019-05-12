const { fs, path } = require("@vuepress/shared-utils")

module.exports = (options, ctx) => ({
  name: "vuepress-plugin-palette-scss",

  async ready() {
    const { sourceDir, writeTemp } = ctx

    const themePalette = path.resolve(
      ctx.themeAPI.theme.path,
      "styles/palette.scss"
    )
    const userPalette = path.resolve(sourceDir, ".vuepress/styles/palette.scss")

    const themePaletteContent = fs.existsSync(themePalette)
      ? `@import ${JSON.stringify(themePalette.replace(/[\\]+/g, "/"))};`
      : ""

    const userPaletteContent = fs.existsSync(userPalette)
      ? `@import ${JSON.stringify(userPalette.replace(/[\\]+/g, "/"))};`
      : ""

    const nullComment = "// null"

    // user's palette can override theme's palette.
    let paletteContent =
      "// User's Palette\n" +
      (userPaletteContent || nullComment) +
      "\n\n// Theme's Palette\n" +
      (themePaletteContent || nullComment)

    if (ctx.themeAPI.existsParentTheme) {
      const parentThemePalette = path.resolve(
        ctx.themeAPI.parentTheme.path,
        "styles/palette.scss"
      )
      const parentThemePaletteContent = fs.existsSync(parentThemePalette)
        ? `@import ${JSON.stringify(
            parentThemePalette.replace(/[\\]+/g, "/")
          )};`
        : ""
      paletteContent =
        "// Parent Theme's Palette\n" +
        (parentThemePaletteContent || nullComment) +
        "\n\n" +
        paletteContent
    }

    await writeTemp("palette.scss", paletteContent)
  }
})

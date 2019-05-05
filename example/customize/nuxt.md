# Nuxt

## npm install

まずは npm で MUSUBii と必要なライブラリをインストール。依存ライブラリは自動でインストールされます。

- [Sass Dashi](https://github.com/qrac/sass-dashi)：SCSS 変数と mixin のパック ※必須
- [MOFTONE](https://qrac.github.io/moftone/)：[マテリアルデザインカラー](https://qrac.github.io/mdtone/)を淡い色合いに変える調整変数
- [Shitaji.CSS](https://qrac.github.io/shitajicss/)：リセット CSS
- [nuxt-sass-resources-loader](https://www.npmjs.com/package/nuxt-sass-resources-loader)：Nuxt.js で node_modules の SCSS 変数ファイルをコンポーネント全体で使えるようにするプラグイン

```bash
npm i musubii nuxt-sass-resources-loader
```

## nuxt.config.js

変数を `_variable.scss` で使い回し、MUSUBii の CSS は `project.scss` に集約して 1 度だけ読み込むようにします。ディレクトリやファイル名は任意に変更してください。

```js
module.exports = {
  modules: [
    ["nuxt-sass-resources-loader", ["./src/assets/css/_variable.scss"]]
  ],
  css: ["~/assets/css/project.scss"]
}
```

## \_variable.scss

```scss
@import "~moftone/src/scss/tone/_moftone.scss";
@import "~sass-dashi/src/scss/_dashi.scss"; // ※必須
@import "~musubii/src/scss/config/_variable.scss"; // ※必須
```

## project.scss

```scss
@import "~shitajicss/src/scss/_shitaji.scss";
@import "~musubii/src/scss/base/_global.scss";
@import "~musubii/src/scss/layout/_section.scss";
@import "~musubii/src/scss/layout/_grid.scss";
@import "~musubii/src/scss/layout/_space.scss";
@import "~musubii/src/scss/module/_heading.scss";
@import "~musubii/src/scss/module/_text.scss";
@import "~musubii/src/scss/module/_button.scss";
@import "~musubii/src/scss/module/_list.scss";
@import "~musubii/src/scss/module/_table.scss";
@import "~musubii/src/scss/module/_form.scss";
@import "~musubii/src/scss/module/_icon.scss";
@import "~musubii/src/scss/module/_alert.scss";
@import "~musubii/src/scss/module/_wysiwyg.scss";
@import "~musubii/src/scss/utility/_size.scss";
@import "~musubii/src/scss/utility/_flex.scss";
@import "~musubii/src/scss/utility/_deco.scss";
@import "~musubii/src/scss/utility/_display.scss";
@import "~musubii/src/scss/utility/_clearfix.scss";
```

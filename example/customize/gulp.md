# gulp

## npm install

まずは npm で MUSUBii をインストール。依存ライブラリは自動でインストールされます。

- [Sass Dashi](https://github.com/qrac/sass-dashi)：SCSS 変数と mixin のパック ※必須
- [MOFTONE](https://qrac.github.io/moftone/)：[マテリアルデザインカラー](https://qrac.github.io/mdtone/)を淡い色合いに変える調整変数
- [Shitaji.CSS](https://qrac.github.io/shitajicss/)：リセット CSS

```bash
npm i musubii
```

## gulpfile.js

`includePaths` を設定することで、簡単なパスで `node_modules` の SCSS を取り込めるようになります。

```js
const gulp = require("gulp")
const sass = require("gulp-sass")

const sassOptions = {
  includePaths: "./node_modules/"
}

gulp.task("scss", () => {
  return gulp
    .src("./src/scss/**/*.scss")
    .pipe(sass(sassOptions))
    .pipe(gulp.dest("./dist/assets/css"))
})
```

## SCSS import

SCSS ファイル内で MUSUBii 関連のファイルを読み込みます。

```scss
@import "moftone/src/scss/tone/_moftone.scss";
@import "sass-dashi/src/scss/_dashi.scss"; // ※必須
@import "musubii/src/scss/config/_variable.scss"; // ※必須

@import "shitajicss/src/scss/_shitaji.scss";

@import "musubii/src/scss/base/_global.scss";
@import "musubii/src/scss/layout/_section.scss";
@import "musubii/src/scss/layout/_grid.scss";
@import "musubii/src/scss/layout/_space.scss";
@import "musubii/src/scss/module/_heading.scss";
@import "musubii/src/scss/module/_text.scss";
@import "musubii/src/scss/module/_button.scss";
@import "musubii/src/scss/module/_list.scss";
@import "musubii/src/scss/module/_table.scss";
@import "musubii/src/scss/module/_form.scss";
@import "musubii/src/scss/module/_icon.scss";
@import "musubii/src/scss/module/_alert.scss";
@import "musubii/src/scss/module/_wysiwyg.scss";
@import "musubii/src/scss/utility/_size.scss";
@import "musubii/src/scss/utility/_flex.scss";
@import "musubii/src/scss/utility/_deco.scss";
@import "musubii/src/scss/utility/_display.scss";
@import "musubii/src/scss/utility/_clearfix.scss";
```

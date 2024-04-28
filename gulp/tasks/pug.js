import webpHtmlNosvg from "gulp-webp-html-nosvg";
import versionNumber from "gulp-version-number";
import gulpPug from "gulp-pug";

export const pug = (cb) => {
  if (app.settings.pug.usePug) {
    return app.gulp
      .src(app.path.src.pug)
      .pipe(
        app.plugins.plumber(
          app.plugins.notify.onError({
            title: "Pug",
            message: "Error: <%= error.message %>",
          })
        )
      )
      .pipe(
        gulpPug({
          // сжатие HTML файла
          pretty: true,
          // показывать в терминале какой файл обработан
          verbose: true,
        })
      )
      .pipe(app.plugins.replace(/@img\//g, "img/"))
      .pipe(
        app.plugins.if(
          app.isBuild || app.settings.img.webpDevMode,
          webpHtmlNosvg()
        )
      )
      .pipe(
        app.plugins.if(
          app.isBuild || app.settings.img.webpDevMode,
          versionNumber({
            value: "%DT%",
            append: {
              key: "_v",
              cover: 0,
              to: ["css", "js"],
            },
            output: {
              file: "gulp/version.json",
            },
          })
        )
      )

      .pipe(app.gulp.dest(app.path.build.pug))
      .pipe(app.plugins.browserSync.stream());
  } else {
    cb();
  }
};

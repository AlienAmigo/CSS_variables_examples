export const assets = (cb) => {
  if (
    app.settings.assets.copyAssets &&
    app.settings.assets.addAssets.length &&
    !app.func.fileExist(app.settings.assets.addAssets)
    ) {
    return app.gulp.src(app.settings.assets.addAssets)
      .pipe(app.gulp.dest(app.path.build.assets))
      .pipe(app.plugins.browserSync.stream());
  } else {
    cb();
  }
}

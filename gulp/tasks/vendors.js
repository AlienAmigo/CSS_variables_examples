import webpack from 'webpack-stream';

export const vendors = (cb) => {
  if (app.settings.js.copyJsVendors && app.settings.js.addVendors.length) {
    return app.gulp
      .src(app.settings.js.addVendors, { sourcemaps: app.isDev })
      .pipe(
        app.plugins.plumber(
          app.plugins.notify.onError({
            title: 'copyVendors',
            message: 'Error: <%= error.message %>'
          })
        )
      )
      .pipe(
        webpack({
          mode: 'production',
          output: {
            filename: 'vendors.min.js'
          }
        })
      )
      .pipe(app.gulp.dest(app.path.build.js))
      .pipe(app.plugins.browserSync.stream());
  } else {
    cb();
  }
};

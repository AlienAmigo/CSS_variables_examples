import svgSprite from "gulp-svg-sprite";

export const svgSpriteTask = (cb) => {
  const spriteOptions = {
    mode: {
      stack: {
        sprite: `../${app.settings.svg.sprite.name}`,
        example: app.settings.svg.sprite.example,
        prefix: app.settings.svg.sprite.prefix,
        dimensions: app.settings.svg.sprite.dimensions,
        render: {
          scss: {
            dest: "../../scss/_sprite-svg.scss",
          },
        },
      },
      // stack: {
      //   sprite: '../sprite-svg.svg',
      //   example: true,
      //   prefix: '.svg-i--%s',
      //   dimensions: '-dim',
      //   render: {
      //     scss: {
      //       dest: '../../scss/_sprite-svg.scss'
      //     }
      //   }
      // }
      // css: {
      //   bust: false,
      //   dest: '../scss',
      //   prefix: ".svg-i-%s",
      //   sprite: '../img/sprite-svg',
      //   dimensions: "--dim",
      //   render: {
      //     scss: {
      //       dest: "_sprite-svg.scss",
      //     },
      //   },
      // }
      // css: {
      //   bust: true,
      //   dest: "../scss",
      //   sprite: "../img/sprite-svg.svg",
      //   prefix: ".i-%s",
      //   dimensions: "--dim",
      //   render: {
      //     scss: {
      //       dest: "_sprite-svg.scss",
      //     },
      //   },
      // },
    },
  };

  if (
    app.settings.svg.processSvgSprite &&
    !app.func.fileExist(`${app.path.svgSpriteFolder}/**/*.svg`)
  ) {
    return app.gulp
      .src(`**/*.svg`, { cwd: `${app.path.svgSpriteFolder}` })
      .pipe(
        app.plugins.plumber(
          app.plugins.notify.onError({
            title: "SVG",
            message: "Error: <%= error.message %>",
          })
        )
      )
      .pipe(
        svgSprite(spriteOptions)
      )
      .pipe(app.gulp.dest(`${app.path.imgFolder}`))
      .pipe(app.plugins.browserSync.stream());
  } else {
    cb();
  }
};

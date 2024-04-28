import spritesmith from 'gulp.spritesmith';
import imagemin from 'gulp-imagemin';
import buffer from 'vinyl-buffer';
import merge from 'merge-stream';

export const pngSpriteTask = (cb) => {
  let spriteFiles = `${app.path.pngSpriteFolder}/**/*.{jpg,jpeg,png,webp,gif}`;
  if (app.settings.png.processPngSprite && !app.func.fileExist(spriteFiles)) {
    let spriteData = app.gulp.src(spriteFiles).pipe(
      spritesmith({
        imgName: app.settings.png.sprite.name, // название собраного спрайта
        cssName: app.settings.png.sprite.cssName, // название css файла
        padding: 4,
        imgPath: app.settings.png.sprite.imgPath // путь к конечному css-файлу
      })
    );
    let styleStream = spriteData.css.pipe(
      app.gulp.dest(`${app.path.scssFolder}/`)
    );

    let imgStream = spriteData.img
      .pipe(buffer())
      .pipe(imagemin({ optimizationLevel: 5 }))
      .pipe(app.gulp.dest(app.path.imgFolder))
      .pipe(app.plugins.browserSync.stream());

    return merge(imgStream, styleStream);
  } else {
    cb();
  }
};

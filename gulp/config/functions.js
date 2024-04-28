/**
 * Проверка существования файла или папки
 * @param  {string} path      Путь до файла или папки
 * @return {boolean}
 */

export const fileExist = (filepath) => {
  let flag = true;
  try {
    fs.accessSync(filepath, fs.F_OK);
  } catch (e) {
    flag = false;
  }
  return flag;
}

export const gulpTaskIf = (condition, task) => {
  task = app.gulp.series(task) // make sure we have a function that takes callback as first argument
  return function (cb) {
    if (condition) {
      task(cb)
    } else {
      cb()
    }
  }
}

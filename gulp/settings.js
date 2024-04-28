export const settings = {
  // pug
  pug: {
    usePug: true
  },

  // css
  css: {
    groupMediaQueriesDevMode: true,
    webpCssDevMode: true,
    overrideBrowserlist: 'last 3 versions',
    uncompressedCssCopy: false
  },

  // img
  img: {
    webpDevMode: true, // создавать файлы webp в режиме разработчика
    compressImgDevMode: true // сжимать в режиме разработчика
  },

  // assets — дополнительные файлы проекта
  assets: {
    copyAssets: false,
    addAssets: []
  },

  // js
  js: {
    processJs: true,
    copyJsVendors: true,
    addVendors: ['node_modules/svg4everybody/dist/svg4everybody.min.js']
  },

  // fonts
  fonts: {
    convertFonts: false, // использовать ковенртер шрифтов gulp
    copyFonts: true,
    copyFontFormat: 'eot,ttf,woff,woff2', // копировать шрифты из папки fonts выбранных форматов
    addFontsToCSss: false, // автоматически добавлять шрифты в css
    fontDisplay: 'swap'
  },

  // png
  png: {
    processPngSprite: true,
    sprite: {
      name: 'png-sprite.png',
      cssName: '_sprite-png.scss', // название css файла
      padding: 4,
      imgPath: '../img/sprite-png.png'
    }
  },

  // svg
  svg: {
    processSvgSprite: true,
    sprite: {
      example: true,
      name: 'sprite-svg.svg',
      prefix: '.svg-i--%s',
      dimensions: '-dim'
    }
  }
};

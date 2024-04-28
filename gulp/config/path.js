import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './build';
const srcFolder = './src';
const svgSpriteFolder = `${srcFolder}/sprite-svg`;
const pngSpriteFolder = `${srcFolder}/sprite-png`;
const imgFolder = `${srcFolder}/img`;
const fontsFolder = `${srcFolder}/fonts`;
const scssFolder = `${srcFolder}/scss`;

export const path = {
  build: {
    favicon: `${buildFolder}/favicon/`,
    assets: `${buildFolder}/assets/`,
    js: `${buildFolder}/js/`,
    css: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    pug: `${buildFolder}/`,
    img: `${buildFolder}/img/`,
    fonts: `${buildFolder}/fonts/`
  },
  src: {
    favicon: `${srcFolder}/favicon/*.{jpg,jpeg,png,svg,webp,gif,ico,webmanifest}`,
    js: `${srcFolder}/js/script.js`,
    img: [
      `${imgFolder}/**/*.{jpg,jpeg,png,gif,webp}`,
      `!${imgFolder}/stack/*.*`
    ],
    svg: `${srcFolder}/img/**/*.svg`,
    scss: `${scssFolder}/style.scss`,
    html: `${srcFolder}/pages/**/*.html`,
    pug: `${srcFolder}/pages/**/*.pug`,
    files: `${srcFolder}/files/**/*.*`,
    svgicons: `${svgSpriteFolder}/*.svg`
  },
  watch: {
    favicon: `${srcFolder}/favicon/*.{jpg,jpeg,png,svg,webp,gif,ico,webmanifest}`,
    js: `${srcFolder}/**/*.js`,
    scss: `${scssFolder}/**/*.scss`,
    html: `${srcFolder}/**/*.{html,htm}`,
    pug: `${srcFolder}/**/*.pug`,
    img: `${imgFolder}/**/*.{jpg,jpeg,png,gif,webp,svg,ico}`,
    files: `${srcFolder}/files/**/*.*`,
    svgicons: `${svgSpriteFolder}/*.svg`,
    pngicons: `${pngSpriteFolder}/**/*.png`
  },
  clean: buildFolder,
  buildFolder,
  srcFolder,
  rootFolder,
  imgFolder,
  svgSpriteFolder,
  pngSpriteFolder,
  fontsFolder,
  scssFolder,
  ftp: 'test'
};

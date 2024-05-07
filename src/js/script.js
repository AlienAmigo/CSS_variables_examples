import { textZoom } from './modules/textZoom.js';

function ready(fn) {
  if (
    document.attachEvent
      ? document.readyState === 'complete'
      : document.readyState !== 'loading'
  ) {
    fn();
  }
}

ready(() => {
  textZoom();
});

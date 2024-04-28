import * as flsFunctions from './modules/functions.js';

function ready(fn) {
  if (
    document.attachEvent
      ? document.readyState === 'complete'
      : document.readyState !== 'loading'
  ) {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}
ready(() => {
  const bookContainer = document.querySelector('.book-container');
  const plusBtn = document.querySelector('#plus-btn');
  const minusBtn = document.querySelector('#minus-btn');
  const resetBtn = document.querySelector('#reset-btn');
  const serifBtn = document.querySelector('#serif-btn');
  const sansSerifBtn = document.querySelector('#sans-serif-btn');
  const info = document.querySelector('.text-zoom-panel__info');
  const zoomStep = 2;

  if (bookContainer) {
    const checkFontSize = () => {
      let fz = getComputedStyle(bookContainer).fontSize;
      info.style.fontSize = fz;
      info.textContent = fz;
    };

    checkFontSize();

    const changeFontSize = (plus = true) => {
      let currentFontSize = +getComputedStyle(bookContainer)
        .getPropertyValue('--font-size')
        .trim()
        .replace(/^([0-9]+).+/g, '$1');

      if (
        (currentFontSize - zoomStep > 0 && !plus) ||
        (currentFontSize + zoomStep < 200 && plus)
      ) {
        let direction = plus ? 1 : -1;
        bookContainer.style.setProperty(
          '--font-size',
          `${currentFontSize + direction * zoomStep}px`
        );
        checkFontSize();
      }
    };

    const handleResetBtnOnClick = () => {
      bookContainer.style.removeProperty('font-family');
      bookContainer.style.removeProperty('--font-size');
      checkFontSize();
    };

    const handleSerifBtnOnClick = () => {
      console.log('1');
      bookContainer.style.fontFamily = 'var(--font-family-serif)';
    };
    const handleSansSerifBtnOnClick = () => {
      bookContainer.style.fontFamily = 'var(--font-family-sans-serif)';
    };

    plusBtn.addEventListener('click', () => {
      changeFontSize();
    });

    minusBtn.addEventListener('click', () => {
      changeFontSize(false);
    });

    resetBtn.addEventListener('click', handleResetBtnOnClick);
    serifBtn.addEventListener('click', handleSerifBtnOnClick);
    sansSerifBtn.addEventListener('click', handleSansSerifBtnOnClick);
  }
});

export {};

const headerEl = document.querySelector('.header') as HTMLHeadingElement;
const headerFloatEl = document.querySelector('.header-float') as HTMLHeadingElement;

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 160) {
    headerEl.style.opacity = '0';
    headerFloatEl.style.display = 'block';
    return;
  }

  headerEl.style.opacity = '1';
  headerFloatEl.style.display = 'none';
});

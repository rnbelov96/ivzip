export {};

const slidersElList = document.querySelectorAll('.mini-slider');
const prevBtnEl = document.querySelector(
  '.mini-slider__prev-btn',
) as HTMLButtonElement;
const nextBtnEl = document.querySelector(
  '.mini-slider__next-btn',
) as HTMLButtonElement;

let currentImage = 1;
const imageAmount = 2;

const blockBtns = () => {
  prevBtnEl.disabled = true;
  nextBtnEl.disabled = true;
};
const unBlockBtns = () => {
  prevBtnEl.disabled = false;
  nextBtnEl.disabled = false;
};

const moveForward = () => {
  clearInterval(intervalTimer);
  blockBtns();

  currentImage += 1;

  slidersElList.forEach(slider => {
    const sliderImgBoxEl = slider.querySelector(
      '.slider__img-box',
    ) as HTMLDivElement;

    sliderImgBoxEl.style.transform = `translate3d(-${
      currentImage
    }00%, 0, 0)`;
  });

  if (currentImage === imageAmount + 1) {
    currentImage = 1;
    slidersElList.forEach(slider => {
      const sliderImgBoxEl = slider.querySelector(
        '.slider__img-box',
      ) as HTMLDivElement;
      setTimeout(() => {
        sliderImgBoxEl.style.transition = 'transform 0s ease-in';
        sliderImgBoxEl.style.transform = 'translate3d(-100%, 0, 0)';
        setTimeout(() => {
          sliderImgBoxEl.style.transition = 'transform 1s ease-in';
        }, 50);
      }, 1100);
    });
  }

  if (currentImage === 0) {
    currentImage = 2;
    slidersElList.forEach(slider => {
      const sliderImgBoxEl = slider.querySelector(
        '.slider__img-box',
      ) as HTMLDivElement;
      setTimeout(() => {
        sliderImgBoxEl.style.transition = 'transform 0s ease-in';
        sliderImgBoxEl.style.transform = 'translate3d(-200%, 0, 0)';
        setTimeout(() => {
          sliderImgBoxEl.style.transition = 'transform 1s ease-in';
        }, 50);
      }, 1100);
    });
  }
  setTimeout(() => {
    unBlockBtns();
  }, 1100);
  intervalTimer = setInterval(moveForward, 3000);
};

const moveBack = () => {
  clearInterval(intervalTimer);
  blockBtns();

  currentImage -= 1;

  slidersElList.forEach(slider => {
    const sliderImgBoxEl = slider.querySelector(
      '.slider__img-box',
    ) as HTMLDivElement;

    if (currentImage <= 0) {
      sliderImgBoxEl.style.transform = `translate3d(${
        currentImage
      }00%, 0, 0)`;
    }

    sliderImgBoxEl.style.transform = `translate3d(-${
      currentImage
    }00%, 0, 0)`;
  });

  if (currentImage === imageAmount + 1) {
    currentImage = 1;
    slidersElList.forEach(slider => {
      const sliderImgBoxEl = slider.querySelector(
        '.slider__img-box',
      ) as HTMLDivElement;
      setTimeout(() => {
        sliderImgBoxEl.style.transition = 'transform 0s ease-in';
        sliderImgBoxEl.style.transform = 'translate3d(0, 0, 0)';
        setTimeout(() => {
          sliderImgBoxEl.style.transition = 'transform 1s ease-in';
        }, 50);
      }, 1100);
    });
  }

  if (currentImage === 0) {
    currentImage = 2;
    slidersElList.forEach(slider => {
      const sliderImgBoxEl = slider.querySelector(
        '.slider__img-box',
      ) as HTMLDivElement;
      setTimeout(() => {
        sliderImgBoxEl.style.transition = 'transform 0s ease-in';
        sliderImgBoxEl.style.transform = 'translate3d(-200%, 0, 0)';
        setTimeout(() => {
          sliderImgBoxEl.style.transition = 'transform 1s ease-in';
        }, 50);
      }, 1100);
    });
  }
  setTimeout(() => {
    unBlockBtns();
  }, 1100);
  intervalTimer = setInterval(moveForward, 3000);
};

let intervalTimer = setInterval(moveForward, 3000);

nextBtnEl.addEventListener('click', moveForward);

prevBtnEl.addEventListener('click', moveBack);

const imgs = document.querySelectorAll('.image');
const imgsArray = Array.from(imgs);
const prev = document.querySelectorAll('.left-btn');
const next = document.querySelectorAll('.right-btn');

prev.forEach(btn => {
  btn.addEventListener('click', e => {
      let current = e.target;
      let currentImg = document.querySelector(`.image:not(.hide)`);
      let currentImgIndex = imgsArray.indexOf(currentImg);

      currentImg.classList.toggle('hide');
      if (currentImgIndex === 0) {
        imgs[imgs.length - 1].classList.toggle('hide');
      } else {
          imgs[currentImgIndex - 1].classList.toggle('hide');
      }
  });
});

next.forEach(btn => {
  btn.addEventListener('click', e => {
      let current = e.target;
      let currentImg = document.querySelector(`.image:not(.hide)`);
      let currentImgIndex = imgsArray.indexOf(currentImg);

      currentImg.classList.toggle('hide');
      if (currentImgIndex === imgs.length - 1) {
        imgs[0].classList.toggle('hide');
      } else {
          imgs[currentImgIndex + 1].classList.toggle('hide');
      }
  });
});

let carouselNav = document.querySelector('#carousel-nav');

imgs.forEach(image => {
    let nav = document.createElement('div');
    nav.classList.add('nav-btn');
    carouselNav.appendChild(nav);

    let carouselBtn = document.querySelectorAll('.nav-btn');
    let carouselBtnArray = Array.from(carouselBtn);

    carouselBtnArray[0].style.filter = 'brightness(140%)';

    carouselBtn.forEach(btn => {
        btn.addEventListener('click', e => {
            let current = e.target;
            let currentBtnIndex = carouselBtnArray.indexOf(current);
            let showImg = imgsArray[currentBtnIndex];

            imgs.forEach(img => {
                img.classList.add('hide');
                carouselBtn.forEach(btn => {
                    btn.style.filter = 'brightness(100%)';
                });
            });
            showImg.classList.toggle('hide');
            current.style.filter = 'brightness(140%)';
        });
    });
});
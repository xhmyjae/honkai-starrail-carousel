const imgs = document.querySelectorAll('.image');
const imgsArray = Array.from(imgs);
const prev = document.querySelectorAll('.left-btn');
const next = document.querySelectorAll('.right-btn');
let carouselNav = document.querySelector('#carousel-nav');

prev.forEach(btn => {
  btn.addEventListener('click', e => {
      let current = e.target;
      let currentImg = document.querySelector(`.image:not(.hide)`);
      let currentImgIndex = imgsArray.indexOf(currentImg);

      let carouselBtn = document.querySelectorAll('.nav-btn');

      currentImg.classList.toggle('hide');
      carouselBtn.forEach(btn => {
          btn.style.filter = 'brightness(100%)';
          btn.classList.remove('border');
      });
      if (currentImgIndex === 0) {
        imgs[imgs.length - 1].classList.toggle('hide');
          carouselBtn[imgs.length - 1].style.filter = 'brightness(150%)';
          carouselBtn[imgs.length - 1].classList.add('border');
      } else {
          imgs[currentImgIndex - 1].classList.toggle('hide');
          carouselBtn[currentImgIndex - 1].style.filter = 'brightness(150%)';
          carouselBtn[currentImgIndex - 1].classList.add('border');
      }
  });
});

next.forEach(btn => {
  btn.addEventListener('click', e => {
      let current = e.target;
      let currentImg = document.querySelector(`.image:not(.hide)`);
      let currentImgIndex = imgsArray.indexOf(currentImg);

      let carouselBtn = document.querySelectorAll('.nav-btn');

      currentImg.classList.toggle('hide');
      carouselBtn.forEach(btn => {
          btn.style.filter = 'brightness(100%)';
          btn.classList.remove('border');
      });
      if (currentImgIndex === imgs.length - 1) {
          imgs[0].classList.toggle('hide');
          carouselBtn[0].style.filter = 'brightness(150%)';
          carouselBtn[0].classList.add('border');
      } else {
          imgs[currentImgIndex + 1].classList.toggle('hide');
          carouselBtn[currentImgIndex + 1].style.filter = 'brightness(150%)';
          carouselBtn[currentImgIndex + 1].classList.add('border');
      }
  });
});

imgs.forEach(image => {
    let nav = document.createElement('div');
    nav.classList.add('nav-btn');
    carouselNav.appendChild(nav);

    let carouselBtn = document.querySelectorAll('.nav-btn');
    let carouselBtnArray = Array.from(carouselBtn);

    carouselBtnArray[0].style.filter = 'brightness(150%)';
    carouselBtnArray[0].classList.add('border');

    carouselBtn.forEach(btn => {
        btn.addEventListener('click', e => {
            let current = e.target;
            let currentBtnIndex = carouselBtnArray.indexOf(current);
            let showImg = imgsArray[currentBtnIndex];

            imgs.forEach(img => {
                img.classList.add('hide');
                carouselBtn.forEach(btn => {
                    btn.style.filter = 'brightness(100%)';
                    btn.classList.remove('border');
                });
            });
            showImg.classList.toggle('hide');
            current.style.filter = 'brightness(150%)';
            current.classList.add('border');
        });
    });
});
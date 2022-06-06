const imgs = document.querySelectorAll('.image');
const imgsArray = Array.from(imgs);
const prev = document.querySelectorAll('.left-btn');
const next = document.querySelectorAll('.right-btn');
let carouselNav = document.querySelector('#carousel-nav');

/* Code for the previous button. Selecting the previous button and adding an event listener to it. When
the button is clicked, it is selecting the current image and the current image index. It is also selecting the carousel
buttons. It is then toggling the hide class on the current image. It is also toggling the filter and border class on the
carousel buttons. If the current image index is 0, it is toggling the hide class on the last image in the array. It is
also toggling the filter and border class on the last carousel button. If the current image index is not 0, it is
toggling the hide class on the previous image in the array. It is also toggling the filter and border class on the
previous carousel button. */
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

/* Code for the next button. It is selecting the next button and adding an event listener to it. When
the button is clicked, it is selecting the current image and the current image index. It is also selecting the carousel
buttons. It is then toggling the hide class on the current image. It is also toggling the filter and border class on the
carousel buttons. If the current image index is the last image in the array, it is toggling the hide class on the first
image in the array. It is also toggling the filter and border class on the first carousel button. If the current image
index is not the last image in the array, it is toggling the hide class on the next image in the array. It is also
toggling the filter and border class on the next carousel button. */
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

/* Creating a carousel navigation. It is creating a div with the class of nav-btn and appending it to the
carousel navigation. It is then selecting all of the carousel buttons and creating an array from them. It is then
setting the filter and border class on the first carousel button. It is then adding an event listener to each carousel
button. When the carousel button is clicked, it is selecting the current carousel button and the current carousel button
index. It is then selecting the image that corresponds with the current carousel button index. It is then adding the
hide class to each image and setting the filter and border class on each carousel button. It is then toggling the hide
class on the image that corresponds with the current carousel button index. It is also setting the filter and border
class on the current carousel button. */
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

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  effect: 'fade',
  autoplay: {
    delay: 2500,
  },
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
});

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.menu__button').forEach(function(active) {
    active.addEventListener('click', function(event){
      const path = event.currentTarget.dataset.path;
      console.log(path);

      document.querySelectorAll('.tabs-box').forEach(function(content){
        content.classList.remove('tabs-box__active');
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('tabs-box__active');
    });
  });
});

const anchors = document.querySelectorAll('.header__link')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href')
    
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
};
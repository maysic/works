var map;

DG.then(function () {
    map = DG.map('map', {
        center: [51.480118, 46.126231],
        zoom: 16
    });
    var myIcon = DG.icon({
      iconUrl: 'images/icon.png',
      iconSize: [30, 30],
      iconAnchor: [25, 25],
  });
  
  DG.marker([51.480118, 46.126231], {icon: myIcon}).addTo(map);
});

const swiper = new Swiper('.work__swiper', {
  // Optional parameters
  direction: 'horizontal',
  effect: 'slide',
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      autoHeight: true,
    },
    1200: {
      slidesPerView: 3,
    }
  },

});

document.querySelectorAll('.header__link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    
    const href = this.getAttribute('href').substring(1);

    const scrollTarget = document.getElementById(href);

    const topOffset = 100;

    const elementPosition = scrollTarget.getBoundingClientRect().top;

    const offsetPosition = elementPosition - topOffset;

    window.scrollBy ({
      top: offsetPosition,
      behavior: 'smooth',
    })
  })
})
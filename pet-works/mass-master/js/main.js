const anchors = document.querySelectorAll('.header__link')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href')
    
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
};

window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#burger').addEventListener('click', function(){
    document.querySelector('#menu').classList.toggle('header__menu-is-active')
  })
});
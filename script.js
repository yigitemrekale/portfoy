let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.style.top = '-70px';
  } else {
    navbar.style.top = '10px'; // biraz altıra alınabilir
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});


const profilKart = document.getElementById('profil-kart');
function animateProfilKart() {
  profilKart.classList.remove('animated');  // varsa kaldır
  void profilKart.offsetWidth;               // trigger reflow (animasyonu yeniden tetikler)
  profilKart.classList.add('animated');     // tekrar ekle
}

window.addEventListener('load', () => {
  animateProfilKart();
});

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if(scrollTop < lastScrollTop) {
    // yukarı çıkıyorsa animasyonu tetikle
    animateProfilKart();
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

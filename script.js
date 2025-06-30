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


// Proje kartlarının yumuşak açılma animasyonu

function revealProjects() {
  const cards = document.querySelectorAll('.proje-card');
  cards.forEach((card, i) => {
    setTimeout(() => {
      card.classList.add('visible');
    }, i * 200); // Kartlar 200ms arayla açılır
  });
}

window.addEventListener('load', () => {
  revealProjects();
});

// İstersen scroll ile tekrar animasyon için (isteğe bağlı)

window.addEventListener('scroll', () => {
  const cards = document.querySelectorAll('.proje-card');
  const triggerBottom = window.innerHeight * 0.85;

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if(cardTop < triggerBottom) {
      card.classList.add('visible');
    } else {
      card.classList.remove('visible');
    }
  });
});

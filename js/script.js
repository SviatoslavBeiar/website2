// Инициализация AOS
AOS.init({
    duration: 1000,
    once: true
  });
  
  // Плавный скролл для якорных ссылок
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 60,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Тогл мобильного меню
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  mobileToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
  
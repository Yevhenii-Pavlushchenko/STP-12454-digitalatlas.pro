document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.gameplay-slider-track');
  const slides = document.querySelectorAll('.gameplay-slide');
  const dots = document.querySelectorAll('.gameplay-dot');
  const btnPrev = document.querySelector('.btn-prev');
  const btnNext = document.querySelector('.btn-next');

  if (!track || slides.length === 0) return;

  // Функция прокрутки к индексу слайда
  const scrollToSlide = index => {
    if (index >= 0 && index < slides.length) {
      const slideWidth = slides[0].getBoundingClientRect().width;
      const gap = 16; // Должно совпадать с gap в CSS
      track.scrollTo({
        left: index * (slideWidth + gap),
        behavior: 'smooth',
      });
    }
  };

  // Обработка кликов по стрелочкам
  btnPrev?.addEventListener('click', () => {
    const activeDot = document.querySelector('.gameplay-dot.active');
    const currentIndex = parseInt(activeDot?.dataset.slide || '0', 10);
    scrollToSlide(currentIndex - 1);
  });

  btnNext?.addEventListener('click', () => {
    const activeDot = document.querySelector('.gameplay-dot.active');
    const currentIndex = parseInt(activeDot?.dataset.slide || '0', 10);
    scrollToSlide(currentIndex + 1);
  });

  // Обработка кликов по точкам (пагинации)
  dots.forEach(dot => {
    dot.addEventListener('click', e => {
      const targetIndex = parseInt(e.target.dataset.slide, 10);
      scrollToSlide(targetIndex);
    });
  });

  // Синхронизация активной точки при ручном СВАЙПЕ (IntersectionObserver)
  const observerOptions = {
    root: track,
    threshold: 0.6, // Слайд считается активным, если виден на 60%
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const slideIndex = Array.from(slides).indexOf(entry.target);

        // Обновляем активный класс у точек
        dots.forEach((dot, idx) => {
          dot.classList.toggle('active', idx === slideIndex);
        });
      }
    });
  }, observerOptions);

  slides.forEach(slide => observer.observe(slide));
});

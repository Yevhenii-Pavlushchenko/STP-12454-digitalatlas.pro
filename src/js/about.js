const pictureWrapper = document.querySelector('[data-observer]');

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.dataset.observer = 'true';
      } else {
        entry.target.dataset.observer = 'false';
      }
    });
  },
  {
    threshold: 0.1,
  }
);
if (pictureWrapper) {
  observer.observe(pictureWrapper);
}

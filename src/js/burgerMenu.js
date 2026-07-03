const openBtnEl = document.querySelector('[data-menu-open]');
const closeBtnEl = document.querySelector('[data-menu-close]');
const modalViewEl = document.querySelector('[data-visible]');
const navListEl = document.querySelector('[data-menu-navigation]');

openBtnEl.addEventListener('click', () => {
  modalViewEl.dataset.visible = 'open';
  closeBtnEl.addEventListener('click', handleClose);
  document.addEventListener('keydown', handleEscClose);
  document.body.dataset.scroll = 'false';
});

const handleClose = () => {
  modalViewEl.dataset.visible = 'close';
  document.body.dataset.scroll = 'true';
  closeBtnEl.removeEventListener('click', handleClose);
  document.removeEventListener('keydown', handleEscClose);
};

const handleEscClose = e => {
  if (e.key === 'Escape') handleClose();
};

navListEl.addEventListener('click', e => {
  if (e.target.tagName === 'A') handleClose();
});

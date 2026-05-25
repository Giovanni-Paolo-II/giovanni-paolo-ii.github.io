const hamburgerBtn = document.getElementById('hamburger-btn');
const iconHamburger = document.getElementById('icon-hamburger');
const iconClose = document.getElementById('icon-close');
const mobileMenu = document.getElementById('mobile-menu');

function openMobileMenu() {
  mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
  mobileMenu.classList.add('opacity-100');
  mobileMenu.setAttribute('aria-hidden', 'false');
  hamburgerBtn.setAttribute('aria-expanded', 'true');
  iconHamburger.classList.add('hidden');
  iconClose.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
  mobileMenu.classList.remove('opacity-100');
  mobileMenu.classList.add('opacity-0', 'pointer-events-none');
  mobileMenu.setAttribute('aria-hidden', 'true');
  hamburgerBtn.setAttribute('aria-expanded', 'false');
  iconHamburger.classList.remove('hidden');
  iconClose.classList.add('hidden');
  document.body.style.overflow = '';
}

hamburgerBtn.addEventListener('click', () => {
  const isOpen = hamburgerBtn.getAttribute('aria-expanded') === 'true';
  isOpen ? closeMobileMenu() : openMobileMenu();
});

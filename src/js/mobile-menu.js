(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelectorAll('.js-close-menu');
  const mainCloseMenuBtn = document.querySelector('.js-close-menu-main');
  const toggleMenu = () => {
     const isMenuOpen =
        openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
     openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
     mobileMenu.classList.toggle('is-open');
     openMenuBtn.classList.toggle('hidden');
     mainCloseMenuBtn.classList.toggle('hidden');
  };
  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.forEach((link) => link.addEventListener("click", toggleMenu));
  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
     if (!e.matches) return;
     mobileMenu.classList.remove('is-open');
     openMenuBtn.setAttribute('aria-expanded', false);
     bodyScrollLock.enableBodyScroll(document.body);
     closeMenuBtn.classList.toggle('hidden');
     openMenuBtn.classList.toggle('hidden');
  });
})(); 

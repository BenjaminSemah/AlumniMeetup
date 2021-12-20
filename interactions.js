const hamburgerMenu = document.querySelector('.hamburger-menu');
const menuCloseBtn = document.querySelector('#mobile-menu-close');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuHome = document.querySelector('.mobile-menu-home');
const mobileMenuAbout = document.querySelector('.mobile-menu-about');
const mobileMenuProgram = document.querySelector('.mobile-menu-program');
const mobileMenuSponsors = document.querySelector('.mobile-menu-sponsors');

function openMobileMenu() {
  mobileMenu.style.display='block';
}

function closeMobileMenu() {
  mobileMenu.style.display='none';
}

hamburgerMenu.addEventListener('click', openMobileMenu);
menuCloseBtn.addEventListener('click', closeMobileMenu);
mobileMenuHome.addEventListener('click', closeMobileMenu);
mobileMenuAbout.addEventListener('click', closeMobileMenu);
mobileMenuProgram.addEventListener('click', closeMobileMenu);
mobileMenuSponsors.addEventListener('click', closeMobileMenu);
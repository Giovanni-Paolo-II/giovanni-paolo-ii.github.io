const nav = document.querySelector('nav');
document.documentElement.style.setProperty('--nav-height', `${nav.offsetHeight}px`);
window.addEventListener('resize', () => {
    document.documentElement.style.setProperty('--nav-height', `${nav.offsetHeight}px`);
});

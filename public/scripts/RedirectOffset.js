window.addEventListener('load', () => {
    const hash = window.location.hash;
    if (hash) {
        const target = document.querySelector(hash);
        const navHeight = document.querySelector('nav').offsetHeight;
        if (target) {
            const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
            window.scrollTo({ top, behavior: 'instant' });
        }
    }
});

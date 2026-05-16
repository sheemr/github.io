const langBtn = document.getElementById('lang-toggle');
let currentLang = 'en';

langBtn.addEventListener('click', function() {

    if (currentLang === 'en') {
        currentLang = 'es';
        langBtn.textContent = 'EN';
    } else {
        currentLang = 'en';
        langBtn.textContent = 'ES';
    }

    const translatables = document.querySelectorAll('[data-en]');

    translatables.forEach(function(el) {
        el.textContent = el.dataset[currentLang];
    });

});

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(function(el) {
    observer.observe(el);
});
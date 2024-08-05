// scripts.js

function toggleMenu() {
    const menu = document.getElementById('fullScreenMenu');
    menu.classList.toggle('show');
}

document.querySelectorAll('.full-screen-menu nav ul li a').forEach(link => {
    link.addEventListener('mouseover', function() {
        const hoverImage = document.getElementById('hoverImage');
        hoverImage.style.backgroundImage = `url(${this.dataset.hoverImg})`;
        hoverImage.style.opacity = 1;
    });

    link.addEventListener('mouseout', function() {
        const hoverImage = document.getElementById('hoverImage');
        hoverImage.style.opacity = 0;
    });
    
});

document.addEventListener('DOMContentLoaded', () => {
    const section = document.getElementById('featuredCars');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.1 });

    observer.observe(section);
});


document.addEventListener('DOMContentLoaded', () => {
    const section = document.getElementById('aboutUs');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.1 });

    observer.observe(section);
});


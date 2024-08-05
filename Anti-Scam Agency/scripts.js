// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('#nav-toggle');
    const navSidebar = document.querySelector('#nav-sidebar');
    const navClose = document.querySelector('#nav-close');
    const overlay = document.querySelector('#overlay');

    function openSidebar() {
        navSidebar.classList.add('open');
        overlay.classList.add('show');
    }

    function closeSidebar() {
        navSidebar.classList.remove('open');
        overlay.classList.remove('show');
    }

    navToggle.addEventListener('click', openSidebar);
    navClose.addEventListener('click', closeSidebar);
    overlay.addEventListener('click', closeSidebar);
});


// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const carouselImages = document.querySelector('.carousel-images');
    const prevButton = document.querySelector('#prev');
    const nextButton = document.querySelector('#next');

    let index = 0;
    const totalImages = document.querySelectorAll('.carousel-images img').length;

    function showSlide(n) {
        if (n >= totalImages) {
            index = 0;
        } else if (n < 0) {
            index = totalImages - 1;
        } else {
            index = n;
        }
        const offset = -index * 100; // Shift the carousel to show the correct image
        carouselImages.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener('click', function() {
        showSlide(index - 1);
    });

    nextButton.addEventListener('click', function() {
        showSlide(index + 1);
    });

    // Optional: Auto-slide functionality
    setInterval(function() {
        showSlide(index + 1);
    }, 5000); // Change slide every 5 seconds
});
document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
});

document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
});
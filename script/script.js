
document.addEventListener('DOMContentLoaded', function () {
    console.log('Navigation elements found:', document.querySelectorAll('nav .reveal').length);
    console.log('Links found:', document.querySelectorAll('.links .reveal').length);

    const allNavReveals = document.querySelectorAll('nav .reveal');
    console.log('Total nav reveals:', allNavReveals.length);

    allNavReveals.forEach((element, index) => {
        console.log('Animating element:', element, 'Index:', index);
        setTimeout(() => {
            element.classList.add('active');
            console.log('Added active to:', element);
        }, 300 + (index * 100));
    });

    const heroTitle = document.querySelector('.home-text h1');
    const heroSubtitle = document.querySelector('.home-text p');

    if (heroTitle) {
        setTimeout(() => {
            heroTitle.classList.add('active');
        }, 600);
    }

    if (heroSubtitle) {
        setTimeout(() => {
            heroSubtitle.classList.add('active');
        }, 900);
    }

    const images = document.querySelectorAll('.image-bar img');
    images.forEach((img, index) => {
        setTimeout(() => {
            img.classList.add('active');
        }, 1200 + (index * 150));
    });
});

function revealOnScroll() {
    const reveals = document.querySelectorAll('.scroll-reveal');
    const windowHeight = window.innerHeight;
    
    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();
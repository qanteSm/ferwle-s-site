
// Menu toggle functionality
const showMenu = (toggleId, frwId) => {
    const toggle = document.getElementById(toggleId),
          frw = document.getElementById(frwId);

    if(toggle && frw){
        toggle.addEventListener('click', () => {
            frw.classList.toggle('show');
        });
    }
};
showMenu('frw-toggle','frw-menu');

// Close menu when clicking on a link
const frwLink = document.querySelectorAll('.frw__link');

function linkAction(){
    const frwMenu = document.getElementById('frw-menu');
    frwMenu.classList.remove('show');
}
frwLink.forEach(n => n.addEventListener('click', linkAction));

// Active link highlighting on scroll
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.frw__menu a[href*=' + sectionId + ']').classList.add('active');
        } else {
            document.querySelector('.frw__menu a[href*=' + sectionId + ']').classList.remove('active');
        }
    });
}
window.addEventListener('scroll', scrollActive);

// Simple animation on scroll (replacing ScrollReveal)
function animateOnScroll() {
    const elements = document.querySelectorAll('.about__container, .home__data, .section-title');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize animations
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.about__container, .home__data, .section-title');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run on load
}); 

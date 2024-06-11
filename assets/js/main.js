
const showMenu = (toggleId, frwId) =>{
    const toggle = document.getElementById(toggleId),
    frw = document.getElementById(frwId)

    if(toggle && frw){
        toggle.addEventListener('click', ()=>{
            frw.classList.toggle('show')
        })
    }
}
showMenu('frw-toggle','frw-menu')

const frwLink = document.querySelectorAll('.frw__link')

function linkAction(){
    const frwMenu = document.getElementById('frw-menu')
    
    frwMenu.classList.remove('show')
}
frwLink.forEach(n => n.addEventListener('click', linkAction))

const sections = document.querySelectorAll('section[id]')

  
function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop -50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.frw__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.frw__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 200}); 
sr.reveal('.home__social-icon',{ interval: 100}); 
sr.reveal('.home__social-icon',{ interval: 100}); 
sr.reveal('.meter',{interval: 100});
sr.reveal('.about__subtitlea',{interval: 100}); 

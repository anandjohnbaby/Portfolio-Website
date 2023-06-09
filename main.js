/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}
/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    //When we check on each nav__link, we remove the show-menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR TO HEADER ===============*/

const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class
    this.scrollY >= 50 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== EMAIL JS ===============*/
/*
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sentEmail = (e) =>{
    e.preventDefault()
    emailjs.sentForm('service_cpqinpg', 'template_y89rscl', '#contact-form', 'AQyRX2ilMatnoRPxW')
        .then(() =>{
            contactMessage.textContent = 'Message sent successfully'
            setTimeout(() =>{
                contactMessage.textContent = ''
            }, 5000)
        }, () =>{
            contactMessage.textContent = 'Message not sent (service error)'
        })
}

contactForm.addEventListener('submit', sentEmail)
*/

function SendMail() {
    var contactMessage = document.getElementById("contactMessage");
    var params = {
        from_name: document.getElementById("user_name").value,
        user_email: document.getElementById("user_email").value,
        user_message: document.getElementById("user_message").value
    };

    emailjs.send("service_cpqinpg", "template_y89rscl", params)
        .then(function(res) {
            contactMessage.textContent = 'Message sent successfully';
            setTimeout(function() {
                contactMessage.textContent = '';
            }, 5000);
            alert("Success! " + res.status);
        }, function(error) {
            contactMessage.textContent = 'Message not sent (service error)';
            console.error("Error:", error);
        });
}


/*=============== SHOW SCROLL UP ===============*/ 

const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
				   : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
});

sr.reveal('.home__data, .home__social, .contact__container, .footer__container');
sr.reveal('.home__image', {orgin: 'bottom'});
sr.reveal('.home__data, .skills__data', {origin: 'left'});
sr.reveal('.home__image, .skills__content', {origin: 'right'});
sr.reveal('.services__card, .projects__card', {interval: 100});





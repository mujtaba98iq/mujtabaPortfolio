/*=============== SHOW & CLOSE MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Show menu */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Hide menu */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}

/*=============== REMOVE MOBILE MENU ===============*/
const navLink = document.querySelectorAll('.nav__link, .nav__contact')

const linkAction = () =>{
   const navMenu = document.getElementById('nav-menu')
   // When we click on each nav__link, we remove the show-menu class
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const homeText = document.getElementById('home__text'),
letters = homeText.textContent.trim().split(""),
angleStep = 360 / letters.length

homeText.textContent = ""


/*=============== HOME TEXT CIRCULAR ===============*/

letters.forEach((char, i) => {
   const span = document.createElement("span")
   span.textContent = char
   span.style.transform = `rotate(${i * angleStep}deg)`
   homeText.appendChild(span)
})

/*=============== HOME TYPED JS ===============*/

const typedHome = new Typed('#home-typed',{
   strings:['BackEnd Developer', 'FrontEnd Developer', 'Full Stack Developer'],
   typeSpeed: 60,
   backSpeed: 30,
   backDelay: 2000,
   loop: true
})

/*=============== CHANGE HEADER STYLES ===============*/

const scrollHeader = () =>{
   const header = document.getElementById('header')
   this.scrollY >= 50 ? header.classList.add('scroll-header')
                      : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SWIPER WORK ===============*/ 

const swiperWork = new Swiper('.work__swiper', {
   loop:true,
   spaceBetween:24,
   slidesPerView:'auto',
   grabCursor:true,
   speed:600,
   pagination: {
      el: '.swiper-pagination',
   },

   aoutoplay: {
      delay: 3000,
      disableOnInteraction: false,
   },
})

/*=============== SERVICES ACCORDION ===============*/ 
const serviceCards = document.querySelectorAll('.service__card'),
      serviceButtons = document.querySelectorAll('.service__button')

serviceButtons.forEach((button) =>{
         button.addEventListener('click', () =>{
            const currentCard = button.cloest('.service__card'),
             isOpen = currentCard.classList.contains('service-open')

            serviceCards.forEach(card => {
               card.classList.replace('service-open', 'service-close')
            })
         })
      }) 

/* The data panel is collapsed with max-height, so its open height is
   measured from the content to keep the transition smooth both ways */
const closeService = (card) =>{
   card.classList.remove('service-open')
   card.querySelector('.service__data').style.maxHeight = ''
}

const openService = (card) =>{
   const serviceData = card.querySelector('.service__data')

   card.classList.add('service-open')
   serviceData.style.maxHeight = serviceData.scrollHeight + 'px'
}

serviceCards.forEach((card) =>{
   const button = card.querySelector('.service__button')

   button.addEventListener('click', () =>{
      const isOpen = card.classList.contains('service-open')

      // Only one card stays open at a time
      serviceCards.forEach(closeService)

      if(!isOpen){
         openService(card)
      }
   })
})

/* Keep the open card sized correctly when the text reflows */
window.addEventListener('resize', () =>{
   const currentCard = document.querySelector('.service-open')

   if(!currentCard) return

   const serviceData = currentCard.querySelector('.service__data')

   serviceData.style.transition = 'none'
   serviceData.style.maxHeight = 'none'
   serviceData.style.maxHeight = serviceData.scrollHeight + 'px'
   serviceData.offsetHeight // Force a reflow before restoring the transition
   serviceData.style.transition = ''
})

/*=============== TESTIMONIALS OF DUPLICATE CARDS ===============*/ 


/*=============== CONTACT EMAIL JS ===============*/
/* Create an account at https://www.emailjs.com/ and replace
   the three placeholders below with your own IDs */
const EMAILJS_SERVICE_ID = 'service_id',
      EMAILJS_TEMPLATE_ID = 'template_id',
      EMAILJS_PUBLIC_KEY = 'public_key'

const contactForm = document.getElementById('contact-form'),
      contactStatus = document.getElementById('contact-status')

const showStatus = (message, type) =>{
   contactStatus.textContent = message
   contactStatus.classList.remove('status-success', 'status-error')
   contactStatus.classList.add(`status-${type}`)

   // Remove the message after five seconds
   setTimeout(() =>{
      contactStatus.textContent = ''
      contactStatus.classList.remove('status-success', 'status-error')
   }, 5000)
}

const sendEmail = (e) =>{
   e.preventDefault() // Prevent the page from reloading

   const submitButton = contactForm.querySelector('.contact__button')
   submitButton.disabled = true

   // serviceID - templateID - #form - publicKey
   emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, '#contact-form', EMAILJS_PUBLIC_KEY)
      .then(() =>{
         showStatus('Message sent successfully ✅', 'success')
         contactForm.reset() // Clear input fields
      })
      .catch(() =>{
         showStatus('Message not sent (service error) ❌', 'error')
      })
      .finally(() =>{
         submitButton.disabled = false
      })
}

if(contactForm){
   contactForm.addEventListener('submit', sendEmail)
}


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== CUSTOM CURSOR ===============*/


/*=============== SCROLLREVEAL ANIMATION ===============*/

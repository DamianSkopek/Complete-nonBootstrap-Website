
// ======== Toggle Navigation Menu ========
const navLinks = document.querySelector(".nav-container-btn")
const navButton = document.querySelector(".nav-btn")
const navButtonFont = document.querySelector(".nav-btn i")
const toggleNavButton = () =>{
    navLinks.classList.toggle('toggle-nav-container-btn')
    navButtonFont.classList.toggle('toggle-nav-btn')
}
navButton.addEventListener('click', toggleNavButton)
navButton.addEventListener('blur', ()=>{
    navLinks.classList.remove('toggle-nav-container-btn')
    navButtonFont.classList.remove('toggle-nav-btn')
})



// ======== Carousel Images ========
const caselSlide = document.querySelector('.casel-slide')
const caselImages = document.querySelectorAll('.casel-img-container')
const prevButton = document.querySelector('.prev-btn')
const nextButton = document.querySelector('.next-btn')

let counter = 1
let caselSize = caselImages[0].clientWidth

caselSlide.style.transition = "none"
caselSlide.style.transform = `translateX(${-caselSize*counter}px)`

const caselNext = () =>{
    if(counter>=caselImages.length - 1) return
    caselSlide.style.transition = ".4s"
    counter++
    caselSlide.style.transform = `translateX(${-caselSize*counter}px)`
}
nextButton.addEventListener('click', caselNext)

const caselPrev = () =>{
    if(counter<=0) return
    caselSlide.style.transition = ".4s"
    counter--
    caselSlide.style.transform = `translateX(${-caselSize*counter}px)`
}
prevButton.addEventListener('click', caselPrev)

const caselLoop = () =>{
    if(caselImages[counter].className.search("last-clone")!==-1){
        caselSlide.style.transition = "none"
        counter = caselImages.length - 2
        caselSlide.style.transform = `translateX(${-caselSize*counter}px)`
    }
    if(caselImages[counter].className.search("first-clone")!==-1){
        caselSlide.style.transition = "none"
        counter = caselImages.length - 4
        caselSlide.style.transform = `translateX(${-caselSize*counter}px)`
    }
}
caselSlide.addEventListener('transitionend', caselLoop)
window.addEventListener('resize', ()=>{
    caselSize = caselImages[0].clientWidth
    caselSlide.style.transform = `translateX(${-caselSize*counter}px)`
})
setInterval(caselNext, 990000)










// zaraz usun
const zaraUsun = document.querySelector('.zaraz-usun')
window.addEventListener('click', ()=>{
    zaraUsun.textContent = counter
})

// ======== Toggle Navigation Menu ========
const navLinks = document.querySelector(".nav-container-btn")
const navButton = document.querySelector(".nav-btn")
const navButtonFont = document.querySelector(".nav-btn i")

navButton.addEventListener('click', () =>{
    navLinks.classList.toggle('toggle-nav-container-btn')
    navButtonFont.classList.toggle('toggle-nav-btn')
})
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



// ======== Emoji collapse ========
    const emojiPlugTop = document.querySelector('.emoji-top')
    const emojiPlugBottom = document.querySelector('.emoji-bottom')
    const emojiCollapse = document.querySelector('.emoji-collapse')
    const emojiCollapseInner = document.querySelector('.emoji-collapse-inner')
    const emojiPlugOpen = () =>{
        const eciHeight = emojiCollapseInner.offsetHeight
        emojiCollapse.style.height === `${eciHeight}px`? emojiCollapse.style.height = "0rem" : emojiCollapse.style.height = `${eciHeight}px`
    }
    const emojiPlugClose = () =>{
        emojiCollapse.style.height = 0
    }
    emojiPlugTop.addEventListener('click', emojiPlugOpen)
    emojiPlugTop.addEventListener('blur', emojiPlugClose)
    emojiPlugBottom.addEventListener('click', emojiPlugOpen)
    emojiPlugBottom.addEventListener('blur', emojiPlugClose)
// ======== Emoji popup ========
    const emojiPopup = document.querySelector('.popup-emoji')
    const popupButtonBlue = document.querySelector('.fixed-background-container .blue-btn')
    const popupButtonRed = document.querySelector('.fixed-background-container .red-btn')
    const popupBackground = document.querySelector('.popup-background')

    const emojiPopupOpen = ()=>{
        emojiPopup.style.visibility = "visible"
        emojiPopup.style.opacity = "1"
        emojiPopup.style.transform = "translate(-50%, 2rem)"
        popupBackground.style.visibility = "visible"
        popupBackground.style.opacity = ".6"
    }
    const emojiPopupClose = ()=>{
        emojiPopup.style.visibility = "hidden"
        emojiPopup.style.opacity = "0"
        emojiPopup.style.transform = "translate(-50%, 0)"
        popupBackground.style.visibility = "hidden"
        popupBackground.style.opacity = "0"
    }
    popupButtonBlue.addEventListener('click', emojiPopupOpen)
    popupButtonBlue.addEventListener('blur', emojiPopupClose)
    popupButtonRed.addEventListener('click', emojiPopupOpen)
    popupButtonRed.addEventListener('blur', emojiPopupClose)


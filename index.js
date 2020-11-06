const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const slide1 = document.getElementById('slide-1-text');
const slide2 = document.getElementById('slide-2-text');
const slide3 = document.getElementById('slide-3-text');
const slides = document.querySelectorAll('.slide-text');
const image = document.getElementById('image');

function removeClass() {
    slides.forEach((item) => item.classList.remove('display')
    )
}


function navigate(e) {
    e.preventDefault();

    if(slide1.classList.contains('display')) {
    removeClass();
    slide2.classList.add('display');
    image.style.backgroundImage = 'url(./images/desktop-image-hero-2.jpg)'
    } else if (slide2.classList.contains('display')) {
        removeClass();
        slide3.classList.add('display');
        image.style.backgroundImage = 'url(./images/desktop-image-hero-3.jpg)'
    } else if (slide3.classList.contains('display')) {
        removeClass();
        slide1.classList.add('display');
        image.style.backgroundImage = 'url(./images/desktop-image-hero-1.jpg)'
    } else {
        return
    }
}

function navigatePrev(e) {
    e.preventDefault();
    if(slide1.classList.contains('display')) {
    removeClass();
    slide3.classList.add('display');
    image.style.backgroundImage = 'url(./images/desktop-image-hero-3.jpg)'
    } else if (slide3.classList.contains('display')) {
        removeClass();
        slide2.classList.add('display');
        image.style.backgroundImage = 'url(./images/desktop-image-hero-2.jpg)'
    } else if (slide2.classList.contains('display')) {
        removeClass();
        slide1.classList.add('display');
        image.style.backgroundImage = 'url(./images/desktop-image-hero-1.jpg)'
    } else {
        return
    }
}

nextBtn.addEventListener('click', navigate)
prevBtn.addEventListener('click', navigatePrev)



//NAVIGATION

const menu = document.getElementById('menu');
const main = document.getElementById('main');
const close = document.getElementById('close-btn');
const overlay = document.getElementById('overlay');
const links = document.querySelectorAll('.links')

menu.addEventListener('click', ()=> {
    main.classList.add('change');
})

close.addEventListener('click', ()=> {
    main.classList.remove('change');
})

overlay.addEventListener('click', ()=> {
    main.classList.remove('change');
})

links.forEach((item) => item.addEventListener('click',()=>{
    main.classList.remove('change');
}))
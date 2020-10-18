// This code modifies the Home Picture Section \\
const homeImg = document.querySelector('.home-main-img-text')
const homeH1 = document.querySelector('#home-h1')
const homeP = document.querySelector('#home-p')
const homeBgImg = document.querySelector('#bg-img-url')
const homeH1Font = document.querySelector('#h1-font-fam')
const homeH1Color = document.querySelector('#h1-font-color')
const homePText = document.querySelector('#par-text')
const homePSpacing = document.querySelector('#p-spacing')
const homePFont = document.querySelector('#p-font-fam')
const homePColor = document.querySelector('#p-font-color')

// Change background IMG
homeBgImg.addEventListener('input', bgImg)
function bgImg () {
    const newBack = homeBgImg.value
    homeImg.style.backgroundImage = "url(" + newBack + ")"
}
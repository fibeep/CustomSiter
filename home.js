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

// Change Font of H1
homeH1Font.addEventListener('input', homeHFont)
function homeHFont() {
    const newFont = homeH1Font.value
    homeH1.style.fontFamily = newFont
}

// Change Color of H1

homeH1Color.addEventListener('input', homeHColor)
function homeHColor () {
    const color = homeH1Color.value
    homeH1.style.color = color
}

// Edit Text Displayed
homePText.addEventListener('input', PEdit)
function PEdit () {
    homeP.innerHTML = homePText.value
}

// Edit Letter Spacing
homePSpacing.addEventListener('input', letterSpacing)
function letterSpacing () {
    const space = homePSpacing.value
    homeP.style.letterSpacing = space + 'px'
}

//Edit Paragraph font
homePFont.addEventListener('input', PFontChange)
function PFontChange() {
    const newFont = homePFont.value
    homeP.style.fontFamily = newFont
}

// Edit Paragraph Color
homePColor.addEventListener('input', parColor)
function parColor(){
    newColor = homePColor.value
    homeP.style.color = newColor
}

// Home Picture Section Ends Here \\
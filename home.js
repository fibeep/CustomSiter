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

// Edit Instruction Section \\

const h2FontFam = document.querySelector('#h2-font-fam')
const h2FontColor = document.querySelector('#h2-font-color')
const h2FontSize = document.querySelector('#h2-font-size')
const ulFontFam = document.querySelector('#ul-font-fam')
const ulFontColor = document.querySelector('#ul-font-color')
const ulFontSize = document.querySelector('#ul-font-size')
const ulImageSelect = document.querySelector('#ul-select')
const ulPadding = document.querySelector('#ul-padding')
const ulMargin = document.querySelector('#ul-margin')

const h2Title = document.querySelector('.main-title')
const unorderedList = document.querySelector('#list')
const listItems = document.querySelectorAll('.li')

const section = document.querySelector('.home-instructions')

// Change H2 - Color, Font Family
h2FontFam.addEventListener('input', editH2)
h2FontColor.addEventListener('input', editH2)
function editH2() {
    const newFont = h2FontFam.value
    h2Title.style.fontFamily = newFont
    const color = h2FontColor.value
    h2Title.style.color = color
}

// Change H2 Font Size
h2FontSize.addEventListener('input', sizeH2)
function sizeH2(){
    const newSize = h2FontSize.value + "px"
    h2Title.style.fontSize = newSize
}

// Change UL Font Color
ulFontColor.addEventListener('input', editUl)
function editUl(){
    const newColor = ulFontColor.value
    unorderedList.style.color = newColor
}

// Change UL Font Size
ulFontSize.addEventListener('input', ulSize)
function ulSize () {
    const newSize = ulFontSize.value + 'px'
    for (i=0;i < listItems.length; i++) {
    listItems[i].style.fontSize = newSize }
}

// Change UL Font Family
ulFontFam.addEventListener('input', ulFam)
function ulFam () {
   const fontFam = ulFontFam.value 
    for (i = 0; i < listItems.length; i++) {
        listItems[i].style.fontFamily = fontFam}
} 

// Changes LI icons
ulImageSelect.addEventListener('input', changeImg)
function changeImg () {
    if (ulImageSelect.value == "star") {
        for (i = 0; i < listItems.length; i++) {
            listItems[i].style.listStyleImage = 'url(images/star.png)'
        }
    }
    else if (ulImageSelect.value == "check") {
        for (i = 0; i < listItems.length; i++) {
            listItems[i].style.listStyleImage = 'url(images/check.png)'
        }
    }
    else if (ulImageSelect.value == "x"){
        for (i = 0; i < listItems.length; i++) {
            listItems[i].style.listStyleImage = 'url(images/x.png)'
        }
    }
}

// Edit Margin and Padding
ulPadding.addEventListener('input', editVisual)
ulMargin.addEventListener('input', editVisual)
function editVisual() {
    const pad = ulPadding.value + 'px'
    const margin = ulMargin.value + 'px'
    section.style.margin = margin
    section.style.padding = pad
}
// This code modifies the Blog \\
const blog = document.querySelector('.mainblog')
const blogPic = document.querySelector("#blogpic")
const blogHeader = document.querySelector("#blog-header")
const blogPoem = document.querySelector("#blog-poem")
const blogPar = document.querySelector("#poem-explained")
const blogStyle = document.querySelector("#blog-pic-selector")
const blogHeadFont = document.querySelector("#header-font")
const blogHeaderColor = document.querySelector("#header-color")
const blogTextFont = document.querySelector("#text-font")
const blogTextColor = document.querySelector("#text-color")

// Modifies Blog Style

// Modifies header font
blogHeadFont.addEventListener('input', blogHeaderFont)
function blogHeaderFont() {
    const newFont = blogHeadFont.value
    blogHeader.style.fontFamily = newFont 
}
// Modifies header color
blogHeaderColor.addEventListener('input', blogHeadColor)
function blogHeadColor() {
    const newColor = blogHeaderColor.value
    blogHeader.style.color = newColor
}
// Modifies text font
blogTextFont.addEventListener('input', newBlogTextFont)
function newBlogTextFont() {
    const newFont = blogTextFont.value
    blogPar.style.fontFamily = newFont
    blogPoem.style.fontFamily = newFont
}
// Modifies text color
blogTextColor.addEventListener('input', newBlogTextColor)
function newBlogTextColor(){
    const newColor = blogTextColor.value
    blogPar.style.color = newColor
    blogPoem.style.color = newColor
}
// Blog Ends Here \\

// This code modifies the Shop \\
const shop = document.querySelector("#main-shop")
const shopItem = document.querySelectorAll(".shop-item")
const shopType = document.querySelector("#shop-type-select")
const buttonStyle = document.querySelector('#button-style')
const roundedButton = document.querySelector("#rounded-button")
const shopFont = document.querySelector("#shop-font")
const shopButton = document.querySelectorAll(".shop-button")
// Edits Shop Type

// Edits Button Style
buttonStyle.addEventListener('input', customButtonStyle)
function customButtonStyle (){
    if (buttonStyle.value == "amazon") {
        for (i = 0; i < shopButton.length; i++) {
            shopButton[i].style.backgroundColor = "#ffe100e9"
            shopButton[i].style.color = "black"
        }
    }
    else if (buttonStyle.value == "ebay") {
        for (i = 0; i < shopButton.length; i++) {
            shopButton[i].style.backgroundColor = "blue"
            shopButton[i].style.color = "white"
        }
    }
}
// Option For Rounded Buttons
roundedButton.addEventListener('input', makeButtonRound)
function makeButtonRound() {
    if (roundedButton.value == "rounded"){
        for ( i = 0; i < shopButton.length; i++){
            shopButton[i].style.borderRadius = "25px"
        }
    }
    else {
        for (i = 0; i < shopButton.length; i++) {
            shopButton[i].style.borderRadius = "0px"
        }  
    }

}
// Edits Fonts
shopFont.addEventListener('input', editShopFont)
function editShopFont() {
    for ( i = 0; i < shopItem.length; i++) {
    const newFont = shopFont.value
    shopItem[i].style.fontFamily = newFont 
        }
}

// Shop Ends Here \\


// This code modifies the Contact Form \\
const form = document.querySelector("#contact-form")
const formFontSize = document.querySelector("#form-text-size")
const formFontColor = document.querySelector("#form-text-color")
const formBgColor = document.querySelector("#form-bg-color")
const formBorderSize = document.querySelector("#form-border-size")
const formBorderColor = document.querySelector("#form-border-color")
const formBorderType = document.querySelector("#form-border-color")

// Edits font size
formFontSize.addEventListener('input', editFormFont)
function editFormFont () {
    const newSize = formFontSize.value + 'px'
    form.style.fontSize = newSize
}

// Edits Font Color
formFontColor.addEventListener('input', editFormColor)
function editFormColor() {
    const newColor = formFontColor.value
    form.style.color = newColor
}

// Edits Background Color
formBgColor.addEventListener('input', editFormBg)
function editFormBg() {
    const newBg = formBgColor.value
    form.style.backgroundColor = newBg
}

// Edits Border Size ---> Needs improvement
// formBorderSize.addEventListener('input', editBorder)
// function editBorder() {
//     const newBorder = formBorderSize.value + 'px'
//     form.style.borderWidth = newBorder
    
//     const newColor = formBorderColor.value
//     form.style.borderColor = newColor

//     const newStyle  = formBorderType.value
//     form.style.borderStyle = newStyle
// }

// Shop Customizations End Here \\
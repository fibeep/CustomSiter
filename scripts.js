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
blogStyle.addEventListener('input', modBlogStyle)
function modBlogStyle(){
    if (blogStyle.value == "wood-pic") {
        blogPic.src = "images/green.jpeg"
        blogHeader.innerHTML = "Rudyard Kipling, ‘The Way through the Woods’"
        blogPoem.innerHTML = `They shut the road through the woods
                    Seventy years ago.
                    Weather and rain have undone it again,
                    And now you would never know
                    There was once a road through the woods
                    Before they planted the trees.
                    It is underneath the coppice and heath,
                    And the thin anemones …`
        blogPar.innerHTML = "This poem sees a road through the woods being rediscovered, and the old significance of it being unearthed. Kipling’s poem is laden with symbolism: does this woodland road suggest a link to our own past(and our childhood), or to a collective past, which can now barely be revisited? Part of the poem’s power lies in its ambiguity."
        blog.style.backgroundColor = "#fefae0"
        blogHeader.style.color = "#bc6c25"
        blogPoem.style.color = "#606C38"
        blogPar.style.color = "#606C38"

    } else if (blogStyle.value == "blue-pic") {
        blogPic.src = "images/blue.jpeg"
        blogPoem.innerHTML = `...The placid waters hidden lies
                                The first chill of an errant breeze
                                I looked to the side rather than say please
                                As the sculpted flakes saunter down
                                Rest arrogantly on the parting geese's crown
                                The lumbering crane takes to air I behold
                                Portend the pervasive cold
                                Easy an slow practiced rise ....`
        blogHeader.innerHTML = "By The Lake Side...Romance On An Ice Block - Poem by saadat tahir"
        blogPar.innerHTML = "The poem is extremley long, thus we have decided to only include a portion of it. If you wish to read it all please look it up on Google. On another note, we have yet to find a satisfiyng explanation for this poem. If you feel your interpretation is accurate, feel free to contact us below."
        blog.style.backgroundColor = "#E2EDF6"
        blogHeader.style.color = "#6f98a8"
        blogPoem.style.color = "#91bbc9"
        blogPar.style.color = "#91bbc9"
    } else if (blogStyle.value == "red-pic") {
        blogPic.src = "images/red.jpeg"
        blogPoem.innerHTML = ""
        blogHeader.innerHTML = 
        blogPar.innerHTML = ""
        blog.style.backgroundColor = ""
        blogHeader.style.color = ""
        blogPoem.style.color = ""
        blogPar.style.color = ""
    }

}
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
// This code modifies the Contact Form
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
    newSize = formFontSize.value + 'px'
    form.style.fontSize = newSize
}

// Edits Font Color - BROKEN NEEDS REPAIR
formFontColor.addEventListener('input', editFormColor)
function editFormColor() {
    newColor = formFontColor.value
    form.style.color = newColor
}

// Edits Background Color
formBgColor.addEventListener('input', editFormBg)
function editFormBg() {
    newBg = formBgColor.value
    form.style.backgroundColor = newBg
}

// Edits Border Size ---> Needs improvement
formBorderSize.addEventListener('input', editBorder)
function editBorder() {
    newBorder = formBorderSize.value + 'px'
    form.style.borderWidth = newBorder
    
    newColor = formBorderColor.value
    form.style.borderColor = newColor

    newStyle  = formBorderType.value
    form.style.borderStyle = newStyle
}
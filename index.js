// Color picker and buttons
const colorPicker = document.querySelector("#color-picker")
const schemes = document.querySelector("#schemes")
const schemeBtn = document.querySelector("#get-scheme-btn")

// Background colors
const colorOne = document.querySelector("#color-one")
const colorTwo = document.querySelector("#color-two")
const colorThree = document.querySelector("#color-three")
const colorFour = document.querySelector("#color-four")
const colorFive = document.querySelector("#color-five")

// Background color hex codes
const hexOne = document.querySelector("#hex-one")
const hexTwo = document.querySelector("#hex-two")
const hexThree = document.querySelector("#hex-three")
const hexFour = document.querySelector("#hex-four")
const hexFive = document.querySelector("#hex-five")



schemeBtn.addEventListener("click", getColors => {
    // Hex value of color selected with and without hash at the beginning
    let colorPickerValue = colorPicker.value
    let colorPickerValueNoHash = colorPickerValue.substring(1)
    let schemeType = schemes.value

    // Update main color swatch backgorund
    colorOne.style.background = colorPickerValue

    // Update main swatch hex value to send to API
    hexOne.textContent = colorPickerValue
   
    // // Scheme = get color scheme. Mode=color types such as monochome and count is number of colors
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorPickerValueNoHash}&mode=${schemeType}&count=5`) 
    .then(response => response.json())
    .then(data => {
        // Update color scheme swatches
        colorTwo.style.background = data.colors[1].hex.value
        colorThree.style.background = data.colors[2].hex.value
        colorFour.style.background = data.colors[3].hex.value
        colorFive.style.background = data.colors[4].hex.value

        // Update color shceme hex values
        hexTwo.textContent = data.colors[1].hex.value
        hexThree.textContent = data.colors[2].hex.value
        hexFour.textContent = data.colors[3].hex.value
        hexFive.textContent = data.colors[4].hex.value

    })

})

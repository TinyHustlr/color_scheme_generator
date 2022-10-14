const colorPicker = document.querySelector("#color-picker")
const hexOne = document.querySelector("#hex-one")
const schemeBtn = document.querySelector("#get-scheme-btn")


schemeBtn.addEventListener("click", getColors => {
    let colorPickerValue = colorPicker.value
    let colorPickerValueNoHash = colorPickerValue.substring(1)
    console.log(colorPickerValueNoHash, colorPickerValue)
    hexOne.textContent = colorPickerValue

    // Scheme = get color scheme. Mode=color types such as monochome and count is number of colors
fetch("https://www.thecolorapi.com/scheme?hex=" + colorPickerValueNoHash + "&mode=monochrome&count=5") 
.then(response => response.json())
.then(data => console.log(data.colors[1].hex.value,data.colors[2].hex.value,data.colors[3].hex.value,data.colors[4].hex.value))

// Looks like the ojects are data.colors[0].hex.value. Only need 4 colours and first color is chosen by user.
})


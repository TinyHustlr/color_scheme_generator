// Scheme = get color scheme. Mode=color types such as monochome and count is number of colors
fetch("https://www.thecolorapi.com/scheme?hex=24B1E0&mode=monochrome&count=4") 
    .then(response => response.json())
    .then(data => console.log(data.colors[0].hex.value,data.colors[1].hex.value,data.colors[2].hex.value,data.colors[3].hex.value))

// Looks like the ojects are data.colors[0].hex.value. Only need 4 colours and first color is chosen by user.
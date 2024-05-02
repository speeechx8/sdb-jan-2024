const site = "https://api.disneyapi.dev/character";
const charBtn = document.getElementById("charBtn");
const display = document.getElementById("display");

async function displayChar() {
    let character = await info(site, Math.floor(Math.random() * (50 - 0 + 1) + 0));
    // console.log(character);

    let nameElement = document.createElement("h1");
    let imageElement = document.createElement("img");

    nameElement.textContent = character[0];
    imageElement.src = character[1];
    imageElement.alt = `Image of ${character[0]}`;
    
    display.innerHTML = "";
    display.appendChild(nameElement);
    display.appendChild(imageElement);
}

// inlcusive random number
// let randNum = Math.floor(Math.random() * (50 - 0 + 1) + 0);

async function info(url, num) {
    try {
        const res = await fetch(url);
        // in soviet russia everybody shares data
        const ourData = await res.json();
        // console.log(ourData.data[num]);
        // console.log(ourData.data[num].name);
        // console.log(ourData.data[num].imageUrl);

        return [ourData.data[num].name, ourData.data[num].imageUrl];
    }
    catch(error) {
        console.log(error);
    }
}

charBtn.addEventListener("click", async () => {
    charBtn.disabled = true;
    await displayChar();
    charBtn.disabled = false;
});
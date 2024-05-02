console.log(document.getElementsByClassName("example"));
console.log("Hi there!")

function clickMe() {
    let exampleDiv = document.getElementById("exampleID");
    let button = document.createElement("button");
    button.innerHTML = "45";
    button.onclick = click45;

    exampleDiv.appendChild(button);
}

function click45() {
    let exampleDiv = document.getElementById("exampleID");

    exampleDiv.innerHTML = "poggers";
}

let form = document.getElementById("form");
form.addEventListener("submit", (event) => {
	event.preventDefault();
	console.log("form was submitted")
} );
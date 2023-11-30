let css = document.querySelector("h3");
let color1 = document.getElementById("color1");
let color2 =  document.getElementById("color2");

let body = document.querySelector("body");

function changeBackground(){
    let background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    body.style.background = background;
    css.innerHTML = background;
}

color1.addEventListener("input",changeBackground)

color2.addEventListener("input", changeBackground)
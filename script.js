let click = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");
// click.addEventListener('click', function() {
//     if(text.value!==""){
//         alert(text.value);
//     }else{
//         alert("no text found !!!");
//     }
// })

let createListElement = ()=>{
    let li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
}

function addListAfterClick(){
    if(input.value != ""){
        createListElement();
    }else
        alert("please enter some value");
}

function addListAfterKeypress(event){
    if (event.keyCode === 13) {
        if (input.value !== "") { // Corrected the typo here
          createListElement();
        } else {
              alert("Please enter some value");
        }
      }
}

click.addEventListener("click", addListAfterClick)

input.addEventListener("keypress", addListAfterKeypress);
  




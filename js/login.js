
let token = localStorage.getItem("token");
console.log(token);

token && window.open("index.html", "_self");




let createnav = document.createElement("input");
createnav.classList.add("rounded");
createnav.setAttribute("type", "text");
createnav.setAttribute("placeholder", "Search");

let searchdiv = document.createElement("div");
searchdiv.classList.add("input-group")

let formdiv = document.createElement("form");
formdiv.classList.add("d-flex", "justify-conten-start", "d-none", "d-sm-none", "d-md-block");
formdiv.setAttribute("role", "search");

let navImage = document.createElement("img");
navImage.classList.add("img-fluid", "navbar__log");
navImage.setAttribute("src", "./assets/images/dev-to-logo.png");

let aImage = document.createElement("a");
aImage.classList.add("navbar-brand");
aImage.setAttribute("href", "logo");

let titleTex = document.createElement("title")
titleTex.setAttribute("id", "amizgsgt7gjk1tltjcnt8x0qk5buzpwe")
titleTex.innerText = "navigation menu"

let path = document.createElement("path");
path.setAttribute("d","M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z")

let svgXml = document.createElement("svg")
svgXml.setAttribute("xmlns", "http://www.w3.org/2000/svg")

let buttonCamvas = document.createElement("button")
buttonCamvas.classList.add("btn", "d-block", "d-sm-block", "d-md-none")
buttonCamvas.setAttribute("href", "#offcanvasExample")

let divConteiner = document.createElement("div")
divConteiner.classList.add("d-flex", "justify-content-start", "align-items-center");

let divDflex = document.createElement("div")
divDflex.classList.add("d-flex","container-right", "align-items-center");

let buttonPurple = document.createElement("button");
buttonPurple.classList.add("btn", "button__primary--purple", "d-none", "d-sm-none", "d-md-block");
buttonPurple.innerText = "login";

let buttonCount = document.createElement("button")
buttonCount.classList.add("btn", "btn-outline-primary")
buttonCount.setAttribute("type", "button")
buttonCount.innerText = "Create account"

let buttonNavar = document.createElement("button");
buttonNavar.classList.add("btn", "navbar__buttton--transparent", "button__primary--transparent-purple", "ms-2");

let navConteiner = document.createElement("div");
navConteiner.classList.add("container");

// let createNabar = document.createElement("nav");
// createNabar.classList.add("navbar-expand-lg", "container--whit");

svgXml.append(titleTex, path)

buttonCamvas.append(svgXml);

searchdiv.append(createnav);

formdiv.append(searchdiv);

aImage.append(navImage);

divConteiner.append(aImage, formdiv, buttonCamvas, divDflex);

divDflex.append(buttonPurple, buttonNavar, buttonCount);

navConteiner.append(divConteiner);


let navId = document.getElementById("nav-create");
console.log(navId)

navId.append(navConteiner);









let user = {};

let textFields = document.querySelectorAll("#login-Form input");
console.log(textFields);

textFields.forEach((field)=>{
    field.addEventListener("keyup", (event)=>{
        let property = event.target.name;
        let value = event.target.value;
        user[property]=value
        console.log(user);
    })
})



document.getElementById("login-button").addEventListener("click", () => {       
    if(user) {
        
        localStorage.setItem(
            "token",
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
        );
        window.open("index.html", "_self");
        
    };
});
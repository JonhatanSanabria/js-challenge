console.log("hola")

let user = {};

let textFields = document.querySelectorAll("#login-Form input");
console.log(textFields);

textFields.forEach((field)=>{
    field.addEventListener("keyup", (event)=>{
        let property = event.target.name;
        let value = event.target.value;
        user[property]=value
    })
})
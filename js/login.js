
 

console.log("hola")

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


document.querySelector("#login-button").addEventListener("click", () => {
    let saveUser = textFields(user);
    if(user.name) {
        localStorage.setItem(
            "token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
        );
        window.open("index.html", "_self")
    }
});
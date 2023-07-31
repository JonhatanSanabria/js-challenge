







    // <nav class="navbar navbar-expand-lg navbar__container--white">
    //     <div class="container">
    //         <div class="d-flex justify-content-start align-items-center">
    //             <button class="btn d-block d-sm-block d-md-none" data-bs-toggle="offcanvas" href="#offcanvasExample">
    //                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="amizgsgt7gjk1tltjcnt8x0qk5buzpwe" class="crayons-icon"><title id="amizgsgt7gjk1tltjcnt8x0qk5buzpwe">Navigation menu</title>
    //                     <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"></path>
    //                 </svg>
    //             </button>
    //             <a class="navbar-brand" href="./index.html">
    //               <img
    //                 class="img-fluid navbar__logo"
    //                 src="./assets/images/dev-to-logo.png"
    //                 alt="Logo"
    //               />
    //             </a>
    //             <form
    //               class="d-flex justify-content-start navbar__search-container d-none d-sm-none d-md-block"
    //               role="search">
    //                 <div class="input-group">
    //                 <input
    //                   class="form-control rounded"
    //                   type="text"
    //                   placeholder="Search..."
    //                   id="example-search-input"/>                    
    //                 </div>
    //             </form>
    //         </div>
    //             <div class="d-flex navbar__container-right align-items-center">                
    //             <button class="btn button__primary--purple d-none d-sm-none d-md-block">Create Post</button>
    //             <button class="btn navbar__buttton--transparent button__primary--transparent-purple ms-2"></button>                
    //             </div>
    //     </div>
    // </nav>

 

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



document.getElementById("login-button").addEventListener("click", () => {       
    if(user.name) {
        
        localStorage.setItem(
            "token",
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
        );
        window.open("index.html", "_self");
        
    };
});
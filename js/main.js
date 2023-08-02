let token = localStorage.getItem("token");
console.log(token);

!token && window.open("formLogin.html", "_self");

/// Peticion a la base de datos ///
const getPostInfo = async () => {
    let response = await fetch("https://proyecto-jonhatan-default-rtdb.firebaseio.com/posts/.json")
    let data = await response.json()
    return data
}


// Convertir objeto con objetos en array de llaves //
const testPost = async () => {
    let posts = await getPostInfo()
    console.log(posts)
    return posts
}


// Crear info en la base de datos // Enviar info a la base de datos //
const createPostInfo = async (newPost) => {
    let response = await fetch("https://proyecto-jonhatan-default-rtdb.firebaseio.com/posts/.json", {
        method: "POST",
        body: JSON.stringify(newPost)
    })
    let data = await response.json()
    return data
}
createPostInfo() // insertar llaves dentro de la funcion y dentro de las llaves {propiedad:"valor", propiedad:"valor"} //
// Retorna (key) llave codificada + {propiedad:"valor", propiedad:"valor"}


// Obtener Post por Id //
const getPostById = async (postId) => {
    let response = await fetch(`https://proyecto-jonhatan-default-rtdb.firebaseio.com/posts/${postId}.json`)
    // como solo va a obtener información, no es necesario el método de configuración //
    let data = await response.json()
    console.log(data)
    return data
}
getPostById() // insertar comillas dentro de la funcion y dentro de las comillas "id de la llave" //


// Crear una nueva llave 
const createNewKey = async (newKey) => {
    let response = await fetch(`https://proyecto-jonhatan-default-rtdb.firebaseio.com/${newKey}.json`, {
        method: "PUT",
        body: JSON.stringify({name: "testing key"})
    })
    let data = await response.json()
    return data
}
createNewKey() // insertar comillas dentro de la funcion y dentro de las comillas "nombre que le daremos a la llave" //
// Pinta en la base de datos nueva info: llave {propiedad:"valor"} : newKey {name:"testing key"} //
// Si la funcion se ejecuta sin contenido, aparecera: undefined {propiedad: "valor"} : undefined {name:"testing key"} //


// Boton switcheable //         id en etiqueta del boton html
let myButton = document.getElementById("some-button")

myButton.addEventListener("click", (event) => {
    console.log(event)
    console.log(event.target)
    event.target.classList.toggle("active")
    event.target.classList.contains("active") 
    ? (event.target.innerText = "Desactivar") 
    : (event.target.innerText = "Activar")
})

// boton para ditigir a otro html // 
let navButton = document.getElementById("navigate-button").addEventListener("click", () => {
    window.open("url del formulario")
})


/*
<div class="card mb-3"><!--Container-->
            <img src="./assets/images/final.webp" class="card-img-top" alt="imagen del post" ><!--Image-->
            <div class="card-body"><!--Form-->
              <div class="d-flex flex-row"><!--Body-->
                <img class="rounded-circle icon__image" width="40px" height="40px" src="./assets/images/icon2.jpeg" alt="icon"><!--User image-->
                <div class="text ms-2"><!--User Body-->
                <h6 class="m-0">{author}</h6><!--Author-->
                <span class="date">{date}</span><!--Date-->
                </div>
              </div>
              <h5 class="card-title mt-2">{title}</h5><!--title-->
              <div class="d-flex flex-row justify-content-between"><!--Tags Body--> 
                <div class="d-flex flex-row"><!--Tags Wrapper-->
                  <p class="card-text">{tags}</p><!--Tags-->
                  <div class="d-block">{reactions}<!--Reactions-->
                    <h6 class="content-box">{content}</h6><!--Content-->
                  </div>
                </div>
              </div>        
            </div>
  
          </div>
*/
// Hacer que se impriman los comentarios ( o posts ) //
let posts = [
    {
        author: "John Walker",
        content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, soluta quas! Deleniti doloribus quasi voluptas mollitia excepturi sunt, autem ullam, totam ipsum maiores necessitatibus accusantium nam iste perspiciatis, nobis eos!",
        date: "9 July",
        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fcoder&psig=AOvVaw2g-2kBJWycVFPFm5bYknVA&ust=1690575301125000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNjEjPXZr4ADFQAAAAAdAAAAABAE",
        reaction: "🔥🙌🦄",
        tags: "#javascript",
        title: "Inthe name of the Koders"
    }
]
/// Funcion para crear los posts ///
const createPostBox = (postData) => {  // el parametro trabaja solo dentro del bloque de codigo //
    let { author, content, date, image, reaction, tags, title } = postData 
    let post = document.createElement("div") // Container //
    post.classList.add("card mb-3")

    let postImage = document.createElement("img") // Image //
    postImage.classList.add("card-img-top")
    postImage.setAttribute("src", "./assets/images/final.webp")
    postImage.setAttribute("alt", "imagen del post")

    let postForm = document.createElement("div") // Form //
    postForm.classList.add("card-body")

    let postBody = document.createElement("div") // Body //
    postBody.classList.add("d-flex", "flex-row")

    let userImage = document.createElement("img") // User Image //
    userImage.classList.add("rounded-circle", "icon__image")
    userImage.setAttribute("src", "./assets/images/icon2.jpeg")
    userImage.setAttribute("alt", "icon")

    let wrapperText = document.createElement("div") // User Body //
    wrapperText.classList.add("text", "ms-2")

    let authorName = document.createElement("h6") // Author //
    authorName.classList.add("m-0")
    authorName.innerText = "John Walker"

    let creationDate = document.createElement("span") // Date //
    creationDate.classList.add("date")
    creationDate.innerText = "9 July"

    let titleLine = document.createElement("h5") // Title //
    titleLine.classList.add("card-title", "mt-2")
    titleLine.innerText = "In the name of the Koders"

    let tagsBody = document.createElement("div") // Tags Body //
    tagsBody.classList.add("d-flex", "flex-row", "justify-content-between")

    let tagsWrapper = document.createElement("div") // Tags Wrapper //
    tagsWrapper.classList.add("d-flex", "flex-row")

    let tagsLine = document.createElement("p") // Tags //
    tagsLine.classList.add("card-text")
    tagsLine.innerText = "#javascript"

    let reactionBody = document.createElement("div") // Reactions //
    reactionBody.classList.add("d-block")
    reactionBody.innerText = "🔥🙌🦄❤️"

    let contentBox = document.createElement("h6") // Content //
    contentBox.classList.add("content-box")
    contentBox.innerText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, soluta quas! Deleniti doloribus quasi voluptas mollitia excepturi sunt, autem ullam, totam ipsum maiores necessitatibus accusantium nam iste perspiciatis, nobis eos!"

    reactionBody.append(contentBox)
    tagsWrapper.append(reactionBody, tagsLine)
    tagsBody.append(tagsWrapper)

    wrapperText.append(authorName, creationDate)
    postBody.append(userImage, wrapperText)

    postForm.append(postBody, titleLine, tagsBody)
    post.append(postImage, postForm)

    return post
}
let cardText = document.createTextNode(`${author} : ${comment}`)


// Funcion para imprimir todos los posts ( o posts ) //
const printAllposts = (posts) => {
    let wrapper = document.getElementById("post-wrapper") // esta sera la clase del "div" padre //
    wrapper.innerHTML = ""

    posts.forEach((post) => {
        let postBox = createPostBox(post)
        wrapper.append(postBox)        
    });
}
printAllposts(posts)
// Agregar un commentario desde el formulario ( actuando con <input> ) //
let postObject = {}
// Todos los campos de formulario tienen una propiedad que se llama "name" //
document.querySelectorAll("#post-form input").forEach((input) => {
    input.addEventListener("keyup", (event) => {
        let value = event.target.value
        let property = event.target.name
        console.log(`${property}:${value}`)
        postObject[property] = value
        console.log(postObject)
    })
}) // Con esto, todo lo que se escriba en los inputs se ira guardando en el array de objetos de "postObject" con el
// --nombre de la llave con el texto como valor de ese campo //
const resetForm = (formId) => {   // Haremos que se borren los campos del formulario cuando demos click en el boton // 
    let fields = document.querySelectorAll(`#${formId} input`)
    fields.forEach((field) => (field.value = ""));
}

// Agregar los postObject al array con el boton submit del formulario //
document.getElementById("save-comment").addEventListener("click", () => {
    posts.push(postObject)
    console.log(posts)
    printAllposts(posts)
    resetForm("post-form")
    postObject = {}   
})  // "posts" es el nombre de la variable que contendra el array de objetos donde se ira guardando cada card //
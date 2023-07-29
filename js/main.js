// Peticion a la base de datos //
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


// Crear elementos dom de mi post //
const createPostCard = () => {
    let cardCol = document.createElement("")
    cardCol.classList.add("")

    let cardImage = document.createElement("img")
    cardImage.classList.add("")
    cardImage.setAttribute("src", ``)
    cardImage.setAttribute("alt", "")

    let cardBody = document.createElement("")
    cardBody.classList.add("")

    let cardUser = document.createElement("")
    cardUser.classList.add("")

    let imageUser = document.createElement("img")
    imageUser.classList.add("")
    imageUser.setAttribute("")
    imageUser.setAttribute("")

    let authorName = document.createElement("")
    authorName.classList.add("")

    let postTitle = document.createElement("")
    postTitle.classList.add("")

    let datePost = document.createElement("")
    datePost.classList.add("")

    let cardTitle = document.createElement("")
    cardTitle.classList.add("")

    let contentCard = document.createElement("")
    contentCard.classList.add("")
    
}


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


// Hacer que se impriman los comentarios ( o posts ) //
let comments = [
    {
        author: "Jonhatan",
        comment: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
    }
]
// Funcion para crear las cards //
const createCommentBox = (commentData) => {  // el parametro trabaja solo dentro del bloque de codigo //
    let { author, comment } = commentData 
    let card = document.createElement("div") // en caso de que sea "div" //
    card.classList.add("card")  // la clase de la etiqueta "div" seria "card" //

    let cardBody = document.createElement("div") // en caso de que sea "div" //
    cardBody.classList.add("card-body") // la clase de la etiqueta "div" seria "card-body" //

    let cardText = document.createTextNode(`${author} : ${comment}`)

    cardBody.append(cardText)
    card.append(cardBody)

    return card
}
// Funcion para imprimir todos los comments ( o posts ) //
const printAllComments = (commentsArray) => {
    let wrapper = document.getElementById("comment-wrapper") // esta sera la clase del "div" padre //
    wrapper.innerHTML = ""

    commentsArray.forEach((comment) => {
        let commentBox = createCommentBox(comment)
        wrapper.append(commentBox)        
    });
}
printAllComments(comments)
// Agregar un commentario desde el formulario ( actuando con <input> ) //
let commentObject = {}
// Todos los campos de formulario tienen una propiedad que se llama "name" //
document.querySelectorAll("#comment-form input").forEach((input) => {
    input.addEventListener("keyup", (event) => {
        let value = event.target.value
        let property = event.target.name
        console.log(`${property}:${value}`)
        commentObject[property] = value
        console.log(commentObject)
    })
}) // Con esto, todo lo que se escriba en los inputs se ira guardando en el array de objetos de "commentObject" con el
// --nombre de la llave con el texto como valor de ese campo //

// Agregar los commentObject al array con el boton submit del formulario //
document.getElementById("save-comment").addEventListener("click", () => {
    comments.push(commentObject)
    console.log(comments)
    printAllComments(comments)
}) 
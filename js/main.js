// Peticion a la base de datos //
const getPostInfo = async () => {
    let response = await fetch("https://proyecto-jonhatan-default-rtdb.firebaseio.com/posts/.json")
    let data = await response.json()
    return data
}


// Convertir objeto con objetos en array de llaves //
const testPost = async () => {
    let posts = await getPostInfo()
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
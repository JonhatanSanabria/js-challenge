//Peticion a la base de datos//
const getPosts = async () => {
    let response = await fetch("https://proyecto-jonhatan-default-rtdb.firebaseio.com/posts/.json")
    let data = await response.json()
    console.log(data)
    return data
}
const testPost = async () => {
    let posts = await getPosts()
    console.log(posts)
    return posts
}


//crear elementos dom de mi post//
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
let token = localStorage.getItem("token");
console.log(token);

!token 
    ? window.open("formLogin.html", "_self")
    : window.open("index.html", "_self");


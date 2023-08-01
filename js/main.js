let token = localStorage.getItem("token");
console.log(token);

!token && window.open("index.html", "_self");

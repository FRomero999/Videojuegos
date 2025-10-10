console.log("App.js")

const menuLogin = document.querySelector("#login-menu")
const menuOffCanvas = document.querySelector("#login-offcanvas")
const botonCancelarLogin = document.querySelector("#cancel-button")

if(menuLogin && menuOffCanvas && botonCancelarLogin){
    menuLogin.addEventListener("click",()=>{
        menuOffCanvas.classList.add("show");
    })
    botonCancelarLogin.addEventListener("click",()=>{
        menuOffCanvas.classList.remove("show");
    })
}


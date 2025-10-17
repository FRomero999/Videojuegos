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

const itemsAcordeonH3 = document.querySelectorAll("div.acordeon h3")
const itemsAcordeon = document.querySelectorAll("div.acordeon div.elemento")

itemsAcordeonH3.forEach( (el)=>{
    el.addEventListener("click",(e)=>{
        itemsAcordeon.forEach( (el)=> el.classList.remove("show"))
        e.target.parentElement.classList.toggle("show")
    })
})



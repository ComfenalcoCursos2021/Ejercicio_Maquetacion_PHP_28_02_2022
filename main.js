addEventListener("DOMContentLoaded", async(e)=>{
    let peticion = await fetch("api.php");
    let texto = await peticion.text();
    document.querySelector("body").insertAdjacentHTML("beforeend", texto);
})
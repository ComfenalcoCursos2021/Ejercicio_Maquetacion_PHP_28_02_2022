addEventListener("DOMContentLoaded", async(e)=>{
    let peticion = await fetch("api.php");
    let json = await peticion.json();
    console.log(json);
    document.querySelector(".logo").insertAdjacentHTML("beforeend", json.imgen);
    document.querySelector(".navigation").insertAdjacentHTML("beforeend", json.menu);
    document.querySelector(".search").insertAdjacentHTML("beforeend", json.buscar);
})
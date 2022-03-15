addEventListener("DOMContentLoaded", async(e)=>{
    let peticion = await fetch("https://comfenalcocursos2022.000webhostapp.com/Ejercicio_Maquetacion_PHP_28_02_2022/api.php");
    let json = await peticion.json();
    console.log(json);
    document.querySelector(".logo").insertAdjacentHTML("beforeend", json.imgen);
    document.querySelector(".navigation").insertAdjacentHTML("beforeend", json.menu);
    document.querySelector(".search").insertAdjacentHTML("beforeend", json.buscar);
})
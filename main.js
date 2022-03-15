//https://comfenalcocursos2022.000webhostapp.com/Ejercicio_Maquetacion_PHP_28_02_2022/api.php
addEventListener("DOMContentLoaded", async(e)=>{
    let peticion = await fetch("https://comfenalcocursos2022.000webhostapp.com/Ejercicio_Maquetacion_PHP_28_02_2022/api.php");
    let json = await peticion.json();
    console.log(json);
    document.querySelector(".logo").insertAdjacentHTML("beforeend", json.imgen);
    document.querySelector(".navigation").insertAdjacentHTML("beforeend", json.menu);
    document.querySelector(".search").insertAdjacentHTML("beforeend", json.buscar);
    document.querySelector(".banner").insertAdjacentHTML("beforeend", json.articuloImagen);
    document.querySelector(".banner").insertAdjacentHTML("beforeend", json.expedicion);
    document.querySelector(".banner").insertAdjacentHTML("beforeend", json.mision);
    document.querySelector(".trailer").insertAdjacentHTML("beforeend", json.trailer);
    // Mostrar Video
    document.querySelector(".play").addEventListener("click", (e)=>{
        document.querySelector(".trailer").classList.toggle("active");
        document.querySelector(".trailer video").play();
    })
    //Cerrar Video
    document.querySelector("ion-icon[name='close']").addEventListener("click", (e)=>{
        document.querySelector(".trailer").classList.toggle("active");
        document.querySelector(".trailer video").pause();
    })
})


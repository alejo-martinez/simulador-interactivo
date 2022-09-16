let litrosDeTierra = 0; 
let cantidad = 0;
const contenedorRespuesta = document.getElementById("contenedorRespuesta");
let calcular = document.getElementById("calcular") 
let filaRespuesta = document.getElementById("filaRespuesta")   

    calcular.addEventListener("click", (e)=> {
        macetasCalcular();
    } )


const macetasCalcular = ()=> {
    litrosDeTierra = parseFloat(document.getElementById("ingresoLitros").value);
    cantidad = parseFloat(document.getElementById("ingresoCantidad").value);
    litrosDeTierra = litrosDeTierra * 0.15
    litrosDeTierra = litrosDeTierra.toFixed(2) 

    filaRespuesta.innerHTML += `<tr class = "filaRespuesta">
    <td>${ingresoLitros.value} litros de tierra</td>
    <td>${litrosDeTierra} litros de agua</td>
    <td>${ingresoLitros.value * ingresoCantidad.value} litros de agua</td>
    </tr>`
}

/* <p class = "parrafo-respuesta">Usarás ${litrosDeTierra} litros de agua para regar cada maceta de ${ingresoLitros.value} litros, necesitando un total de ${ingresoLitros.value * ingresoCantidad.value} litros de agua.</p> */
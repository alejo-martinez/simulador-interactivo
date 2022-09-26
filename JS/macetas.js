let litrosDeTierra = 0; 
let cantidad = 0;
const contenedorRespuesta = document.getElementById("contenedorRespuesta");
let calcular = document.getElementById("calcular");
let filaRespuesta = document.getElementById("filaRespuesta");
let favoritos = document.getElementById("favoritos");

const macetasFavoritas = [];

class Maceta {
    constructor(capacidad, cantidad) {
        this.capacidad = capacidad
        this.cantidad = cantidad
    }
}


    calcular.addEventListener("click", (e)=> {
        macetasCalcular();
    } )


const macetasCalcular = ()=> {
    litrosDeTierra = parseFloat(document.getElementById("ingresoLitros").value);
    cantidad = parseFloat(document.getElementById("ingresoCantidad").value);
    let resultadoFinal = litrosDeTierra * 0.15
    resultadoFinal = resultadoFinal.toFixed(2) 

    litrosDeTierra === 1 ? //Condicion 1
     filaRespuesta.innerHTML += `<tr class = "filaRespuesta">
    <td>${ingresoLitros.value} litro de tierra</td>
    <td>${resultadoFinal} litros de agua</td>
    <td>${ingresoCantidad.value * resultadoFinal} litros de agua</td> 
    </tr>` : // Condicion 2
    filaRespuesta.innerHTML += `<tr class = "filaRespuesta">
    <td>${ingresoLitros.value} litros de tierra</td>
    <td>${resultadoFinal} litros de agua</td>
    <td>${resultadoFinal * ingresoCantidad.value} litros de agua</td>
    </tr>` 
}


const almacenarFavoritos = ()=> {
    const maceta = new Maceta(ingresoLitros.value, ingresoCantidad.value);
    macetasFavoritas.push(maceta)
    localStorage.setItem("macetas" ,JSON.stringify(macetasFavoritas))
}

favoritos.addEventListener("click", ()=> {
    almacenarFavoritos()
})
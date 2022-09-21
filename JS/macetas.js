let litrosDeTierra = 0; 
let cantidad = 0;
const contenedorRespuesta = document.getElementById("contenedorRespuesta");
let calcular = document.getElementById("calcular");
let filaRespuesta = document.getElementById("filaRespuesta");
let favoritos = document.getElementById("favoritos");
// let contador = 0
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
    litrosDeTierra = litrosDeTierra * 0.15
    litrosDeTierra = litrosDeTierra.toFixed(2) 

    filaRespuesta.innerHTML += `<tr class = "filaRespuesta">
    <td>${ingresoLitros.value} litros de tierra</td>
    <td>${litrosDeTierra} litros de agua</td>
    <td>${ingresoLitros.value * ingresoCantidad.value} litros de agua</td>
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
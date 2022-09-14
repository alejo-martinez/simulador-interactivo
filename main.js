// Llamados a etiquetas HTML
const body = document.getElementsByTagName("body")
let calcular = document.getElementById("calcular")   // Boton calcular para riego en maceta    
const contenedorRespuesta = document.getElementById("contenedorRespuesta");    // Contenedor donde aparece el riego por maceta
const btnSuelo = document.getElementById("btn-suelo") // Boton calcular para riego en suelo
const contenedorRespuestaSuelo = document.getElementById("contenedorRespuestaSuelo")   // Contenedor donde aparece el riego por suelo

// VARIABLES PARA ALMACENAR DATOS

let metrosCuadrados = 0;
let litrosDeTierra = 0; 
let cantidad = 0;

// Arrays vacíos para almacenar datos provistos por el usuario.
const eleccionDeMacetas = [];

// Clase constructora de las macetas
class Maceta {
    constructor(capacidad, cantidad) {
        this.capacidad = capacidad;
        this.cantidad = cantidad;
    }
}


// OPCION CALCULAR AGUA POR MACETA

const macetasCalcular = ()=> {
    calcular.addEventListener("click", (e)=> {
        e.preventDefault();
        litrosDeTierra = parseFloat(document.getElementById("ingresoLitros").value);
        cantidad = parseFloat(document.getElementById("ingresoCantidad").value);
        litrosDeTierra = litrosDeTierra * 0.15
        litrosDeTierra = litrosDeTierra.toFixed(2) 

        contenedorRespuesta.innerHTML += `<p class = "parrafo-respuesta">Usarás ${litrosDeTierra} litros de agua para regar cada maceta de ${ingresoLitros.value} litros, necesitando un total de ${ingresoLitros.value * ingresoCantidad.value} litros de agua.</p>`
    } )
}



// OPCION CALCULAR AGUA POR m²


const calcularAguaM = ()=> {
    btnSuelo.addEventListener("click", ()=> {
        metrosCuadrados = parseFloat(document.getElementById("inputSuelo").value)
        metrosCuadrados = metrosCuadrados * 15
        metrosCuadrados = metrosCuadrados.toFixed(2)

        contenedorRespuestaSuelo.innerHTML += `<p class = "parrafo-respuesta">
        Para el área de ${inputSuelo.value} m² vas a necesitar un total de ${metrosCuadrados} litros de agua.</p>`
    })
}

// Llamado a las funciones

macetasCalcular();
calcularAguaM();
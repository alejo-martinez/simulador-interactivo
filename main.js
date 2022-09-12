// VARIABLES PARA ALMACENAR DATOS
const body = document.getElementsByTagName("body")

let metrosCuadrados = false;
let alertaCantidad = "Tenés que ingresar una cantidad(número)"
let claseDeRiego = "0"; 
let litrosDeTierra = 0; 
let tierraTotal = 0; 
let cantidadDeParcelas = 0
let suelo = 0; 

let cantidadFinalDeAgua = 0;
let capacidadFinal = 0;
let aguaFinal = 0;

// Arrays vacíos para almacenar datos provistos por el usuario.
const eleccionDeMacetas = [];
const parcelas = [];

// Clase constructora de las macetas
class Maceta {
    constructor(capacidad, cantidad) {
        this.capacidad = capacidad;
        this.cantidad = cantidad;
    }
}


// const bienvenida = () => {
//     alert("¡Bienvenido! Aquí podras calcular cuánta agua utilizar para tus riegos, sin que te falte ni que te sobre.")
// }

// Función elección de las macetas o suelo.

const eleccion = () => {
    metrosCuadrados = prompt("¿Querés calcular tu riego sobre macetas o metros cuadrados? Elige una opción: \n 1-Macetas \n 2-Suelo");
    if (metrosCuadrados == "2") {
        metrosCuadrados = true;
    } else if(metrosCuadrados == "1") {
        metrosCuadrados = false;
    } else {
        alert("Debes seleccionar una opción.");
        eleccion();
    }
}

const mostrarTitulo = () => {
    const h2 = document.getElementById("h2")
    if (metrosCuadrados == true) {
        const terminacionTitulo = document.createElement("strong")
        terminacionTitulo.innerText = "suelo"
        h2.append(terminacionTitulo);
    } else if (metrosCuadrados == false) {
        const terminacionTitulo = document.createElement("strong")
        terminacionTitulo.innerText = "macetas"
        h2.append(terminacionTitulo);
    }
    // document.h2.append(terminacionTitulo);
    
}


// OPCION CALCULAR AGUA POR MACETA

const macetasCalcular = ()=> {
    if (metrosCuadrados == false) {
        macetasElegidas = parseFloat(prompt("¿Cuantos tamaños vas a calcular?"))
        if (isNaN(macetasElegidas)) {
            alert("Tenés que ingresar un número")
            macetasCalcular();
        } else {
            return macetasElegidas;
        }
    }
}

const pusheadoMacetas = ()=> {
    if (metrosCuadrados == false) {
        while (eleccionDeMacetas.length < macetasElegidas) {
            let respuestaUsuario = prompt("Elegí la opcion: \n  a- Maceta de 0.5 litros \n b- Maceta de 0.7 litros \n c- Maceta de 1 litros \n d- Maceta de 1.5 litros \n e- Maceta de 2 litros \n f- Maceta de 2.5 litros \n g- Maceta de 3 litros \n h- Maceta de 4 litros \n i- Maceta de 5 litros \n j- Maceta de 10 litros \n k- Maceta de 15 litros \n l- Maceta de 20 litros \n m- Maceta de 40 litros")
            let cantidadDeMacetas = 0
            switch (respuestaUsuario) {
                case "a":
                    cantidadDeMacetas = parseFloat(prompt("Cantidad"))
                    if (isNaN(cantidadDeMacetas)) {
                        alert(alertaCantidad)
                    } else {
                        const maceta05 = new Maceta(0.5, cantidadDeMacetas);
                        eleccionDeMacetas.push(maceta05)
                        break; 
                    }
                case "b":
                    cantidadDeMacetas = parseFloat(prompt("Cantidad"))
                    if (isNaN(cantidadDeMacetas)) {
                        alert(alertaCantidad)
                    } else {
                    const maceta07 = new Maceta(0.7, cantidadDeMacetas);
                    eleccionDeMacetas.push(maceta07)
                    break;
                    }
                case "c":
                    cantidadDeMacetas = parseFloat(prompt("Cantidad"))
                    if (isNaN(cantidadDeMacetas)) {
                        alert(alertaCantidad)
                    } else {
                    const maceta1 = new Maceta(1, cantidadDeMacetas);
                    eleccionDeMacetas.push(maceta1)
                    break;
                    }
                case "d":
                    cantidadDeMacetas = parseFloat(prompt("Cantidad"))
                    if (isNaN(cantidadDeMacetas)) {
                        alert(alertaCantidad)
                    } else {
                    const maceta015 = new Maceta(1.5, cantidadDeMacetas);
                    eleccionDeMacetas.push(maceta015)
                    break;
                    }
                case "e":
                    cantidadDeMacetas = parseFloat(prompt("Cantidad"))
                    if (isNaN(cantidadDeMacetas)) {
                        alert(alertaCantidad)
                    } else {
                    const maceta2 = new Maceta(2, cantidadDeMacetas);                    
                    eleccionDeMacetas.push(maceta2)
                    break;
                    }
                case "f":
                    cantidadDeMacetas = parseFloat(prompt("Cantidad"))
                    if (isNaN(cantidadDeMacetas)) {
                        alert(alertaCantidad)
                    } else {
                    const maceta25 = new Maceta(2.5, cantidadDeMacetas);
                    eleccionDeMacetas.push(maceta25)
                    break;
                    }
                case "g":
                    cantidadDeMacetas = parseFloat(prompt("Cantidad"))
                    if (isNaN(cantidadDeMacetas)) {
                        alert(alertaCantidad)
                    } else {
                    const maceta3 = new Maceta(3, cantidadDeMacetas);
                    eleccionDeMacetas.push(maceta3)
                    break;
                    }
                case "h":
                    cantidadDeMacetas = parseFloat(prompt("Cantidad"))
                    if (isNaN(cantidadDeMacetas)) {
                        alert(alertaCantidad)
                    } else {
                    const maceta4 = new Maceta(4, cantidadDeMacetas);
                    eleccionDeMacetas.push(maceta4)
                    break;
                    }
                case "i":
                    cantidadDeMacetas = parseFloat(prompt("Cantidad"))
                    if (isNaN(cantidadDeMacetas)) {
                        alert(alertaCantidad)
                    } else {
                    const maceta5 = new Maceta(5, cantidadDeMacetas);
                    eleccionDeMacetas.push(maceta5)
                    break;
                    }
                case "j":
                    cantidadDeMacetas = parseFloat(prompt("Cantidad"))
                    if (isNaN(cantidadDeMacetas)) {
                        alert(alertaCantidad)
                    } else {
                    const maceta10 = new Maceta(10, cantidadDeMacetas);
                    eleccionDeMacetas.push(maceta10)
                    break;
                    }
                case "k":
                    cantidadDeMacetas = parseFloat(prompt("Cantidad"))
                    if (isNaN(cantidadDeMacetas)) {
                        alert(alertaCantidad)
                    } else {
                    const maceta15 = new Maceta(15, cantidadDeMacetas);
                    eleccionDeMacetas.push(maceta15)
                    break;
                    }
                case "l":
                    cantidadDeMacetas = parseFloat(prompt("Cantidad"))
                    if (isNaN(cantidadDeMacetas)) {
                        alert(alertaCantidad)
                    } else {
                    const maceta20 = new Maceta(20, cantidadDeMacetas);
                    eleccionDeMacetas.push(maceta20)
                    break;
                    }
                case "m":
                    cantidadDeMacetas = parseFloat(prompt("Cantidad"))
                    if (isNaN(cantidadDeMacetas)) {
                        alert(alertaCantidad)
                    } else {
                    const maceta40 = new Maceta(40, cantidadDeMacetas);
                    eleccionDeMacetas.push(maceta40)
                    break;
                    }
                    default:
                        alert("Opción no válida, elegí otra porfavor")
                        pusheadoMacetas();
            } 
        }
}
}


const sumaDeAgua = () => {
    if (metrosCuadrados == false) {
        
        eleccionDeMacetas.forEach((maceta) => {
            tierraTotal += maceta.cantidad * maceta.capacidad;
        });
        muestraDeAgua();
    }
}

const muestraDeAguaFinal = () => {
    if (metrosCuadrados == false) {
        eleccionDeMacetas.forEach((maceta) => {
            capacidadFinal = maceta.capacidad * 0.15;
            capacidadFinal = capacidadFinal.toFixed(2)
            let ul = document.createElement("ul")
            let contenedorRespuesta = document.createElement("li")
            contenedorRespuesta.innerText = `Para las macetas de ${maceta.capacidad} litros de tierra, las vas a regar con ${capacidadFinal} litros de agua.`;
            ul.append(contenedorRespuesta);
            document.body.append(ul)
        });
    }
}


const muestraDeAgua = () => {
    if (metrosCuadrados == false) {
        cantidadFinalDeAgua = tierraTotal * 0.15;
        cantidadFinalDeAgua = cantidadFinalDeAgua.toFixed(2);
        muestraDelResultado()
    }
}

const muestraDelResultado = () => {
    let resultadoUsuario = document.createElement("div")
    let parrafoRespuesta = document.createElement("p")
    parrafoRespuesta.innerText=`La cantidad de agua que vas a necesitar para regar todas las macetas va a ser de ${cantidadFinalDeAgua} litros de agua.`
    
    resultadoUsuario.append(parrafoRespuesta)
    document.body.append(resultadoUsuario)
}



// const muestraPorMaceta = () => {
//     let ul = document.createElement("ul")
//     let contenedorRespuesta = document.createElement("li")
//     contenedorRespuesta.innerText = `Para las macetas de  litros de tierra, las vas a regar con ${capacidadFinal} litros de agua.`;
//     ul.append(contenedorRespuesta);
//     document.body.append(ul)
// }

// Ingreso de los tamaños de los metros cuadrados a calcular.

const cuantasParcelas = () => {
    if (metrosCuadrados == true) {
        cantidadDeParcelas = parseFloat(prompt("¿Cuántos m² distintos querés calcular?"))
        if (isNaN(cantidadDeParcelas)) {
            alert("Ingresá un número porfavor.")
            cuantasParcelas();
        } else {
            return cantidadDeParcelas;
        }
    }
}



const calculoDeTierra = () => {
    if (metrosCuadrados == true) {
        let contador = 1
        while (parcelas.length != cantidadDeParcelas) {            
            suelo = parseFloat(prompt("¿Cuántos m² tiene el terreno " +  contador +"?"))
            contador += 1;
            if (isNaN(suelo)) {
                alert("Tenés que ingresar un número")
                calculoDeTierra();
            } else {
                parcelas.push(suelo);
            }
        }
        muestraDeAguaSuelo();
    }
}



// Función que determina la cantidad de agua por metro cuadrado.
const muestraDeAguaSuelo = () => {
    for (let terreno of parcelas) {
        alert("Para los " + terreno + "m² vas a necesitar " + terreno*15 + " litros de agua.")    
    }
}


// DOM

// USAR INNERHTML, CREATE  ELEMENT Y APPEND CHILD


// Funcionamiento del script

// bienvenida();
eleccion();
mostrarTitulo();
macetasCalcular();
pusheadoMacetas();
sumaDeAgua();
muestraDeAguaFinal();

cuantasParcelas();
calculoDeTierra();
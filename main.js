// VARIABLES PARA ALMACENAR DATOS

let metrosCuadrados = false;
let alertaCantidad = "Tenés que ingresar una cantidad(número)"
let claseDeRiego = "0"; 
let litrosDeTierra = 0; 
let tierraTotal = 0; 

let suelo = 0; 

let cantidadFinalDeAgua = 0;
let capacidadFinal = 0;
let aguaFinal = 0;

const eleccionDeMacetas = [];

// Clase constructora de las macetas
class Maceta {
    constructor(capacidad, cantidad) {
        this.capacidad = capacidad;
        this.cantidad = cantidad;
    }
}

const maceta05 = new Maceta(0.5);
const maceta07 = new Maceta(0.7);
const maceta1 = new Maceta(1);
const maceta015 = new Maceta(1.5);
const maceta2 = new Maceta(2);
const maceta25 = new Maceta(2.5);
const maceta3 = new Maceta(3);
const maceta4 = new Maceta(4);
const maceta5 = new Maceta(5);
const maceta10 = new Maceta(10);
const maceta15  = new Maceta(15);
const maceta20  = new Maceta(20);
const maceta40  = new Maceta(40);



const bienvenida = () => {
    alert("¡Bienvenido! Aquí podras calcular cuánta agua utilizar para tus riegos, sin que te falte ni que te sobre.")
}

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
            alert("Para las macetas de " + maceta.capacidad + " litros, las vas a regar con " + capacidadFinal + " litros")
        });
    }
}


const muestraDeAgua = () => {
    if (metrosCuadrados == false) {
        
        cantidadFinalDeAgua = tierraTotal * 0.15;
        cantidadFinalDeAgua = cantidadFinalDeAgua.toFixed(2);
        alert("La cantidad de agua que vas a necesitar va a ser de " + cantidadFinalDeAgua + " litros de agua.")
    }
}

// OPCION CALCULAR RIEGO EN SUELO

//Función de ingreso de los metros cuadrados.

const calculoDeTierra = () => {
    if (metrosCuadrados == true) {
        suelo = parseFloat(prompt("¿Cuántos metros cuadrados querés calcular?"))
        if (isNaN(suelo)) {
            alert("Tenés que ingresar un número")
            calculoDeTierra();
        }
        return suelo;
    }
}


// Función que determina la cantidad de agua por metro cuadrado.
const aguaTotalSuelo = () => {
    let aguaParaSuelo = suelo * 15;

    if (metrosCuadrados == true) {
        alert("Para los " + suelo + " metros cuadrados necesitarás " + aguaParaSuelo + " litros de agua.")
    }
    return aguaParaSuelo;
}

// Funcionamiento del script

bienvenida();
eleccion();
macetasCalcular();
pusheadoMacetas();
sumaDeAgua();
muestraDeAguaFinal();
calculoDeTierra();
aguaTotalSuelo();
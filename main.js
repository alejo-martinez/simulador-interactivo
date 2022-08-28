let metrosCuadrados = false;
let macetas = 0;
let claseDeRiego = "0";
let litrosDeTierra = 0;
let tierraTotal = 0;
let totalAgua = 0;
let suelo = 0;

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

// Función de ingreso del número de macetas.
const calculoDeMacetas = () => {
    if (metrosCuadrados == false) {
        macetas = parseFloat(prompt("¿Cuántas macetas querés calcular?"))
    if (isNaN(macetas)) {
        alert("Tenés que ingresar un número.")
        calculoDeMacetas();
        } else {
            return macetas;
    }
     }
} 


// Función elección del tipo de riego
const tipoRiego = () => {
    claseDeRiego = prompt("¿Qué clase de riego necesitan tus plantas? \n 1-Riego alto \n 2-Riego medio \n 3-Riego bajo");
    switch (claseDeRiego) {
        case "1":
            return claseDeRiego;
        case "2":
            return claseDeRiego;
        case "3":
            return claseDeRiego;

        default:
            alert("Tenés que seleccionar una opción")
            tipoRiego();
    }
}


//Función de ingreso de los metros cuadrados.
const calculoDeTierra = () => {
    if (metrosCuadrados == true) {
        suelo = parseFloat(prompt("¿Cuántos metros cuadrados querés calcular?"))
        if (isNaN(suelo)) {
            alert("Tenés que ingresar un número")
            calculoDeTierra();
        }
        return suelo;
    } else if (metrosCuadrados == false) {
        litrosDeTierra = parseFloat(prompt("¿De cuántos litros son tus macetas?"));
        if (isNaN(litrosDeTierra)) {
            alert("Debes ingresar un número");
            calculoDeTierra();
    }
        return litrosDeTierra;
}
}


//Función que determina el agua a utilizar por macetas.
const aguaTotalMaceta = (n1, n2) => {
    tierraTotal = n1 * n2;
    totalAgua = tierraTotal * 0.1;
    let regar = totalAgua / macetas;
    regar = regar.toFixed(2);
    
    if (metrosCuadrados == false && claseDeRiego == "1") {
        alert("Necesitarás " + totalAgua + " litros de agua para regar todas tus macetas. A cada maceta deberás echarle " + regar + " litros de agua cada 2 días.")
    } else if (metrosCuadrados == false && claseDeRiego == "2") {
        alert("Necesitarás " + totalAgua + " litros de agua para regar todas tus macetas. A cada maceta deberás echarle " + regar + " litros de agua cada 4-5 días.")
    } else if (metrosCuadrados == false && claseDeRiego == "3") {
        alert("Necesitarás " + totalAgua + " litros de agua para regar todas tus macetas. A cada maceta deberás echarle" + regar + " litros de agua cada 9 días.")
    }
    return tierraTotal, totalAgua, regar;
}


// Función que determina la cantidad de agua por metro cuadrado.
const aguaTotalSuelo = () => {
    let aguaParaSuelo = suelo * 15;

    if (metrosCuadrados == true && claseDeRiego == "1") {
        alert("Para los " + suelo + " metros cuadrados necesitarás " + aguaParaSuelo + " litros de agua cada 2-3 días.")
    } else if (metrosCuadrados == true && claseDeRiego == "2") {
        alert("Para los " + suelo + " metros cuadrados necesitarás " + aguaParaSuelo + " litros de agua cada 6-7 días.")
    } else if (metrosCuadrados == true && claseDeRiego == "3") {
        alert("Para los " + suelo + " metros cuadrados necesitarás " + aguaParaSuelo + " litros de agua cada 9 días aproximadamente.")
    }
    return aguaParaSuelo;
}

bienvenida();
eleccion();
tipoRiego();
calculoDeMacetas();
calculoDeTierra();
aguaTotalMaceta(macetas, litrosDeTierra);
aguaTotalSuelo();
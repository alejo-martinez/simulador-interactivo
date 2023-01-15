let tipoCultivo = "";
let arrayCultivo = []
const contenedorCultivo = document.getElementById("contenedorCultivo");
const select = document.createElement("select");

fetch("../data/cultivos.json")
.then((response)=> response.json())
.then((array) => arrayCultivo = array)


const pedirCultivos = async () => {
    const resp = await fetch("../data/cultivos.json")
    const data = await resp.json()
    data.forEach(cultivo => {
        select.innerHTML += `<option value=${cultivo.nombre}>${cultivo.nombre}</option>`
    });
    contenedorCultivo.append(select);
    return data;
}
pedirCultivos();

const respuestaCultivo = document.getElementById("respuestaCultivo");

select.addEventListener("change", (el) => {
    tipoCultivo = el.target.value;
    cambiarCultivo(tipoCultivo)
})

const construirTexto = (valor) => {
    respuestaCultivo.innerHTML = `<p class= "textoCultivo">El cultivo de ${arrayCultivo[valor].nombre} es un cultivo de tipo ${arrayCultivo[valor].variedad} pudiendose sembrar ${arrayCultivo[valor].siembra}. Necesita de un suelo ${arrayCultivo[valor].suelo}. ${arrayCultivo[valor].descripcion}</p>`
}

const cambiarCultivo = (val) => {
    switch (val) {
        case "Albahaca":
            construirTexto(0)
            break;
    
        case "Acelga":
            construirTexto(1)
            break;

        case "Ajo":
            construirTexto(2)
            break;

        case "Berenjena":
            construirTexto(3)
            break;

        case "Calabaza":
            construirTexto(4)
            break;

        case "Cebolla":
            construirTexto(5)
            break;

        case "Tomate":
            construirTexto(6)
            break;
    }
}


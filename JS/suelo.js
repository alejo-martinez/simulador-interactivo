let metrosCuadrados = 0;
const btnSuelo = document.getElementById("btn-suelo") 
const contenedorRespuestaSuelo = document.getElementById("contenedorRespuestaSuelo")
respuestaSuelo = document.getElementById("filaRespuesta-suelo")
const favoritos = document.getElementById("favoritos")
const suelosFavoritos = [];

    btnSuelo.addEventListener("click", ()=> {
        calcularAguaM();
    })

    const calcularAguaM = ()=> {     
    metrosCuadrados = parseFloat(document.getElementById("inputSuelo").value)
    metrosCuadrados = metrosCuadrados * 15
    metrosCuadrados = metrosCuadrados.toFixed(2)

    respuestaSuelo.innerHTML += `<tr class = "filaRespuesta-suelo">
    <td>${inputSuelo.value} m²</td>
    <td>${metrosCuadrados} litros de agua`
}

const almacenarFavoritos = ()=> {
    suelosFavoritos.push(inputSuelo.value)
    localStorage.setItem("suelos", JSON.stringify(suelosFavoritos))
}

favoritos.addEventListener("click", ()=> {
    almacenarFavoritos()
})
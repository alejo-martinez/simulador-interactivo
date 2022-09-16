let metrosCuadrados = 0;
const btnSuelo = document.getElementById("btn-suelo") 
const contenedorRespuestaSuelo = document.getElementById("contenedorRespuestaSuelo")
respuestaSuelo = document.getElementById("filaRespuesta-suelo")



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
/* <p class = "parrafo-respuesta">
    Para el área de ${inputSuelo.value} m² vas a necesitar un total de ${metrosCuadrados} litros de agua.</p>
 */
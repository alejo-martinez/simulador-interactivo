let metrosCuadrados = 0;
const btnSuelo = document.getElementById("btn-suelo") 
const contenedorRespuestaSuelo = document.getElementById("contenedorRespuestaSuelo")
respuestaSuelo = document.getElementById("filaRespuesta-suelo")
const favoritos = document.getElementById("favoritos")
const suelosFavoritos = [];

    btnSuelo.addEventListener("click", ()=> {
        let timerInterval
        Swal.fire({
      title: 'Calculando',
      html: 'Espere un momento porfavor',
      color: '#716add',
      background: "#C7D3F2",
      timer: 800,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft()
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    })
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
    Swal.fire({
        title: '¡Agregado a favoritos! Visita la sección "favoritos" para verlos',
        width: 300,
        padding: '1em',
        color: '#716add',
        icon: "success",
        background: "#C7D3F2"
      })
})
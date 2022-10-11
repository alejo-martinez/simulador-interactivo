let litrosDeTierra = 0; 
let cantidad = 0;
let retornar = 0;

const contenedorRespuesta = document.getElementById("contenedorRespuesta");
let calcular = document.getElementById("calcular");
let filaRespuesta = document.getElementById("filaRespuesta");
let favoritos = document.getElementById("favoritos");
const divMacetas = document.querySelector(".contenedorPregunta-tamaño")
const select = document.createElement("select")

const macetasFavoritas = [];

class Maceta {
    constructor(capacidad, cantidad) {
        this.capacidad = capacidad
        this.cantidad = cantidad
    }
}




const calculando = () => {
  
  let timerInterval
  Swal.fire({
title: 'Calculando',
html: 'Espere un momento porfavor',
color: '#716add',
background: "#C7D3F2",
target: "#contenedorFavoritas",
timer: 800,
timerProgressBar: true,
didOpen: () => {
  Swal.showLoading()
},
willClose: () => {
  clearInterval(timerInterval)
}
})
}

const macetasCalcular = ()=> {
  litrosDeTierra = parseFloat(document.getElementById("ingresoLitros").value)
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

calcular.addEventListener("click", (e)=> {
  calculando();
  macetasCalcular();
} )

const almacenarFavoritos = ()=> {
  const maceta = new Maceta(ingresoLitros.value, ingresoCantidad.value);
  macetasFavoritas.push(maceta)
  localStorage.setItem("macetas" ,JSON.stringify(macetasFavoritas))

  btnSwal()
}

const btnSwal = ()=> {
  Swal.fire({
    title: '¡Agregado a favoritos! Visita la sección "favoritos" para verlas',
    width: 300,
    padding: '1em',
    color: '#716add',
    icon: "success",
    background: "#C7D3F2"
  })
}

favoritos.addEventListener("click", ()=> {
    almacenarFavoritos()
})


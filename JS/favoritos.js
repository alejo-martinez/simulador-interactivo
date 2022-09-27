const btnFavoritos = document.getElementById("btnFavoritos");
const btnSuelosFavoritos = document.getElementById("btnFavoritosSuelos")
const muestraFavoritos = document.getElementById("muestraFavoritos")
const btnEliminar = document.getElementById("btnEliminar")
const contenedorSueloFavorito = document.getElementById("muestraSuelosFavoritos")
let contador = 0
const misSuelos = [];
const muestraMacetasFavoritas = [];

let metrosFavoritos = JSON.parse(localStorage.getItem("suelos"))
let misFavoritos = JSON.parse(localStorage.getItem("macetas"))


const mostrarFavoritos = () => {
for (const maceta of misFavoritos) {
    muestraFavoritos.innerHTML += `<tr>
    <td>Maceta</td>
    <td>Tamaño: ${maceta.capacidad} litros</td>
    <td>Almacenaste ${maceta.cantidad} macetas de este tamaño</td>
    <td>Cada maceta la regarás con ${((maceta.cantidad * maceta.capacidad) * 0.15).toFixed(2)} litros</td>
    </tr>`
}
}

btnFavoritos.addEventListener("click", ()=> {
    mostrarFavoritos();
})

btnEliminar.addEventListener("click", ()=> {
    Swal.fire({
        title: '¿Estás seguro que querés vaciar tus favoritos?',
        text: "Luego tendrás que agregar todos de nuevo",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Acept'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            '¡Vaciado con éxito!',
          )
          localStorage.clear()
        }
      })
})



const mostrarSuelosFavoritos = () => {
    for (const suelo of metrosFavoritos) {
    contenedorSueloFavorito.innerHTML += `<tr>
    <td>M²</td>
    <td>Tamaño: ${suelo} litros</td>
    <td>Agua a utilizar: ${(suelo * 15).toFixed(2)} litros de agua</td>
    </tr>`
    }
}

btnSuelosFavoritos.addEventListener("click", () => {
    mostrarSuelosFavoritos()
})
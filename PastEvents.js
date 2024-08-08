import {consultarUrl, pintarTarjetas, pintarCheckbox, filtroTexto, filtroCheck  } from "./modules/funciones.js";

let urldatosAmazing = "https://aulamindhub.github.io/amazing-api/events.json"
let data = await consultarUrl (urldatosAmazing)


let past = []

for (let i = 0; i < data.events.length; i++) {
  if (data.events[i].date < data.currentDate) {
    past.push(data.events[i])
  }
}

pintarTarjetas (past)
pintarCheckbox (past)

document.getElementById("inputTexto").addEventListener('keyup', e => {
  let arregloTextoFiltrado = filtroTexto(past)
  let arregloFiltradochecks = filtroCheck(arregloTextoFiltrado)


  if (arregloFiltradochecks.length != 0) {
    pintarTarjetas(arregloFiltradochecks)
  } else {
    document.getElementById("contenedorTarjetas").innerHTML = " We don't have any events available that meet the search conditions!"
  }
})

document.getElementById("checkbox").addEventListener('change', e => {
  let arregloFiltradochecks = filtroCheck(past)
  let arregloTextoFiltrado = filtroTexto(arregloFiltradochecks)


  if (arregloTextoFiltrado.length != 0) {
    pintarTarjetas(arregloTextoFiltrado)
  } else {
    document.getElementById("contenedorTarjetas").innerHTML = " We don't have any events available that meet the search conditions!"
  }
})

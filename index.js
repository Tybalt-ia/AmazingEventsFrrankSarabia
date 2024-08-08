

import {consultarUrl, pintarTarjetas, pintarCheckbox, filtroTexto, filtroCheck } from "./modules/funciones.js";

let urldatosAmazing = "https://aulamindhub.github.io/amazing-api/events.json"
let data = await consultarUrl (urldatosAmazing)

pintarTarjetas(data.events)

pintarCheckbox(data.events)


document.getElementById("inputTexto").addEventListener('keyup', e => {
  let arregloTextoFiltrado = filtroTexto(data.events)
  let arregloFiltradochecks = filtroCheck(arregloTextoFiltrado)
  pintarTarjetas(arregloFiltradochecks);

  if (arregloFiltradochecks.length != 0) {
    pintarTarjetas(arregloFiltradochecks)
  } else {
    document.getElementById("contenedorTarjetas").innerHTML = " We don't have any events available that meet the search conditions!"
  }
})

document.getElementById("checkbox").addEventListener('change', e => {
  let arregloFiltradochecks = filtroCheck(data.events)
  let arregloTextoFiltrado = filtroTexto(arregloFiltradochecks)
  

  if (arregloTextoFiltrado.length != 0) {
    pintarTarjetas(arregloTextoFiltrado)
  } else {
    document.getElementById("contenedorTarjetas").innerHTML = " We don't have any events available that meet the search conditions!"
  }
})




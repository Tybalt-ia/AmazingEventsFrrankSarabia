import {consultarUrl,} from "./modules/funciones.js";

  let urldatosAmazing = "https://aulamindhub.github.io/amazing-api/events.json"

let data = await consultarUrl (urldatosAmazing)

let _id = new URLSearchParams (window.location.search).get ("id")
  let detalles = data.events.find(e => e._id == _id)
  
  
  document.getElementById ("card").innerHTML = `
            <div class="card col-4" >
            <img src="${detalles.image}" class="imagenDetalles ">
            <div class="card-body">
           <h5  id="name" class="card-title d-flex justify-content-center"> name: ${detalles.name} </h5>
           
                  <p class="card-text"> date: ${detalles.date} </p>
                  <p class="card-text"> description: ${detalles.description} </p>
                  <p class="card-text"> capacity: ${detalles.capacity}  </p>
                  <p class="card-text"> capacity or estimate: ${detalles.assistance? detalles.assistance:detalles.estimate} </p>
                  <p class="card-text"> price : ${detalles.price} </p>     
        `
  

  

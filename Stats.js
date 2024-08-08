import { consultarUrl, calcularValoresx, pintarTablaPorCategoria } from "./modules/funciones.js";

let urldatosAmazing = "https://aulamindhub.github.io/amazing-api/events.json"
let data = await consultarUrl(urldatosAmazing)

let eventos = data.events;

let eventosxAsistencia = eventos.map(event => {
    if (event.assistance) {
        event.percent = Number(((event.assistance * 100) / event.capacity).toFixed(2));
        return event;
    }
}).filter(event => event != undefined);

let eventosxAsistenciaOrdenados = eventosxAsistencia.sort((a, b) => a.percent > b.percent ? -1 : 1);

// console.log(eventosxAsistenciaOrdenados[0]);
let ultimaPosicion = eventosxAsistenciaOrdenados.length - 1;
// console.log(eventosxAsistenciaOrdenados[ultimaPosicion]);

let eventosOrdenadosxCapacidad = eventos.sort((a, b) => a.capacity > b.capacity ? -1 : 1);
// console.log(eventosOrdenadosxCapacidad[0]);


let upcomings = eventos.filter(evento => evento.date > data.currentDate)

let past = eventos.filter( evento => evento.date < data.currentDate)


let categoriaup = upcomings.map(evento => evento.category) 


function calcularValores (eventos){
    let datosxCategoria = {};

    eventos.forEach(event => {
     let categoria = event.category;
     let ingreso = (event.price * (event.assistance||event.estimate));
     let asistencia = (event.assistance||event.estimate);

     if (!categoriasData[categoria]) {
      categoriasData[categoria] = {
          totalIngresos: 0,
          totalAsistencia: 0,
          totalEventos: 0,
          totalCapacidad: 0
      };
  }

  categoriasData[categoria].totalIngresos += ingreso;
  categoriasData[categoria].totalAsistencia += asistencia;
  categoriasData[categoria].totalCapacidad += event.capacity;
  categoriasData[categoria].totalEventos += 1;

});

let categorias = [];
let ingresosPromedio = [];
let porcentajesAsistencia = [];

for (let categoria in categoriasData) {
    categorias.push(categoria);
    ingresosPromedio.push(categoriasData[categoria].totalIngresos / categoriasData[categoria].totalEventos); 
    let porcentajeAsistencia = (categoriasData[categoria].totalAsistencia / categoriasData[categoria].totalCapacidad) * 100  
    porcentajesAsistencia.push(porcentajeAsistencia);
}

return {
    categorias,
    ingresosPromedio,
    porcentajesAsistencia
    };
  }
  
   let estadisticasxCategoria =calcularValoresx (upcomings)
   console.log(estadisticasxCategoria);

   let tablaCategorias = pintarTablaPorCategoria (estadisticasxCategoria);
   document.getElementById ("tablaUpcoming").appendChild (tablaCategorias);


   

   let estadisticasPast = calcularValoresx (past)
   console.log(estadisticasPast);

   let tablapast = pintarTablaPorCategoria (estadisticasPast);
   document.getElementById ("tablasPast").appendChild (tablapast)
   




   
   
   

  





















// let categoriaUpcomings = upcomings.map(upcoming => {
//     return {
//         categoria: upcoming.category,
//         ventas: 0,
//         porcentaje: 0
//     }
// })

// console.log(categoriaUpcomings);



// let categoriaUpcomingsSD = []
// categoriaUpcomings.forEach(elemento => {
//     if (!categoriaUpcomingsSD.includes(elemento.category)) {
//         let fila = {
//             categoria: elemento.category,
//             ventas: elemento.price * elemento.estimate,
//             porcentaje: (elemento.estimate * 100) / elemento.capacity
//         }
//         categoriaUpcomings.push(fila)
//     }
// })
// console.log(categoriaUpcomings);

// let past = eventos.filter(evento => evento.data < data.currentDate)

// // ((42.756*100)/50.000)

// // (([9]*100)/[8])

// // []


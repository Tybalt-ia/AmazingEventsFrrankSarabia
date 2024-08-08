export async function consultarUrl(url) {
    return await fetch(url).then(Response => Response.json())
  }

  export function pintarTarjetas(events) {
    let contenedor = document.getElementById("contenedorTarjetas")
    contenedor.innerHTML = ""
  
    for (let i = 0; i < events.length; i++) {
  
  
  
      let tarjeta = document.createElement('div')
      tarjeta.className = "card m-1"
      tarjeta.innerHTML = `
              <img src="${events[i].image}" class="card-img-top">
             <div class="card-body">
               <h5 class="card-title text-center">${events[i].name}</h5>
               <p class="card-text text-center">${events[i].description}</p>
              <div class="container-fluid d-flex justify-content-center">
                <p class="card-text text-center m-2">Price: ${events[i].price} </p>
                <a href="./details.html?id=${events[i]._id} " class="btn btn-primary">Details</a>
              </div>     
          `
      contenedor.appendChild(tarjeta)
    }
  }

  export function pintarCheckbox(events) {let checkbox = []

    for (let i = 0; i < events.length; i++) {
      if (!checkbox.includes(events[i].category)) {
        checkbox.push(events[i].category)
      }
    }

    for (let i = 0; i < checkbox.length; i++) {
      let contenedor = document.getElementById("checkbox")
      let check = document.createElement('div')
      check.className = "form-check m-1 d-flex align-items-center"
      check.innerHTML = `
        <input class="form-check-input" type="checkbox" value="${checkbox[i]}" id="flexCheck1">
        <label class="form-check-label" for="flexCheck1">
           ${checkbox[i]}
        </label>
      `
      contenedor.appendChild(check)
    }
  }

  export function filtroTexto(arregloEventos) {
    let texto = document.getElementById("inputTexto").value.toLowerCase()
    let arregloFiltrado = arregloEventos
    if (texto != null || texto != undefined) {
      arregloFiltrado = arregloEventos.filter(eventos => eventos.name.toLowerCase().includes(texto)
        || eventos.description.toLowerCase().includes(texto))
    }
    return (arregloFiltrado)
  
  }

  export function filtroCheck(arregloEventos) {
    let tarjetaChequeada = [...document.querySelectorAll('input[type = "checkbox"]:checked')]
    tarjetaChequeada = tarjetaChequeada.map(e => e.value)
    
    let arregloFiltrado = arregloEventos
    if (tarjetaChequeada.length != 0) {
      arregloFiltrado = arregloEventos.filter(eventos => tarjetaChequeada.includes(eventos.category))
    }
  
    return arregloFiltrado
  }


  export function pintarcategoria(events) {
    let checkbox = []

    for (let i = 0; i < events.length; i++) {
      if (!categoria.includes(events[i].category)) {
        checkbox.push(events[i].category)
      }
    }
    
    
    for (let i = 0; i < checkbox.length; i++) {
      let contenedor = document.getElementById("checkbox")
      let check = document.createElement('div')
      check.className = "form-check m-1 d-flex align-items-center"
      check.innerHTML = `
        <input class="form-check-input" type="checkbox" value="${checkbox[i]}" id="flexCheck1">
        <label class="form-check-label" for="flexCheck1">
           ${checkbox[i]}
        </label>
      `
      contenedor.appendChild(check)
    }
  }

 
  export function calcularValoresx (eventos){
    let categoriasData = {};
    console.log(categoriasData);
    
    

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


  export function pintarTablaPorCategoria(estadisticas) {
    const { categorias, ingresosPromedio, porcentajesAsistencia } = estadisticas;

    const table = document.createElement('table');
    table.className = "table table-bordered border-primary";
    table.innerHTML = `
        <tr>
            <th>Category</th>
            <th>Revenues</th>
            <th>Percentage of Attendance</th>
        </tr>
    `;

    for (let i = 0; i < categorias.length; i++) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${categorias[i]}</td>
            <td>${ingresosPromedio[i].toFixed(2)}</td>
            <td>${porcentajesAsistencia[i].toFixed(2)}%</td>
        `;
        table.appendChild(row);
    }

    return table;
}

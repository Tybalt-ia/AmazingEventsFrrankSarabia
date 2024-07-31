const data = {
  currentDate: "2023-01-01",
  events: [
    {
      _id: "639c723b992482e5f2834be9",
      name: "Collectivities Party",
      image: "https://i.postimg.cc/Fs03hQDt/Collectivities-Party.jpg",
      date: "2022-12-12",
      description:
        "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
      category: "Food Fair",
      place: "Room A",
      capacity: 45000,
      assistance: 42756,
      price: 5,
      __v: 0,
    },
    {
      _id: "639c723b992482e5f2834beb",
      name: "Korean style",
      image: "https://i.postimg.cc/ZmD3Xf57/Korean-style.jpg",
      date: "2023-08-12",
      description:
        "Enjoy the best Korean dishes, with international chefs and awesome events.",
      category: "Food Fair",
      place: "Room A",
      capacity: 45000,
      price: 10,
      __v: 0,
      estimate: 42756,
    },
    {
      _id: "639c723c992482e5f2834bed",
      name: "Jurassic Park",
      image: "https://i.postimg.cc/GmHRkbNV/Jurassic-Park.jpg",
      date: "2022-11-02",
      description:
        "Let's go meet the biggest dinosaurs in the paleontology museum.",
      category: "Museum",
      place: "Field",
      capacity: 82000,
      price: 15,
      __v: 0,
      assistance: 65892,
    },
    {
      _id: "639c723c992482e5f2834bef",
      name: "Parisian Museum",
      image: "https://i.postimg.cc/c4C2zXm8/Parisian-Museum.jpg",
      date: "2023-11-02",
      description:
        "A unique tour in the city of lights, get to know one of the most iconic places.",
      category: "Museum",
      place: "Paris",
      capacity: 8200,
      estimate: 8200,
      price: 3500,
      __v: 0,
    },
    {
      _id: "639c723c992482e5f2834bf1",
      name: "Comicon",
      image: "https://i.postimg.cc/KYD0jMf2/comicon.jpg",
      date: "2022-02-12",
      description:
        "For comic lovers, all your favourite characters gathered in one place.",
      category: "Costume Party",
      place: "Room C",
      capacity: 120000,
      assistance: 110000,
      price: 54,
      __v: 0,
    },
    {
      _id: "639c723c992482e5f2834bf3",
      name: "Halloween Night",
      image: "https://i.postimg.cc/RZ9fH4Pr/halloween.jpg",
      date: "2023-02-12",
      description: "Come with your scariest costume and win incredible prizes.",
      category: "Costume Party",
      place: "Room C",
      capacity: 12000,
      estimate: 9000,
      price: 12,
      __v: 0,
    },
    {
      _id: "639c723c992482e5f2834bf5",
      name: "Metallica in concert",
      image: "https://i.postimg.cc/PrMJ0ZMc/Metallica-in-concert.jpg",
      date: "2023-01-22",
      description: "The only concert of the most emblematic band in the world.",
      category: "Music Concert",
      place: "Room A",
      capacity: 138000,
      estimate: 138000,
      price: 150,
      __v: 0,
    },
    {
      _id: "639c723c992482e5f2834bf7",
      name: "Electronic Fest",
      image: "https://i.postimg.cc/KvsSK8cj/Electronic-Fest.jpg",
      date: "2022-01-22",
      description:
        "The best national and international DJs gathered in one place.",
      category: "Music Concert",
      place: "Room A",
      capacity: 138000,
      assistance: 110300,
      price: 250,
      __v: 0,
    },
    {
      _id: "639c723d992482e5f2834bf9",
      name: "10K for life",
      image: "https://i.postimg.cc/fyLqZY9K/10-K-for-life.jpg",
      date: "2022-03-01",
      description: "Come and exercise, improve your health and lifestyle.",
      category: "Race",
      place: "Soccer field",
      capacity: 30000,
      assistance: 25698,
      price: 3,
      __v: 0,
    },
    {
      _id: "639c723d992482e5f2834bfb",
      name: "15K NY",
      image: "https://i.postimg.cc/zv67r65z/15kny.jpg",
      date: "2023-03-01",
      description:
        "We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
      category: "Race",
      place: "New York",
      capacity: 3000000,
      price: 3,
      __v: 0,
      estimate: 2569800,
    },
    {
      _id: "639c723d992482e5f2834bfd",
      name: "School's book fair",
      image: "https://i.postimg.cc/Sst763n6/book1.jpg",
      date: "2023-10-15",
      description: "Bring your unused school book and take the one you need.",
      category: "Book Exchange",
      place: "Room D1",
      capacity: 150000,
      estimate: 123286,
      price: 1,
      __v: 0,
    },
    {
      _id: "639c723d992482e5f2834bff",
      name: "Just for your kitchen",
      image: "https://i.postimg.cc/05FhxHVK/book4.jpg",
      date: "2022-11-09",
      description:
        "If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
      category: "Book Exchange",
      place: "Room D6",
      capacity: 130000,
      assistance: 90000,
      price: 100,
      __v: 0,
    },
    {
      _id: "639c723d992482e5f2834c01",
      name: "Batman",
      image: "https://i.postimg.cc/vH52y81C/cinema4.jpg",
      date: "2022-3-11",
      description: "Come see Batman fight crime in Gotham City.",
      category: "Cinema",
      place: "Room D1",
      capacity: 11000,
      assistance: 9300,
      price: 225,
      __v: 0,
    },
    {
      _id: "639c723d992482e5f2834c03",
      name: "Avengers",
      image: "https://i.postimg.cc/T3C92KTN/scale.jpg",
      date: "2023-10-15",
      description:
        "Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
      category: "Cinema",
      place: "Room D1",
      capacity: 9000,
      estimate: 9000,
      price: 250,
      __v: 0,
    },
  ],
};

let upComing = []

for (let i = 0; i < data.events.length; i++) {
  if (data.events[i].date > data.currentDate) {
    upComing.push(data.events[i])
  }
}

function pintarTarjetas(events) {
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
            <a href="./details.html?id=${events[i]._id}" class="btn btn-primary">Details</a>
          </div>     
      `
    contenedor.appendChild(tarjeta)
  }
}




let checkbox = []

for (let i = 0; i < upComing.length; i++) {
  if (!checkbox.includes(upComing[i].category)) {
    checkbox.push(upComing[i].category)
  }

}

function pintarCheckbox(events) {
  for (let i = 0; i < events.length; i++) {
    let contenedor = document.getElementById("checkbox")
    let check = document.createElement('div')
    check.className = "form-check m-1 d-flex align-items-center"
    check.innerHTML = `
      <input class="form-check-input" type="checkbox" value="${events[i]}" id="${events[i]}">
      <label class="form-check-label" for="flexCheck1">
         ${events[i]}
      </label>
    `
    document.getElementById("checkbox").appendChild(check)
    contenedor.appendChild(check)
  }
}


function filtroTexto(arregloEventos) {
  let texto = document.getElementById("inputTexto").value.toLowerCase()
  let arregloFiltrado = arregloEventos
  if (texto != null || texto != undefined) {
    arregloFiltrado = arregloEventos.filter(eventos => eventos.name.toLowerCase().includes(texto)
      || eventos.description.toLowerCase().includes(texto))
  }
  return (arregloFiltrado)

}

function filtroCheck(arregloEventos) {
  let tarjetaChequeada = [...document.querySelectorAll('input[type = "checkbox"]:checked')]
  tarjetaChequeada = tarjetaChequeada.map(e => e.value)
  let arregloFiltrado = arregloEventos
  if (tarjetaChequeada.length != 0) {
    arregloFiltrado = arregloEventos.filter(eventos => tarjetaChequeada.includes(eventos.category))
  }

  return arregloFiltrado
}

window.addEventListener("load", function (event) {

  document.getElementById("inputTexto").addEventListener('keyup', e => {
    let arregloTextoFiltrado = filtroTexto(upComing)
    let arregloFiltradochecks = filtroCheck(arregloTextoFiltrado)


    if (arregloFiltradochecks.length != 0) {
      pintarTarjetas(arregloFiltradochecks)
    } else {
      document.getElementById("contenedorTarjetas").innerHTML = " We don't have any events available that meet the search conditions!"
    }
  })

  document.getElementById("checkbox").addEventListener('change', e => {
    let arregloFiltradochecks = filtroCheck(upComing)
    let arregloTextoFiltrado = filtroTexto(arregloFiltradochecks)


    if (arregloTextoFiltrado.length != 0) {
      pintarTarjetas(arregloTextoFiltrado)
    } else {
      document.getElementById("contenedorTarjetas").innerHTML = " We don't have any events available that meet the search conditions!"
    }
  })
  pintarTarjetas(upComing);
  pintarCheckbox(checkbox)
});




function dibujarHoraActual() {
  let hoy = new Date();
  let anio = hoy.getFullYear();
  let mes = hoy.getMonth() + 1;
  let dia = hoy.getDate();
  let horas = hoy.getHours();
  let minutos = hoy.getMinutes();
  let segundos = hoy.getSeconds();

  let date = `${dia}/${mes}/${anio} ${horas}:${minutos}:${segundos}`;

  document.getElementById("fecha").innerText = date;
}

setInterval(() => {
  dibujarHoraActual();
}, 1000);

// --------------------------------------------------------

let ultimasNoticias = [
  {
    titulo: "Ultima noticia 1",
    categoria: "internacional",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. null ne",
  },
  {
    titulo: "Ultima noticia 2",
    categoria: "internacional",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. null ne",
  },
  {
    titulo: "Ultima noticia 3",
    categoria: "internacional",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. null ne",
  },
  {
    titulo: "Ultima noticia 4",
    categoria: "internacional",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. null ne",
  },
  {
    titulo: "Ultima noticia 5",
    categoria: "internacional",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. null ne",
  },
];

function dibujarUltimasNoticias() {
  for (let i = 0; i < 5; i++) {
    let dataNoticia = document.getElementById(`ultima-noticia-${i + 1}`);
    console.log(ultimasNoticias[i]);
    let string = `
      <article class="border rounded p-2">
        <h2 class="fs-4 m-0">${ultimasNoticias[i].titulo}</h2>
        <span class="" style="font-size: 12px;">${ultimasNoticias[i].categoria}</span>
        <p>${ultimasNoticias[i].descripcion}</p>
      </article>`;

    dataNoticia.innerHTML = string;
  }
}

dibujarUltimasNoticias();

// --------------------------------------------------------

let formularioAgregar = document.getElementById("formularioAgregar");
formularioAgregar.addEventListener("submit", (e) => {
  e.preventDefault();
  let tipo = document.getElementById("selectTipo").value;
  let titulo = document.getElementById("txtTitulo").value;
  let categoria = document.getElementById("selectCategoria").value;
  let descripcion = document.getElementById("txtDescripcion").value;

  if (tipo == 1) {
    // es una noticia
    imprimirNoticia(titulo, categoria, descripcion);
  }

  if (tipo == 2) {
    // Es un aviso, no una noticia
    imprimirAviso(titulo, categoria, descripcion);
  }


  ultimasNoticias.pop();
  ultimasNoticias.unshift({titulo, categoria, descripcion});
  dibujarUltimasNoticias()
  
  // Ocultar modal
  const truck_modal = document.getElementById("#exampleModal");
  const modal = new bootstrap.Modal(truck_modal, {
    backdrop: "static",
  });

  modal.hide();
});

function imprimirNoticia(titulo, categoria, descripcion) {
  let html = document.getElementById(`data-${categoria}`).innerHTML;
  let string = `
    <article class="col-12 col-md-4 border rounded p-2">
      <h2 class="fs-5 m-0">${titulo}</h2>
      <span style="font-size: 12px;">${categoria}</span>
      <p>${descripcion}</p>
    </article>`;

  document.getElementById(`data-${categoria}`).innerHTML = string + html;
}

function imprimirAviso(titulo, categoria, descripcion) {
  let html = document.getElementById("data-avisos").innerHTML;
  let string = `
    <article class="lh-sm">
      <h2 class="fs-6 m-0">${titulo}</h2>
      <span class="" style="font-size: 12px;">${categoria}</span>
      <p>${descripcion}</p>
    </article>
    <hr/>`;

  document.getElementById("data-avisos").innerHTML = string + html;
}

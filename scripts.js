let hoy = new Date();
let anio = hoy.getFullYear();
let mes = hoy.getMonth() + 1;
let dia = hoy.getDate();
let horas = hoy.getHours();
let minutos = hoy.getMinutes();
let segundos = hoy.getSeconds();

let date = `${dia}/${mes}/${anio} ${horas}:${minutos}:${segundos}`;

let fecha = (document.getElementById("fecha").innerText = date);

setInterval(() => {
  let hoy = new Date();
  let anio = hoy.getFullYear();
  let mes = hoy.getMonth() + 1;
  let dia = hoy.getDate();
  let horas = hoy.getHours();
  let minutos = hoy.getMinutes();
  let segundos = hoy.getSeconds();

  let date = `${dia}/${mes}/${anio} ${horas}:${minutos}:${segundos}`;

  let fecha = (document.getElementById("fecha").innerText = date);
}, 1000);

let noticias = [];

document
  .getElementById("formularioAgregarNoticia")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    let titulo = document.getElementById("titulo").value;
    let descripcion = document.getElementById("descripcion").value;

    noticias.push({ titulo, descripcion });
    imprimirNoticias(noticias);
  });

function imprimirNoticias(noticias) {
  let html = "";

  for (const noticia of noticias) {
    console.log({ noticia });
    html += `<article>
      <h2>
        ${noticia.titulo}
      </h2>
      <div>
        ${noticia.descripcion}
      </div>
    </article>`;
  }
  document.getElementById('grillaNoticiasGeneradas').innerHTML = html;
  document.getElementById('cantidadNoticias').innerText = `(${noticias.length} noticias)`;

  document.getElementById("titulo").value = "";
  document.getElementById("descripcion").value = "";
}

document.addEventListener("DOMContentLoaded", () => {
  const titulo = document.querySelector(".presentacion h1");
  animarTitulo(titulo);
  observarElementosAnimables();

  const botonMenu = document.getElementById("boton-menu");
  const navegacion = document.querySelector(".navegacion");

  botonMenu.addEventListener("click", () => {
    botonMenu.classList.toggle("abierto");
    navegacion.classList.toggle("activa");
  });
});

function animarTitulo(elemento) {
  const texto = "¡Hola! Soy Alex Claros";
  let i = 0;

  function escribir() {
    if (i <= texto.length) {
      elemento.textContent = texto.slice(0, i) + "|";
      i++;
      setTimeout(escribir, 100);
    } else {
      elemento.textContent = texto; // sin cursor al final
    }
  }

  escribir();
}

function observarElementosAnimables() {
  const elementos = document.querySelectorAll(".animable");

  const observador = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("animado");
          observador.unobserve(entrada.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  elementos.forEach((el) => observador.observe(el));
}

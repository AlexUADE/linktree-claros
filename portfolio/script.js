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

  const botonesProyecto = document.querySelectorAll(".abrir-modal");
  const modal = document.getElementById("modal-proyecto");
  const iframe = document.getElementById("iframe-proyecto");
  const cerrar = document.getElementById("cerrar-modal");

  botonesProyecto.forEach((boton) => {
    boton.addEventListener("click", () => {
      const url = boton.getAttribute("data-url");
      iframe.src = url;
      modal.classList.add("activo");
    });
  });

  cerrar.addEventListener("click", () => {
    modal.classList.remove("activo");
    iframe.src = "";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("activo");
      iframe.src = "";
    }
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
      elemento.textContent = texto;
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

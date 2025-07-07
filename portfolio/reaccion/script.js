document.addEventListener("DOMContentLoaded", () => {
  const zona = document.getElementById("zona");
  const resultado = document.getElementById("resultado");
  const iniciar = document.getElementById("iniciar");
  const reiniciar = document.getElementById("reiniciar");

  let esperando = false;
  let puedeClic = false;
  let terminado = false;
  let tiempoInicio;
  let timeout;

  function iniciarTest() {
    zona.textContent = "Espera que se ponga verde...";
    zona.classList.remove("zona-activa");
    zona.classList.add("zona-espera");
    resultado.textContent = "";
    terminado = false;
    puedeClic = false;
    esperando = true;

    iniciar.style.display = "none";
    reiniciar.style.display = "none";

    const demora = Math.floor(Math.random() * 3000) + 2000;

    timeout = setTimeout(() => {
      zona.textContent = "¡Clic ahora!";
      zona.classList.remove("zona-espera");
      zona.classList.add("zona-activa");
      tiempoInicio = performance.now();
      puedeClic = true;
    }, demora);
  }

  zona.addEventListener("click", () => {
    if (terminado) return;

    if (puedeClic) {
      const tiempoReaccion = Math.floor(performance.now() - tiempoInicio);
      resultado.textContent = `Tu tiempo de reacción fue: ${tiempoReaccion} ms`;
      puedeClic = false;
      terminado = true;
      reiniciar.style.display = "inline-block";
    } else if (esperando) {
      clearTimeout(timeout);
      zona.textContent = "¡Te apuraste!";
      resultado.textContent = "Hiciste clic antes de tiempo.";
      zona.classList.remove("zona-espera", "zona-activa");
      esperando = false;
      terminado = true;
      reiniciar.style.display = "inline-block";
    }
  });

  iniciar.addEventListener("click", iniciarTest);
  reiniciar.addEventListener("click", iniciarTest);
});

document.addEventListener("DOMContentLoaded", () => {
  const tablero = document.getElementById("tablero");
  const celdas = document.querySelectorAll(".celda");
  const mensaje = document.getElementById("mensaje");
  const turnoTexto = document.getElementById("turno");
  const reiniciar = document.getElementById("reiniciar");

  let jugadorActual = "X";
  let tableroEstado = Array(9).fill("");
  let juegoActivo = true;

  const combinacionesGanadoras = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ];

  function cambiarTurno() {
    jugadorActual = (jugadorActual === "X") ? "O" : "X";
    turnoTexto.textContent = `Turno de: ${jugadorActual}`;
    turnoTexto.style.color = jugadorActual === "X" ? "#ff5252" : "#00bfff";
  }

  function verificarResultado() {
    for (let combinacion of combinacionesGanadoras) {
      const [a, b, c] = combinacion;
      if (
        tableroEstado[a] &&
        tableroEstado[a] === tableroEstado[b] &&
        tableroEstado[a] === tableroEstado[c]
      ) {
        celdas[a].classList.add("ganadora");
        celdas[b].classList.add("ganadora");
        celdas[c].classList.add("ganadora");
        mensaje.textContent = `¡Ganó ${jugadorActual}!`;
        juegoActivo = false;
        return;
      }
    }

    if (!tableroEstado.includes("")) {
      mensaje.textContent = "¡Empate!";
      juegoActivo = false;
    }
  }

  function manejarClic(e) {
    const indice = e.target.dataset.indice;

    if (!juegoActivo || tableroEstado[indice] !== "") return;

    tableroEstado[indice] = jugadorActual;
    e.target.textContent = jugadorActual;

    if (jugadorActual === "X") {
      e.target.classList.add("x");
    } else {
      e.target.classList.add("o");
    }

    verificarResultado();

    if (juegoActivo) cambiarTurno();
  }

  function reiniciarJuego() {
    jugadorActual = "X";
    tableroEstado = Array(9).fill("");
    juegoActivo = true;
    mensaje.textContent = "";
    turnoTexto.textContent = `Turno de: ${jugadorActual}`;
    turnoTexto.style.color = "#ff5252";
    celdas.forEach(celda => {
      celda.textContent = "";
      celda.classList.remove("ganadora", "x", "o");
    });
  }

  celdas.forEach(celda => celda.addEventListener("click", manejarClic));
  reiniciar.addEventListener("click", reiniciarJuego);

  // Inicializar color del turno
  turnoTexto.style.color = "#ff5252";
});

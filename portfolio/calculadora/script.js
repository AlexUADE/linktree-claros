document.addEventListener("DOMContentLoaded", () => {
  const pantalla = document.getElementById("pantalla");
  const botones = document.querySelectorAll(".boton[data-valor]");
  const resultado = document.getElementById("resultado");
  const limpiar = document.getElementById("limpiar");
  const retroceso = document.getElementById("retroceso");

  // Agregar valor al presionar botones numéricos o operadores
  botones.forEach(boton => {
    boton.addEventListener("click", () => {
      pantalla.value += boton.dataset.valor;
    });
  });

  // Calcular resultado al presionar "="
  resultado.addEventListener("click", () => {
    try {
      pantalla.value = eval(pantalla.value);
    } catch (error) {
      pantalla.value = "Error";
    }
  });

  // Limpiar toda la pantalla
  limpiar.addEventListener("click", () => {
    pantalla.value = "";
  });

  // Borrar último carácter
  retroceso.addEventListener("click", () => {
    pantalla.value = pantalla.value.slice(0, -1);
  });
});

/* =====================================================================
   cita.js — Práctica 4
   Una sola tarea: mostrar en el <output> el valor del deslizador.

   VISTA PREVIA DEL MÓDULO IV. No tienes que entender este archivo
   todavía; en la Práctica 4 solo lo enlazas. El elemento <output> es
   HTML, pero su contenido solo cambia con JavaScript: el deslizador
   mueve un número y alguien tiene que escribirlo en la pantalla.
   ===================================================================== */
(function () {
  "use strict";

  // Las tres palabras que corresponden a cada posición del deslizador.
  var ETIQUETAS = ["", "Sin prisa", "Conviene pronto", "Urgente"];

  var rango = document.getElementById("urgencia");
  var salida = document.getElementById("urgencia-texto");

  // Si la página no tiene esos elementos, no hay nada que hacer.
  if (!rango || !salida) {
    return;
  }

  function mostrar() {
    var nivel = Number(rango.value);
    salida.textContent = nivel + " de 3 — " + ETIQUETAS[nivel];
  }

  // "input" se dispara mientras se arrastra; "change", al soltar.
  rango.addEventListener("input", mostrar);

  // Valor inicial, para que el <output> nunca aparezca vacío.
  mostrar();
})();

// componentes.js — Vista previa del Módulo IV (JavaScript).
// Actualiza la barra <progress> del plan de vacunación cada vez que
// se registra una dosis. En este módulo solo se observa; se estudia más adelante.

const barra = document.getElementById("plan-vacunas");
const texto = document.getElementById("plan-texto");
const btnDosis = document.getElementById("btn-dosis");
const btnReiniciar = document.getElementById("btn-reiniciar");

// Muestra el avance en texto y cambia los botones al completar el plan
function mostrarAvance() {
  texto.textContent = `${barra.value} de ${barra.max} dosis`;
  const completo = barra.value >= barra.max;
  btnDosis.hidden = completo;
  btnReiniciar.hidden = !completo;
}

btnDosis.addEventListener("click", () => {
  barra.value = barra.value + 1;
  mostrarAvance();
});

btnReiniciar.addEventListener("click", () => {
  barra.value = 0;
  mostrarAvance();
  btnDosis.focus(); // devuelve el foco al botón visible
});

function convertidorCelcius() {
  var grados = parseInt(document.getElementById("numero").value);
  var r = grados * (9 / 5) + 32;
  var resultado = document.getElementById("respuesta");
  resultado.innerHTML= r;
}

import validator from "./validator.js";
const cardNumber = document.getElementById("cardNumber");
const payButton = document.getElementById("payButton");
const resultado = document.getElementById("resultado");
const referencia=document.getElementById("referencia");
payButton.addEventListener("click", validacion);

function validacion() {
  const creditCardNumber = cardNumber.value;
  const patternComparison = /\D/.test(creditCardNumber);
  const referenciaNumber=referencia.value;
  if (referenciaNumber===""){
    alert("ingresa tu cedula  o ref de pago")
  }
  if (patternComparison === true) {
    alert("Ingresa solamente números");
  } else {
    if (cardNumber.value === "") {
      alert("Ingresa el número de tarjeta de crédito");
    } else {
      const lastFourDigits = validator.maskify(creditCardNumber);
      cardNumber.value = lastFourDigits;

      const validation = validator.isValid(creditCardNumber);
      if (validation === true) {
        resultado.innerHTML = "PAGO REALIZADO"
        alert("GRACIAS POR UTILIZAR NUESTRO SERVICIO");
      } else {
        resultado.innerHTML = "TARJETA INVALIDA"
        alert("INTRODUCE UN NUMERO DE TARJETA VALIDO PARA CONTINUAR CON TU PAGO");
      }
    }
  }
}
console.log(validator);

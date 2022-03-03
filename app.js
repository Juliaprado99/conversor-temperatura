const num1 = 32;
const num2 = 1.8;
let celsius;
let fah;

function calcF() {
  let celsius = document.getElementById("celsius").value;
  let resultF = celsius * num2 + num1;
  if (document.getElementById("celsius").value == "") {
    alert("Insira a temperatura.");
  } else {
    resultadoF.innerHTML = `${resultF.toFixed(2)} F°`;
  }
}

function calcC() {
  let fah = document.getElementById("fahren").value;
  let resultC = (fah - num1) / num2;
  if (document.getElementById("fahren").value == "") {
    alert("Insira a temperatura.");
  } else {resultadoC.innerHTML = `${resultC.toFixed(2)} C°`;
}}

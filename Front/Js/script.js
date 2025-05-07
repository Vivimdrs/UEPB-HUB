let formLogin = document.getElementById("formLogin");
let formCriar = document.getElementById("formCriar");
let btn = document.getElementById("btn");

function criarConta() {
  formLogin.style.left = "-450px";
  formCriar.style.left = "25px";
  btn.style.left = "108px";
}

function login() {
  formLogin.style.left = "25px";
  formCriar.style.left = "450px";
  btn.style.left = "0";
}

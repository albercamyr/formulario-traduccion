
  var title = document.getElementById('form-signin-heading');
  var email = document.getElementById('inputEmail');
  var password = document.getElementById('inputPassword');
  var remember = document.getElementsByTagName('span')[0];
  var button = document.getElementsByClassName('btn')[0];

function translate(){
  title.innerHTML = "Por favor inicia sesión";
  email.placeholder = "Correo Electrónico";
  password.placeholder = "Contraseña";
  remember.innerHTML = "Recordar datos";
  button.innerHTML =  "Iniciar sesión";
}
var datosCall = document.getElementById('impresion');
function traducir(){
datosCall.innerHTML = "El correo electrónico ingresado es: " + email.value + "La contraseña ingresada es: " + password.value
}
translate();

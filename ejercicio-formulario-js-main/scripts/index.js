const registerBtn = document.querySelector(".register-btn");

registerBtn.addEventListener("click", () => {
  // Escribe tu código aquí, siguiendo los siguientes lineamientos paso a paso:
  // 1. Obtenemos el valor ingresado en el input de email

  let email = document.querySelector("#email-input").value;

  // 2. Obtenemos los datos ingresados en el input de password

  let password = document.querySelector("#password-input").value;

  // 3. Obtenemos el valor del input radio

  let elementos = document.getElementsByName("legalAge");
  let opcionesRadio = [];
  let seleccionesRadio = [];
  elementos.forEach((elemento, i) => {
    opcionesRadio[i] = elemento.value;
    seleccionesRadio[i] = elemento.checked;
  })

  // 4. Obtenemos el valor del input checkbox

  let check = document.querySelector("#tyc-input");
  let opcionCheck = check.value;
  let seleccionCheck = check.checked;

  // 5 Validamos si el usuario es mayor de edad. Si no, mostramos
  // un mensaje de error: "Debes ser mayor de edad para registrarte en el sitio"
  
  let form = document.querySelector("form");
  function validarMayorEdad(arrayRadio) {
    if (arrayRadio[1] == true) {
      form.addEventListener("submit", e => {
        e.preventDefault();
      })
      alert("Debes ser mayor de edad para registrarte en el sitio")
      return false;
    } else {
      return true;
    }
  }

  // 6 Validamos si el usuario aceptó los términos y condiciones. Si no, mostramos
  // un mensaje de error: "Debes aceptar los TyCs para registrarte en el sitio"
  function aceptaTyC(check) {
    if (check == false) {
      form.addEventListener("submit", e => {
        e.preventDefault();
      })
      alert("Debes aceptar los TyCs para registrarte en el sitio")
      return false;
    } else {
      return true;
    }
  }

  // 7 Si todo esta correcto, mostramos por consola un objeto con la información
  // ingresada por el usuario.
  const datosPersona = {
    mail: email,
    contraseña: password,
  }
  function validarDatosCorrectos() {
    if (aceptaTyC(seleccionCheck) && validarMayorEdad(seleccionesRadio)) {
      console.log(datosPersona);
    }
  }
  validarDatosCorrectos();
});

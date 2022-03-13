const FORM__LOGIN = document.getElementById('formulario')
const INPUTS__FORM = document.querySelectorAll('.formulario__grupo-input input')
const expresiones = {
  usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  password: /^.{4,12}$/, // 4 a 12 digitos.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^\d{7,14}$/, // 7 a 14 numeros.
};

let campos = {
  usuario: false,
  nombre: false,
  password: false,
  correo: false,
  telefono: false
}

const VALIDATE__FORM = (e) => {
  switch (e.target.name) {
    case 'usuario':
      VALIDATE__FIELDS(expresiones.usuario, e.target, 'usuario')
      break

    case 'nombre':
      VALIDATE__FIELDS(expresiones.nombre, e.target, 'nombre')
      break

    case 'password':
      VALIDATE__FIELDS(expresiones.password, e.target, 'password')
      FIND__OUT__PASSWORD2()
      break

    case 'password2':
      FIND__OUT__PASSWORD2()
      break

    case 'correo':
      VALIDATE__FIELDS(expresiones.correo, e.target, 'correo')
      break

    case 'telefono':
      VALIDATE__FIELDS(expresiones.telefono, e.target, 'telefono')
      break
  }
}

const VALIDATE__FIELDS = (expresion, input, campo) => {
  if (expresion.test(input.value)) {
    document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto')
    document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto')
    document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle')
    document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle')
    document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo')
    campos[campo] = true
  } else {
    document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto')
    document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto')
    document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle')
    document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle')
    document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo')
    campos[campo] = false
  }
}

const FIND__OUT__PASSWORD2 = () => {
  let password = document.getElementById('password').value,
    password2 = document.getElementById('password2').value

  if (password !== password2) {
    document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto')
    document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto')
    document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle')
    document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle')
    document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo')
    campos['password'] = false
  } else {
    document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto')
    document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto')
    document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle')
    document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle')
    document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo')
    campos['password'] = true
  }
}

INPUTS__FORM.forEach((input) => {
  input.addEventListener('keyup', VALIDATE__FORM)
  input.addEventListener('blur', VALIDATE__FORM)
})

FORM__LOGIN.addEventListener('submit', (e) => {
  e.preventDefault();

  let terminos = document.getElementById('terminos').checked

  if (campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono && terminos) {
    FORM__LOGIN.reset();

    document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo')

    setTimeout(() => {
      document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo')
    }, 3000);

  } else {
    document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo')

    setTimeout(() => {
      document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo')
    }, 3000);
  }

  document.querySelectorAll('.formulario__grupo-correcto').forEach((icon) => {
    icon.classList.remove('formulario__grupo-correcto')
  })
})

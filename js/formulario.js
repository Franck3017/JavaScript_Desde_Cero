const form = document.getElementById("formulario")
const inputs = document.querySelectorAll('#formulario input')
const expresiones = {
  usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  password: /^.{4,12}$/, // 4 a 12 digitos.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^\d{7,14}$/, // 7 a 14 numeros.
};

const campos = {
  usuario: false,
  nombre: false,
  password: false,
  correo: false, efwef
  telefono: false
}

const VALIDAR__FORMULARIO = (e) => {
  switch (e.target.name) {
    case 'usuario':
      VALIDAR__CAMPOS(expresiones.usuario, e.target, 'usuario')
      break

    case 'nombre':
      VALIDAR__CAMPOS(expresiones.nombre, e.target, 'nombre')
      break

    case 'password':
      VALIDAR__CAMPOS(expresiones.password, e.target, 'password')
      VALIDAR__PASSWORD2()
      break

    case 'password2':
      VALIDAR__PASSWORD2()
      break

    case 'correo':
      VALIDAR__CAMPOS(expresiones.correo, e.target, 'correo')
      break

    case 'telefono':
      VALIDAR__CAMPOS(expresiones.telefono, e.target, 'telefono')
      break

  }
}

const VALIDAR__CAMPOS = (expresion, input, campo) => {
  if (expresion.test(input.value)) {
    document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto')
    document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto')
    document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle')
    document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle')
    document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo')
    campos[campo] = true
  } else {
    document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto')
    document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto')
    document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle')
    document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle')
    document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo')
    campos[campo] = false
  }
}

const VALIDAR__PASSWORD2 = () => {
  const I__PASSWORD1 = document.getElementById('password').value
  const I__PASSWORD2 = document.getElementById('password2').value

  if (I__PASSWORD1 !== I__PASSWORD2) {
    document.getElementById('grupo__password2').classList.add('formulario__grupo-incorrecto')
    document.getElementById('grupo__password2').classList.remove('formulario__grupo-correcto')
    document.querySelector('#grupo__password2 i').classList.add('fa-times-circle')
    document.querySelector('#grupo__password2 i').classList.remove('fa-check-circle')
    campos['password'] = false
  } else {
    document.getElementById('grupo__password2').classList.remove('formulario__grupo-incorrecto')
    document.getElementById('grupo__password2').classList.add('formulario__grupo-correcto')
    document.querySelector('#grupo__password2 i').classList.remove('fa-times-circle')
    document.querySelector('#grupo__password2 i').classList.add('fa-check-circle')
    campos['password'] = true
  }
}

// const TIME__OUT = ()=>{
//   setTimeout(()=>{

//   })
// }

inputs.forEach((input) => {
  input.addEventListener('keyup', VALIDAR__FORMULARIO)
  input.addEventListener('blur', VALIDAR__FORMULARIO)
})

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const TERM__CONDITIONS = document.getElementById('terminos').checked

  if (campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono && TERM__CONDITIONS) {
    form.reset()
    document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo')
    setTimeout(() => {
      document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo')
    }, 3000)

  } else {
    document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo')
    setTimeout(() => {
      document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo')
    }, 3000)
  }

  document.querySelectorAll('.formulario__grupo-correcto').forEach((icon) => {
    icon.classList.remove('formulario__grupo-correcto')
  })
});
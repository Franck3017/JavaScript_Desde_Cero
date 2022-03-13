// const form = document.getElementById("form"),
//   pruebaN = document.getElementById("prueba"),
//   reemplazar = document.getElementById("replace");

// console.log(getComputedStyle(reemplazar).fontSize);

// const createE = document.createElement("p");
// createE.id = "newElement-R";
// createE.style.color = "tomato";
// createE.textContent = "Elemento reemplazado exitosamente";

// pruebaN.replaceChild(createE, reemplazar);

// const clonar = createE.cloneNode(true);
// form.appendChild(clonar);

// const restruturar = (nombre, contraseña) => {
//   nombre = document.getElementById("username").value;
//   contraseña = document.getElementById("userpassword").value;

//   const createDiv = document.createElement("div");
//   createDiv.id = "users";
//   createDiv.innerHTML = `tu nombre: ${nombre} y tu password: ${contraseña}`;
//   form.appendChild(createDiv);
// };

// form.addEventListener("submit", (e, nombre, contraseña) => {
//   e.preventDefault();
//   restruturar(nombre, contraseña);
//   console.log("Se ha enviado el formulario");
// });

// ID.addEventListener("click", () => {
//   const create = document.createElement("p");
//   create.className = "elmentoC";
//   create.textContent = "Elemento creado con CreateElement";
//   create.style.color = "blue";
//   create.style.margin = "0";

//   ID.appendChild(create);
// });
// const obtener = (e) => {
//   e.target.style.color = "red";
// };

// ID.addEventListener("mouseenter", (e) => {
//   obtener(e);
// });

// IDdos.addEventListener("mouseleave", (e) => {
//   obtener(e);
// });

// const parent = document.getElementById("parent"),
//   child2 = document.getElementById("child2"),
//   childs = Array.from(child2.children),
//   grandson = childs.filter(
//     (childfrom) => childfrom.textContent.trim() === "Nieto 2"
//   )[0];
// child = Array.from(parent.children),
// childparent = child.filter((childfrom) => childfrom.children.length > 0)[0],
// grandson = Array.from(childparent.children),
// grandsons = grandson.filter(
//   (childfrom) => childfrom.textContent.trim() === "Nieto 2"
// )[0];

// const createP = document.createElement("p"),
//   insertID = document.getElementById("text-cont");
// createP.id = "text-cont";
// createP.textContent = "Soy un elemento creado";

// child2.insertBefore(createP, grandson);

// childparent.insertBefore(createP, grandsons);

// if (grandson && grandson.textContent === "Nieto 2") {
//   const createP = document.createElement("p"),
//     insertID = document.getElementById("text-cont");
//   createP.id = "text-cont";
//   createP.textContent = "Soy un elemento creado";

//   child.insertBefore(createP, grandson);
// }

/** Ejercicio de InsertBefore */
// math.floor() ->  Redondea un número HACIA ABAJO al entero más cercano

// const post = document.getElementById("post"),
//   clonePost = post.cloneNode(true),
//   paragraph = document.getElementById("paragraph"),
//   adPubli = document.createElement("h1");
// adPubli.id = "EDgrid";
// adPubli.textContent = "Bienvenidos a este curso de JS";

// post.after(clonePost);
// paragraph.replaceWith(adPubli);

// const post = document.getElementById("post"),
//   ad = document.querySelectorAll("p"),
//   adPubli = document.createElement("div");
// adPubli.id = "EDgrid";
// adPubli.textContent = "Bienvenidos a este curso de JS";
// const childs = (element) => {
//   let child = element.children,
//     l = child.length,
//     i = Math.floor(l / 2);
//   return child[i];
// };

// const checkElement = childs(post);

// post.insertBefore(adPubli, checkElement);

// const teachers = ["Frances", "Frances2", "Frances3", "Frances4"],
//   teacherList = document.createElement("ul"),
//   teacherListFragment = document.createDocumentFragment(),
//   teacherListBlock = document.getElementById("teacher-list");

// teacherListBlock.appendChild(teacherList);

// for (let teacher of teachers) {
//   const list = document.createElement("li");
//   teacherListFragment.appendChild(list);
//   list.textContent = teacher;
// }

// teacherList.appendChild(teacherListFragment);

// const title = document.querySelector("h1");

// // console.log(getBoundingClientRect(title));
// console.log(title.getBoundingClientRect().bottom);

// const imagen = document.getElementById("image");

// console.log(imagen.naturalWidth);
// console.log(imagen.naturalHeight);

// const teacher = document.getElementById("teacher-list");
// let userConfirm = prompt("lista").valueOf();

// switch (true) {
//   case userConfirm === "":
//     console.log("No haz escrito nada");
//     break;

//   case userConfirm === "p":
//     const CREATE__ELEMENT = document.createElement("p");
//     CREATE__ELEMENT.id = "element";
//     CREATE__ELEMENT.textContent = "Haz creado un parrafo";
//     teacher.appendChild(CREATE__ELEMENT);

//     setTimeout(() => {
//       CREATE__ELEMENT.remove();
//     }, 5000);
//     break;

//   case userConfirm === "ul":
//     const LIST__ARRAY = ["lista1", "lista2", "lista3"];
//     const CREATE__LIST = document.createElement("ul");
//     teacher.appendChild(CREATE__LIST);

//     for (let list of LIST__ARRAY) {
//       const li = document.createElement("li");
//       li.classList.add("item");
//       CREATE__LIST.appendChild(li);
//       li.textContent = list;
//     }
//     break;
//   default:
//     break;
// }

// const form = document.getElementById("exercise-tester-web");
// let url = document.querySelector("#url"),
//   sizewidth = document.querySelector("#sizewidth"),
//   sizeheight = document.querySelector("#sizeheight");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   if (url && sizewidth && sizeheight) {
//     (url = url.value),
//       (sizewidth = sizewidth.value),
//       (sizeheight = sizeheight.value);
//   }
//   window.open(url, url, `width= ${sizewidth}, height= ${sizeheight}`);
// });

// let id = 0;

// const ELEMENT__INTERVAL = setInterval(() => {
//   const element = document.createElement("h6");
//   element.classList.add(`titulo${id + 1}`);
//   element.style.margin = "0px";
//   element.textContent = `Este intervalo se detendra despues de ${
//     id + 1
//   } segundo`;
//   document.body.appendChild(element);
//   id++;

//   if (id === 5) {
//     clearInterval(ELEMENT__INTERVAL);
//   }
// }, 1000);

// setInterval(() => {
//   const clock = document.getElementById("clock");
//   if (clock) clock.textContent = new Date().toLocaleTimeString();
// }, 1000);

// const timeZone = new Date().getTimezoneOffset();
// console.log(timeZone);

// const persona = {
//   name: "Frances",
//   twitter: "@francesS",
// };

// const field = "twitter";
// const user = "name";

// console.log(persona[user]);
// console.log(persona[field]);

// const suma = (operando1, operando2) => {
//   console.log(operando1);
//   console.log(operando2);
//   return operando1 + operando2;
// };

// const op1 = 8;
// const op2 = 13;

// let profesor = "Frances",
//   alumno = profesor;

// profesor = "Alvaro";

// console.log(profesor);
// console.log(alumno);

// let juguetes = 10;
// let a = 1;

// while (juguetes > 0) {
//   console.log(`regalamos un juguete, Nos queda ${juguetes}`);
//   juguetes -= a;
// }

let friends = ["Frances", "Jhondy", "Sanchez", "Pareja"];
let numeros = [10, 456, 78, 12, 14, 36, 40];
let numero = [10, 150, 80, 60, 15, 8, 25];

const quick = friends.map((amigos) => `hola ${amigos}`);
console.log(friends);
console.log(quick);

const filtrar = numeros.filter((num) => num < 50);
console.log(filtrar);

let nuevoarray = [];
numero.map((recorre) => {
  if (recorre < 20) {
    nuevoarray.push(recorre);
  }
});

console.log(nuevoarray);

const someEdit = numeros.some((num) => num === 14);
console.log(someEdit);

let names = {
  nombre: "frances",
  nombre2: "FRANCES",
};

if (names.nombre === "frances") {
  console.log(names.nombre.toUpperCase());
} else {
  console.log("Dato erroneo");
}

const valor = new Date();
console.log(valor.getDate());
console.log(valor.getHours());
console.log(valor.getMinutes());
console.log(valor.getSeconds());

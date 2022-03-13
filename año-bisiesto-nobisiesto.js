// let year = Number(prompt("Escribe el año:"));
// let elemnt = [];

// if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) {
//   console.log(`El año ${year} es bisiesto`);
// } else {
//   console.log(`El año ${year} no es bisiesto`);
// }

let a = 10,
  b = 4;

if (typeof a === "number" && typeof b === "number") {
  if (a <= b && a === b) {
    console.log(`${a} no es mayor que ${b}`);
  } else {
    console.log(`${a} no es menor que ${b}`);
  }
} else {
  console.log("No son numericos");
}

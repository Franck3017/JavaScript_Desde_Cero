// comentario de una linea en JS
/* Comentario multilinea o de bloque */
/**
 * Tercer estilo para escribir un comentario.
 *
 */

/** Tipos de datos
 *
 * Number(numerico) : Enteros/decimales.
 * String(Cadena de texto o caracteres) : Se puede escribir con comillas '' o "" o ``(backsticks, dentro se puede escribir Variables, Operaciones,etc).
 * Boolean(boleano) : Tomato dos valores TRUE o FALSE.
 */

/** Tipos de datos - coleccion de datos

 * Los Objetos: Son colecciones de datos/información, que tienen un identificador(Numerico por posicion comenzando del 0) y un valor(Dato).

 * Array(arreglo) : Agrupar datos de diferentes tipos.
// Array: Syntaxis
["Jose", "Juan", "25", "true", "Antonio"]

// Objetos: Syntaxis
{   (IDEN)   (VALOR)
    nombre: "Frances",
    edad: typeof 25,
    pais: "Peru"
}

 * Null(nulo): Hace referencia a valores que no existen.
 */

/** Tipo de datos - No definido(Undefined)
 */

/**
 * Variables:
 * Son espacio reservados en memoria para poder guardar informacion/datos
 * en memoria y luego reutilizarlos o reasignarlos
 * VAR(palabra reservada): Declarar una variable.
 * LET(palabra reservada): Declarar una variable.
// Declaración
    let profesor
// Asignación
    profesor "Frances"

// Declaración y afirmacion
    let profesor = "Frances"

// Reasignación
    profesor = "Alvaro Felipe"
 */

/** Asignación por refencia
 * let profesor = "Alexys"
    let alumno = profesor

    profesor = "alvaro"
    alumno = "Frances"

    console.log(profesor)
    console.log(alumno)
 */

/** Constantes(Const)
 * Valores alamacenados en memoria dentro de una variable constante.
 * Que guarda? Datos que no van a cambiar.
 * No se le puede reasignar un valor a una Constante.
 * CONST(palabra reservada): Declarar una variable.
 */

/** Operadores Aritméticos
 * Nos permiten hacer operaciones matématicas
 * +(Suma)
 * -(Resta)
 * *(Multiplicación)
 * /(División)
 * %(residual)
 */

/** Operadores de Asignación
 * =(Asigna un valor a una variable).
 * +=(Asignación aritmetica).
 * **(Exponencial 5^3)
 */

//

/** Operadores de concatenación
 * ( + )
 */

/** Operadores de comparación
 * Compara uno o más datos.
 * == (Es igual, compara solo el valor aunque el tipo dato no se ha igual).
 * === (Es exactamente igual, comprara valor y tipo de dato).
 * != (Es diferente, verifica que los valores se han diferentes).
 * !== (Es exactamente diferente, verifica el valor y tipo de datos).
 */

/** Operadores de comparación Aritmeticos
 * Compara uno o más datos.
 * >(Mayor que).
 * < (Menor que).
 * >= (Mayor o igual que).
 * <= (Menor o igual que).
 */

/** Operadores lógicos
 * Sirve para concatenar dos validaciones.
 * && (AND - Se tiene que cumplir ambas AFIRMACIONES para que de verdadero).
 * || (OR - Almenos una de las AFIRMACIONES se ha de cumplir para que se ha verdadero).
 */

/** Operadores unarios
 * ++ (Se incrementa el Valor X en uno)
 * -- (Se disminuye el Valor X en uno)
 */

/** Operadores ternarios
 * Los operadores ternarios necesitan tres pasos:
 * Comparación - Valor que se asigna a la variable Y si la comparación es verdadera o falsa.
 * ( ? - Esto es verdad) Operador de pregunta.
 * ( : - Y si no es verdad).
 */

/** TYPE COERCION
 * 
// NaN => Not a number(No es un numero)

 */

/** Condicionales
 * IF (Si es).
 * ELSE (Sino es).
 * ELSE IF (Sino si)
// Syntaxis
    if(condición){
        Acción
    } else if () {
        Anidación de condicionales    
    }else {
        
    }

// Ejercicio: Invitación a una fiesta
 * Si eres mayor de edad y menor de 65 años, puedes venir a la fiesta.
 * Sino por favor quedate en casa.
 */

/** Condicionales multiples
 * SWITCH (condición) {
 *  case "caso":
 *      acción
 *      break (Evita que se sigan realizando validaciones siguientes
 *              y salga del Switch)
 *  case "caso":
 *      acción
 *      break
 *  default: 
 *      (valor por defecto)
 * }
 * 
// Ejercicio : Que personaje de DragonBall eres.
 * Si eres fuerte y comelon, eres Goku.
 * Si eres veloz y egoista, eres vegueta.
 * Si eres pequeño y devil, eres krilin.
 * Si no eres ninguno, eres una sabandija.
 */

/** Ciclos/Bucles/Loops de codigo
 * Hace referencia a bloques de codigo, que se van a ejecutar varias veces.
 * FOR(palabra reservada para escribir un ciclo).
 * 
// for (valor de inicialización; condición; incremento/decrementar de valor){
    bloque de codigo
}
 * for(let i = 10; i < 10; i++){
    console.log(i)
}

 * .length => Devuelve la longitud/cantidad de caracteres que tienes.
 */

// Primera vuelta => i vale 0, i es menor que 10?? Si => console.log(i), i se incrementa y ahora vale 1.
// i vale 1, i es menor que 10?? Si => console.log(i), i se incrementa y ahora vale 2.
// i vale 9, i es menor que 10?? Si => console.log(i), i se incrementa y ahora vale 10.
// i vale 10, i es menor que 10?? No, termina el programa.

// Ejercicio:
// Dado un texto deseamos imprimir su contenido letra por letra
// Ejemplo: "Frances"
// F R A N C E S
// let texto = 'frances'
// let valor = 0

// for (let i = texto.length; i > 0; i--) {
//     console.log(texto[i - 1])
// }

// for (let i = 10; i > 0; i--){
//     console.log(i)
// }

/** Ciclo While
 * mientras! (siga siendo verdad).
 * 
 * 
 * 
// Ejercicio: regalar juguetes
 */

// let juguetes = 10;
// let a = 3
// let b = juguetes-a

// while (juguetes > 0) {
//     console.log(`regalamos un juguete, Nos queda ${juguetes}`)
//     juguetes-=a
// }

/** Funciones - Parametros
 * function (Para declarar una función)
 * Las variable/s creadas dentro de una función, solo son utilizadas dentro
 * de esa función, si se utiliza afuera de la función dara error.
 */

// Declaración de la función Saludar
// function saludar (nombre) {

//     if (typeof nombre === 'string') {
//             console.log(`Hola ${nombre} muy buenos dias`)/* Bloque de codigo */
//     } else {
//         console.log('Escribe un nombre correcto')
//     }
// }

// Llamar a la función
// saludar(256)

/** Funciones - Valores de retorno
 * La sentencia RETURN finaliza la ejecución de la función
 * devuelve un valor de esa función
 * Y el codigo que esta despues no se ejecuta.
 */

// function obtenernombrecompleto(nombre, apellidos) {
//   let nombrecompleto = `${nombre} ${apellidos}`
//   return nombrecompleto
//   return `${nombre} ${apellidos}`;
// }

// console.log(obtenernombrecompleto("frances", "sanchez p."));

// const lock = "buenas tardes";

// const hola = function () {
//   return function (nombre) {
//     nombre = "Frances";
//     console.log(`Hola ${lock}, ${nombre}`);
//   };
// };

// const mifuncion = hola();

// mifuncion();

/** Funciones de Tipo Flecha == Arrow Function
 * =>
 *
 */

// const sumar = (a, b) => a + b;
// console.log(sumar(5, 10));

/**
 * Arrays
 */

let friends = ["Frances", "Jhondy", "Sanchez", "Pareja"];
console.log(friends);
//Agregar elementos al Array con .PUSH

let dato = friends.push(false);

console.log(dato);
console.log(friends);

//Quitar elementos de mi Array con .POP

let quick = friends.pop();

console.log(quick);
console.log(friends);

//Partir nuestro array en 2 arrays

let partir = friends.slice(0, 2);

console.log(partir);
console.log(friends);

// Recorrer mi array con un ciclo FOR

// for (let i = 0; i < friends.length; i++) {
//   console.log(friends[i]);
// }

//foreach(Para cada elemento)
//Necesita como párametro una función.

let data = friends.forEach((amigo) => console.log(`hola ${amigo}`));

console.log(friends);

//Foreach vs Map
//.MAP()

let datos = friends.map((nombre) => `Hola ${nombre}`);
console.log(datos);

/**
 * Arrays - ciclos
 */
//.FILTER()

let numero = [10, 150, 80, 60, 15, 8, 25];

let datas = numero.filter((num) => num < 20);
console.log(datas);
// let nuevoarray = [];

// numero.map((recorre) => {
//   if (recorre > 20) {
//     nuevoarray.push(recorre);
//   }
// });

// console.log(nuevoarray);

/**
 * Find(encontrar) ==> Para encontrar el primer dato que cumpla con la validación
            que nosotros pongamos
 * Includes(INCLUYE) ==> Devuelve un tipo de dato booleano TRUE O FALSE
 * Some ==> Comprobar si almenos algun elemento de mi
            array cumple con una condición.
 * Every ==> Validar si todos los elementos cumplen con una condición
 */

datas = numero.find((num) => num % 2 === 1);
console.log(datas);

datas = numero.includes(3);
console.log(datas);

datas = numero.some((num) => num > 30);
console.log(datas);

datas = numero.every((num) => typeof num === "number");
console.log(datas);

/**
 * Strings
 * .split ==> Dividir mi texto y se pararlos por ""
 * .search ==>
 * .to
 */

let texto = "Frances Sánchez Pareja";

dato = texto.split("");

console.log(dato);

dato = texto.toUpperCase();

console.log(dato);

/**
 * Objetos
 *
 */

let alumnos = {
  nombre: "frances",
  apellido: "Sánchez",
  edad: 25,
  ocupacion: "developer froendt",
};

// console.log(alumnos.edad);
// console.log(alumnos["edad"]);
datos = Object.values(alumnos); //Devuelve solo los valores de mi Objeto.
console.log(datos);

datos = Object.keys(alumnos); //Devuelve todas las llaves(atributos) de mi objeto
console.log(datos);

/**
 * math ==> Nos permite calcular valores matematicos.
 * date ==> Nos permite valores de fecha
 * Math.random() ==> Devuelve un numero random entre 0 y 1
 * Math.PI ==> Devuelve el valor de PI.
 * Math.max(valores) ==> Devuelve el valor más alto.
 * Match.min(Valores) ==> Devuelve el valor más bajo/minimo.
 *
 */

const valor = new Date();
console.log(valor.getDate());
console.log(valor.getMinutes());

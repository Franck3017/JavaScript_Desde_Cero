/**
 * DOM (Document Objecto Model) - Modelo de objectos del documento
 * El HTML es un documento.
 * Cada etiqueta HTML es un objeto,
    Y un objeto puede tener HIJOS.
 * Document - Variable global que representa un objeto que contiene
    todo lo que se ve en la PAGINA WEB.
 * El DOM, no es parte de la especidficación de Javascript.
 * El DOM, es una web API.
 */

// Metodos del DOCUMENT.
// document.styleSheets -> Muestra las hojas de estilos que tenemos vinculados.
// document.scripts -> Muestras los scripts que tenemos vinculados.
// document.doctype ->
// document.documentElement ->
/* document.head -> Devuelve lo que hay en la etiqueta HEAD
    document.charset -> 
    document.title ->  Devuelve lo que hay en la etiqueta TITLE.
*/
/* document.body -> 
    document.links -> Devueleve todos los links.
    document.images -> Devuelve todas las imagenes.
    document.getSelection() -> Permite obtener la selección
                toString() -> Capturar la selección de un usuario
*/
// document.forms -> Devuelve los formularios.

/**
 * NODOS
 * Son las etiquetas HTML, los atributos de
 * las etiquetas, textos, comentarios tambien son nodos, etc.
 */

// Toda etiqueta HTML es un elemento.
// Tipos de Nodos
// Si devuelve 1 es un elemento.
// Si devuelve 2 es un atributo.
// Si devuelve 3 es un texto.
// Si devuelve 8 es un comentario.

/**
 * Seleccionar nodos
 * Con ID:
 * document.getElementByID(parametro) -> Obtener su elemento x su ID.
 * Con Selectores CSS:
 * document.querySelector(parametro) o element.querySelector() ->
 * document.querySelectorAll(parametro) o element.querySelectorAll () ->
 */

// const title = document.getElementById("title");

// title.style.backgroundColor = "#fff";
// const listitems = document.querySelectorAll("ul li"),
//   list = document.getElementById("list");

// console.log(listitems[0]);
// console.log(list.querySelectorAll("li"));

/**
 * Colecciones
 * Diferencias entre Nodelist - HTMLCollection
 * los nodos son atributos,textos,etc.
 * HTMLCollection son una lista elementos(etiquetas).
 */

// Array.from -> forma recomendada para convertir un nodelist
// en un array.

// const lists = Array.from(document.querySelectorAll("li"));

// lists.map((el) => (el.style.backgroundColor = "yellow"));

// let lists = document.querySelectorAll("li");

// for (let list of lists) {
//   if (list.textContent.trim().toUpperCase() === "DOCUMENT2") {
//     list.remove();
//   }
// }

/**
 * Atributos
 * getAttribute(parametroID) -> Obtener un atributo de mi etiqueta
 * setAttribute(parametroID , parametrovalorID) -> Setear/definir un atributo "".
 * classlist -> Devuelve la lista de clases.
    .add(parametro, parametro,etc) -> añadir clases.
    .remove() -> eleminar una clase.
    .toggle() -> añade o quita la clase según el caso.
 * id ->
 * value -> se utiliza más para los imputs de los forms
 */

// let title2 = document.querySelector("h1");

// title2.setAttribute("id", "title");
// title2.classList.add("titulo2", "title3");
// title2.classList.remove("title3");
// title2.classList.toggle("titulo2");
// title2.innerHTML = "Hola soy tu mundo<h5>holajaja</h5>";

// console.log(title2);
// console.log(title2.textContent);
// console.log(title2.innerHTML);
// console.log(title2.outerHTML);

/**
 * Contenido (leer y escribir)
 * Es lo que contiene un elemento.
 * textContent -> Devuelve contenido de los elementos.
 * innerHTML -> Devuelve el html del elemento.
 * outerHTML -> Devuelve todo el html con todo y elemento
 */

/**
 * Crear elementos
 * document.createElement() -> Crear elementos.
 * document.createDocumentFragment() -> Nos permite guardar elementos en memoria antes de que se pinte en la WEB,
 * appenChild() -> Insertar un elemento en algun lugar del DOM,
 * como último hijo de otro.
 */

// const teacher = document.getElementById("teacher");
// const profesor = document.createElement("p");

// profesor.textContent = "Frances Sánchez Pareja";
// profesor.classList.add("teacher");

// if (teacher && teacher.querySelector("span")) {
//   teacher.querySelector("span").appendChild(profesor);
// }
// console.log(profesor.textContent);

/**
 * Eventos
 * Un evento es algo que ocurre en la pagina.
 * Todos los eventos que comiencen con ON... son eventos.
 * onEvent
 * addEventListener()
 */

// title.addEventListener('eventname', 'eventhandler')
// Cada ves que requiera información del objeto se pone un Parametro
// en la función.
// (e.target), devuelve el elemento del DOM, donde se origino el evento.

// const title = document.querySelector("h1"),
//   button = document.querySelector("button");

// const events = (e) => console.log(e.target.textContent);

// title.addEventListener("click", (e) => {
//   events(e);
// });

// button.addEventListener("click", (e) => {
//   events(e);
// });

/**
 * Eventos de Mouse
 * click -> Captura el click.
 * dblclick -> Detecta click doble.
 * mouseenter -> Cuando el mouse entra en el area de un elemento
 * mouseleave -> Cuando sale del area del elemento.
 * contextmenu -> Captura el click derecho
 * mousedown -> Cuando haces click y dejas presionado el click
 * mouseup -> Cuando haces click y sueltas el click.
 * mousemove -> Cuando el mouse se mueve dentro de un elemento.
 * e.preventDefault() -> Previene la acción par que no se realice.
 * pagex - pagey -> Son las coordenadas de donde ocurrio el evento,
 * de mouse.
 */

// const createmenu = (e) => {
//   const menu = document.createElement("div");
//   const prevmenu = document.getElementById("context-menu");
//   menu.id = "context-menu";
//   menu.textContent = "Soy un menuContextual";

//   if (prevmenu) document.body.removeChild(prevmenu);
//   document.body.appendChild(menu);

//   menu.style.padding = "1em";
//   menu.style.backgroundColor = "#eee";
//   menu.style.position = "fixed";
//   menu.style.top = `${e.pageY}px`;
//   menu.style.left = `${e.pageX}px`;
// };

// title.addEventListener("contextmenu", (e) => {
//   createmenu(e);
//   e.preventDefault();
// });

/**
 * Eventos de teclado
 * keydown -> Cuando presionas una tecla.
 * keyup -> Cuando sueltas una tecla
 * keypress -> Cuando dejas presionado una tecla.
 */

// const input = document.querySelector("input");

// addEventListener("keydown", (e) => {
//   if (e.key === "a" && e.ctrlKey === true) {
//     e.preventDefault();
//     alert("CTRL A");
//   }
// });

// const ball = document.querySelector("div");
// let x = 0,
//   y = 0;

// addEventListener("keyup", (e) => {
//   const moveBall = () =>
//     (ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`);

//   const move = (direction) => {
//     if (direction === "up") {
//       y--;
//       moveBall();
//     } else if (direction === "down") {
//       y++;
//       moveBall();
//     } else if (direction === "left") {
//       x--;
//       moveBall();
//     } else {
//       x++;
//       moveBall();
//     }
//   };

//   switch (e.key) {
//     case "ArrowUp":
//       move("up");
//       break;

//     case "ArrowDown":
//       move("down");
//       break;

//     case "ArrowLeft":
//       move("left");
//       break;

//     case "ArrowRight":
//       move();
//       break;

//     default:
//       break;
//   }
// });

/**
 * Eventos de formulario
 * submit -> Se ejecuta, cuando el formulario se envia.
 * change -> Cuando un input cambia de valor.
 * focus -> Cuando haces click en un input.
 * blur -> Cuando sales del focus o del elemento.
 * reset -> Cuando se resetea el formulario.
 */

// const form = document.getElementById("form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let createDiv = document.createElement("p");
//   let textC = document.getElementById("text-cont");
//   createDiv.id = "text-cont";
//   createDiv.textContent = "Se ha enviado el formulario";
//   createDiv.style.color = "tomato";
//   createDiv.style.fontSize = "20px";
//   document.body.appendChild(createDiv);
// });

/**
 * Eventos del DOM
 * DOMContentloaded -> Es un evento que ocurre cuando carga todo el DOM.
 * Windows -> Objeto global de JS.
 */

/**
 * Evento del navegador
 * load -> Ocurre cuando carga toda la pagina.
 * scroll -> Ocurre cuando haces scroll.
 * resize -> Ocurre cuando se redimensiona la pantalla.
 */

/**
 * Evento Multimedia
 * play -> Se ejecuta el video.
 * pause -> Se pausa el video.
 */

/**
 * Propagación de eventos
 * Delegación de eventos
 * Cada vez que ocurre un evento, este ocurre en el elemento más profundo del DOM, pero se propagan hacia afuera, el termino utilizado para esto es bubble.
 * Esto significa que cada vez que estás dentro de un elemento hijo de otro elemento, al mismo tiempo estás entrando en ambos elementos.
 * e.stopPropagation -> Detiene la propagación del evento.
 */

/**
 * Delegación de eventos
 * indexOf -> Retorna el primer indice en el que se puede encontrar dado en el array.
 *
 */

// const gallery = document.getElementById("gallery");

// gallery.addEventListener("click", (e) => {
//   const img__items = Array.from(gallery.querySelectorAll("img")),
//     img = img__items.indexOf(e.target);
//   console.log(`Hicistes click en la imagen ${img + 1}`);
// });

/**
 * Recorrer y transformar el DOM
 * DOM traversing -> Recorrer el DOM
  Hijos:
      childNodes -> Devuelve todos los nodos hijos.
      children -> Devuelve solo elementos hijos.
      firstChild -> Devuelve un nodo(podria ser un elemento o texto).
      firstElementChild -> Devuelve el primer elemento(hijo).
      lastChild -> Devuelve el ultimo nodo(hijo).
      lastElementChild -> Devuelve el ultimo elemento(hijo).
      hasChildNodes () -> Metodo que devuelve TRUE, si el elemento seleccionado,
                          contiene hijos
  Hermanos:
      nextSibling -> Devuelve el siguiente nodo hermano.
      nextElementSibling -> Devuelve el siguiente elemento hermano.
      previousSibling -> Devuelve el anterior nodo hermano.
      previousNextSibling -> Devuelve el anterior elemento hermano.
  Padre: 
      parentNode -> Devuelve el nodo que se ha padre.
      parentElement -> Devuelve el elemento padre.
 */

/**
 * Insertar Elementos
 * appendChild() -> Inserta un elemento al final de otro.
 * insertBefore(newElement.nextnodeExistente) -> Inserta un elemento antes
 * del otro nodo ya existenete.
 * insertAdjacent(beforebegin, afterbegin, beforeend, afterend) -> Coges un elemento e insertas un hijo(element), indicandoles, las posiciones.
   Metodos: 
 * insertAdjacentElement(posicióm,el).
 * insertAdjacentHTML(posición, html).
 * insertAdjacentText(posición, text).

   Posiciones:
 * beforebegin(hermano anterior) -> Se inserta antes de que comience el elemento.
 * afterbegin(Primer hijo) -> Se inserta, despues de que comienze el elemento.
 * beforeend(Ultimo hijo) -> Se inserta, antes de que acabe su ultimo hijo.
 * afterend(Hermano siguiente) -> Se inserta, despues de que acabe su ultimo hijo.
 */

/**
 * Remplazar hijos
 * replacechild(newchild, oldchild) -> Remplazar un hijo x uno nuevo.
 */

/**
 * Metods de Jquery
 * before(hermano anterior) -> .
 * after(hermano siguiente) -> .
 * prepend (primer hijo) -> .
 * append (último hijo) -> .
 * child(hijo).replaceWith (newchild) -> .
 */

/**
 * Clonar
 * cloneNode(true) -> Sacar una copia de un elemento y TRUE para capturar tambien los hijos de este elemento.
 * remove () -> Eliminar ese elemento.
 */

/**
 * Template (HTML)
 * template -> Etiqueta para crear plantillas en HTML.
 */

/**
 * CSSOM
 * style -> Inserta estilos css a un elemento del HTML.
 * matchMedia('(min-width: valor) and '(orientation: valor)') -> Insertar mediaquerys.
 * getComputedStyle() -> Se obtine todos los estilos calculados de un elemento.
 * getBoundingClientRect() -> Devuelve la posición del elemento, coordenadas, tamaños, posiciones.
   - naturalWidth() -> Devuelve el tamaño(width) original de la imagen
   - naturalHeight() -> Devuelve el tamaño(height) ....... 
 */

/**
 * JS En el navegador
 * objeto window -> Es el objeto de más alto nivel en JS en el navegador.
 * Todos los objeto decienden de WINDOW.
   Objetos:
   - console -> Inprime en consola información.
   - navigator -> Devuelve información sobre el navegador.
   - location -> Devuelve información de la URL que se esta actualmente.
   - history -> Devuelve información del historial del navegador.
   - screen -> Devuelve el alto y el ancho del navegador.

   Metodos: 
   - open('url', 'name', 'propertis') -> Permite abrir una nueva instancia del navegador.
   - close() -> Solo funciona en ventanas que se han abierto con OPEN().
   - alert(message) -> Manda un mensaje
   - confirm(message) -> Muestra un modal de confirmación y devuelve TRUE o FALSE.
   - prompt(message) -> Mandar un mensaje y guarda la información en una variable
 */

/**
 *Objeto Location - Devuelve información de la URL.
  Propiedades:
    - href -> Devuelve la URL actucal, se puede reemplazar para cambiar la paginna actual.
    - host -> Devuelve el dominio.
    - hostname -> Devuelve el dominio+puerto.
    - port -> Devuelve el puerto.
    - protocol ->  Devuelve el protocolo (http o https).
    - origin -> Devuelve el protocolo + dominio.
    - hash -> devuevel el #.
    - pathname ->  Devuelve la ruta interna luego del dominio.

  Metodos:
    - reload() -> Recarga la pagina.
    - assign(url) -> Cambia la pagina actual.
    - replace(url) -> Cambian la pagina actual sin guardar en HISTORY del NAVEGATOR.
 * 
 */

/**
 * Objeto History - Contiene el historial de nevegación de la pestaña actual.
  Metodos: 
      - back() -> Te manda atrás.
      - forward() -> Te manda adelante.
      - go(position) -> Devuelve la posición que se indique, siendo
                        -1 back y 1 fordward.
 */

/**
 * Objeto navigator
 * detectar navegador.
 * detectar caracteristicas
  CSS
      @supports -> condicional para saber si el navegador soporta X propiedad.
  JAVSCRIPT
      operador in
  MODENIZR -> Libreria que permite detectar si un navegador tiene
  caracteristicas que se usa, mandar sms al usuario o validar.
 */

/**
 * Timers
 * setTimeout(callback,ms) -> Ejecuta acciones despues de un tiempo.
      Ejecuta lo que hay en el CALLBACK, despues de cierta cantida de MiliS
 * setInterval(callback,ms) -> Ejecuta acciones que se repitan periodicamente.
 * clearInterval(interval) -> Eliminar el inervalo.
 */

/**
 * DATE - objeto que obtine las fechas del S.O.
  Instancia:
      - new Date() ->
      - new Date(Year,month,day) ->
      - new Date(Year,Month, Day, Hour, Mints, Seconds) ->
      - new Date(string) ->
  Metodos:
      - getFullYear() -> Devuelve el año de 0 a 11.
      - getMinutes() -> Devuelve los minutos.
      - getSeconds() -> Devuelve los segundos.
      - getDate() -> Devuelve el dia actual del mes de 0 a 30.
      - getDay() -> Devuelve el dia de la semana de 0 a 6.
      - getMonth() -> Devuelve los meses.
      - getTime() -> Devuelve los milisegundos desde el 1 de enero de 1970. 
      - getTimeZoneOffset() -> Devuelve la diferencia de tu zona horaria al Meridiano de Greenwich que es la referencia de zona horaria para todos los países.
 */

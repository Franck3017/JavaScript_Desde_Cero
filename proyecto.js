const user = {
  nombre: "Frances",
  edad: "25",
  deuda: 0,
};

let pedido = [];
let costoG = 0;

const mostrarmenu = () => {
  console.log("ID - MENÚ - COSTO");
  for (let producto of productos) {
    console.log(`${producto.id} - ${producto.menu1} - ${producto.costo}`);
  }
};

const pedirmenu = (pedir) => {
  if (!pedir) return "Ingre un menú valido";

  const findproducts = productos.find((producto) => producto.id === pedir);
  if (!findproducts) return `El producto no existe`;

  pedido.push(findproducts);
  console.log("El producto ha sido agregado a su menú");
  return vermenu();
};

const vermenu = () => pedido;

const calcularCosto = () => {
  let costo = 0;
  for (producto of pedido) {
    costo += producto.costo;
  }
  costoG = costo;
  return costoG;
};

const finalizarpedido = () => {
  calcularCosto();
  user.deuda = costoG;

  pedido = [];
  costoG = 0;

  return `${user.nombre}, debes pagar ${user.deuda} euros`;
};

const PAGAR__PEDIDO = (montoEntregado) => {
  // if (montoEntregado < user.deuda) {
  //   return "No te alcanza el dinero para pagar";
  // } else if (montoEntregado === user.deuda) {
  //   user.deuda = costoG;
  //   return "Tu pago ha sido exitoso";
  // } else {
  //   user.deuda = costoG;
  //   return `Tu pago ha sido exitoso y tu cambio es de ${
  //     montoEntregado - user.deuda
  //   }`;
  // }

  if (typeof montoEntregado === "number") {
    switch (true) {
      case montoEntregado < user.deuda:
        return `${user.nombre}, el monto registrado es inferior, necesita ${
          user.deuda - montoEntregado
        } para finalizar su pedido`;

      case montoEntregado === user.deuda:
        console.log(`${user.nombre}, su pedido ha sido exitoso`);
        return (user.deuda = 0);

      default:
        console.log(
          `${user.nombre}, su pedido ha sido exito y su cambio es de ${
            montoEntregado - user.deuda
          }`
        );
        return (user.deuda = 0);
    }
  } else {
    return "Debes ingresar un valor numerico";
  }
};

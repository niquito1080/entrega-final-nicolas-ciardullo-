const carrito = [];
let continuar = true;

const cursos = [
  { codigo: 1, nombre: "desarrollo web", precio: 299 },
  { codigo: 2, nombre: "javascript", precio: 320 },
  { codigo: 3, nombre: "react", precio: 320 },
  { codigo: 4, nombre: "desarrollo ux/ui", precio: 310 },
];

const mensajeInicial = "ingresa el codigo del curso a tomar:  \n";
("a) desarrollo web \n");
("b) javascript \n");
("c) react \n");
("d) desarrollo ux/ui \n");

function iniciarConsulta() {
  let resultado = prompt(mensajeInicial).toLowerCase().trim();
  if (
    resultado !== "a" &&
    resultado !== "b" &&
    resultado !== "c" &&
    resultado !== "d"
  ) {
    alert("🪓 debes ingresar un codigo valido.");
  } else {
    switch (resultado) {
      case "a":
        alert("este curso cuesta $299");
        break;
      case "b":
        alert("este curso cuesta $320");
        break;
      case "c":
        alert("este curso cuesta $320");
        break;
      case "d":
        alert("este curso cuesta $310");
        break;
      default:
        console.error("no se entiende lo escrito");
    }
  }
}
function preguntarPrecios() {
  while (continuar) {
    iniciarConsulta();
    continuar = confirm("queres saber de otro curso ?");
  }
  alert("gracias por tu consulta 😊");
}

function BuscarCursos(codigo) {
  let resultado = cursos.find((curso) => curso.codigo === parseInt(codigo));
  return resultado;
}

function FinalizarCompra() {
  if (carrito.length === 0) {
    console.warn("el carrito esta vacio");
    return;
  }
  const shopping = new Compra(carrito);
  alert("el costo total es de: $ " + shopping.obtenerSubtotal());
  let respuesta = confirm("¿deseas confirmar su compra ?");
  if (respuesta === true) {
    alert("confirmamos tu pago de: $ " + shopping.obtenerSubtotal());
    carrito.length = 0;
  }
}
function verCarrito() {
  console.table(carrito);
}
function comprar() {
  let codigo = prompt(mensajeInicial);
  if (!parseInt(codigo)) {
    alert("error en el codigo");
    let respuesta = confirm("¿queres intentar de nuevo?");
    if (respuesta === true) {
      comprar();
    }
    return;
  }
  let cursoElegido = BuscarCursos(parseInt(codigo));
  if (cursoElegido === undefined) {
    alert("error en el codigo");
    let respuesta = confirm("¿queres intentar de nuevo?");
    if (respuesta === true) {
      comprar();
    }
    return;
  }
  alert(cursoElegido.nombre + "" + "- ha sido agregado al carrito");
  carrito.push(cursoElegido);

  let respuesta = confirm("¿desea comprar otro curso ?");
  if (respuesta === true) {
    comprar();
  } else {
    FinalizarCompra();
  }
}

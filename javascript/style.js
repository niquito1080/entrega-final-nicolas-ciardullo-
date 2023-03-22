/* variables y/o constantes funciones 
- estructurar la lógica condicionales (if - else - switch)
 utilizar un ciclo (for - while - dowhile)
  prompt - confirm - alert console log - warn - error 
  Texto / String = listado de prendas Prompt() = el usuario elige una prenda dde el prompt > 
  buscamos lo que ingresó en una lista (condicional) alert()
   le respondemos con el precio/costo/importe confirm?
    preguntamos ¿deseas conocer algún otro precio? TRUE => 
    seguimos en el ciclo while FALSE =>
     gracias x tu interés. chauuuu! */
let continuar = true;

const mensajeInicial =
  "ingresa el codigo del curso a tomar:  \n" +
  "a) desarrollo web \n" +
  "b) javascript \n" +
  "c) react \n" +
  "d) desarrollo ux/ui \n";

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

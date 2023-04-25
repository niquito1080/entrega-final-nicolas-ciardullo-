const container = document.getElementById("container");

const inputSearch = document.getElementById("input#inputSearch");



function filtrarProductos(valor) 
let resultado = cursos.filter(curso => curso.nombre.toLowerCase().includes)
   if(resultado.length > 0) {
     cargarProductos(resultado)
    
   }

function retornoCardHTML(curso) {
  return ` <div class="card">
    
    <div class="card-name">${curso.nombre}</div>
    <div class="card-price">${curso.precio}</div>
    <div class="card-button">
      <button
        class="button button-outline button-add"
        id="${curso.codigo}"
        title="click para agregar al carrito"
      ></button>
    </div>`;
}

function cargarProductos(array) {
  array.forEach((element) => {
    container.innerHTML += retornoCardHTML(curso);
  });
  activarBotonesEnBotones ()
}

inputSearch.addEventListener("search", (e) => {
    filtrarProductos(e.target.value)
});

function activarBotonesEnBotones () {
    const botones = document.querySelectorAll("button")
    for ( let boton of botones ){
        boton.addEventListener ("click", ()=> {
        let resultado =    cursos.find(curso => curso.codigo === parseint(boton.codigo))
        carrito.push(resultado)
        console.table(resultado)

        })
    }
}
    


function guardarCarrito (){
localStorage.setItem("carritoCursos", JSON.stringify(carrito))
}

function recuperarCarrito(){
    const carritoTemporal = JSON.parse(localStorage.getItem("carritoCursos")) || []
    carrito.push(...carritoTemporal)

}


cargarProductos(cursos);
recuperarCarrito
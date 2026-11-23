//variables
//queryselector porque solo hay una carrito
//ya que estamos declarando varables podemos omitir la palabra "conts" poner un coma y declararlas en una misma linea de codigo 
/* const carrito = document.querySelector('#carrito'),
      listaCuros = document.querySelector('#lista-cursos'); */

const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarrito = document.querySelector('vaciar-carrito'); 
const listaCuros = document.querySelector('#lista-cursos');

cargarEventListeners();// Es para que no querden en nuestra ventana golbal
//VAMMOS A REGISTRAR TODOS NUESTROS EVEN LISTENER
function cargarEventListeners(){
     
}
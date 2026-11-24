//variables "Recomendacion agregar todas las funciones en la parte superior y todas las funciones en la parte de abajo"
//queryselector porque solo hay una carrito
//ya que estamos declarando varables podemos omitir la palabra "conts" poner un coma y declararlas en una misma linea de codigo 
/* const carrito = document.querySelector('#carrito'),
      listaCuros = document.querySelector('#lista-cursos'); */

const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarrito = document.querySelector('vaciar-carrito'); 
const listaCursos = document.querySelector('#lista-cursos');

cargarEventListeners();// Es para que no querden en nuestra ventana golbal
//VAMMOS A REGISTRAR TODOS NUESTROS EVEN LISTENER
function cargarEventListeners(){
     //paraa que esta funcion no nos quede muy grande vamos a crear diferentes funciones
     listaCursos.addEventListener('click', agregarCurso);//Cuando agregar un curso precionado "Agregar al carrito"
}


//Funciones 
function agregarCurso (e){
    // console.log('Presionando en cursos'); primero verificamos que estemos dando click en el boton
    //console.log(e.target.classList);despues pondremos en practo lo de el bubgling para que se ejecute esta funcion solo cuando se precione este boton pero primero listaremos las clases para saver bien a cual le estamos dando click
    //una vez que estamos seguros a que clase tenemos que refernciar aremos una condicion para que se ejecute solo si es la clase en este caso la clase es agregar-carrito
    e.preventDefault()// esta es una forma de debugear porque recuerda que estamos previniendo que valla a relizar la accion al darle click en este caso va acia arriba
    if (e.target.classList.contains ('agregar-carrito')) {
        // console.log('Agregando al carrito...'); en este punto bamos a cambiar para saver que curso estamos agregando (ya estamos conectando con agregar carrito pero nesecitamos saver que curso estamos agregando)
                // console.log(e.target );Con esto sabemos que elemento se le da clic y es un btn al inpeccionarlo sabemos que tenemos que hacer un trabersig acia arriba para leer el contenido para generar el HTML 
                //Acceder a un elento arriba utilizaremos "parentElement por cada nivel que queramos subir en este caso don dos nibeles para acceder a la cart"
                const cursoSeleccionado = e.target.parentElement.parentElement;//Declaramos el valor que queremos seleccionar
                // console.log(e.target.parentElement.parentElement); //"parentElement por cada nivel que queramos subir
                lerrDatosCurso(cursoSeleccionado);
    }
}
// Lee el contenido del HTML al que dimos click y extrae la informacion del curso
function lerrDatosCurso(curso){//El nombre del parametro que pasamos puede ser el que nosotros queramos
    // Pasamos el curso Seleccionado 
    console.log(curso);
    //Crear un opjeto con el contenido del curso actual "son los detalles del curso seleccionado"
    const infoCurso = {
        img:curso.querySelector('img').src,
        titulo:curso.querySelector('h4').textContent,
        precioDescuento: curso.querySelector( '.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad:1 

    }
    
    console.log(infoCurso);
    
}
 
 
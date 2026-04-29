//Modificando contenido con js
const encabezado = document.querySelector('.contenido-hero h1').textContent;

console.log(encabezado);

//si queremos encadenar este tipo de selectores podemos aplicar elgo que se conose como el channing


/* //resaltar el texto
//CSS - visibility: hidden; 
console.log(encabezado.innerText);//si tiene en el CSS una caracteristica de texto invisible no la va encontrar
console.log(encabezado.innerText);//apasar de querer ocultar el texto lo va encontrar
console.log(encabezado.innerHTML);//traera el HTML completo
 */
//Algo de lo que podemos hacer es modificarlo de la siguiete formar primero el selector y despues lo que queremos motrar
/* document.querySelector('.contenido-hero h1').textContent = 'Nuevo heading';//esto modificara lo que se muestra */
/* //Dependiendo del estilo de programacion que tenga se puede hacer directo o en variables
const nuevaHeading = 'Nuevo Heading';
document.querySelector('.contenido-hero h1').textContent = nuevaHeading; */

 //Modificando imagenes

 const imagen = document.querySelector('.card img');
 //para poder acceder a los atributos de la imagen es por medio de un SRC porque es como si fuera un objeto 
 imagen.src = 'img/hacer2.jpg';
 //console.log(imagen);
 
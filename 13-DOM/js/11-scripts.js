//Ejemplo avanzado del DOM
//Bamos a ahacer que el footer aparesca con darle clik al boton de idioma y moneda
//Como primer paso seleccionaremos los elementos que actuaran el btnFlotante y footer
const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');
//Como segundo paso para poder lograr esto lo aremos atraves de un evento
//que vasicamente le estamos disiendo atento si alguien da clic a este boton aras algo 
//Este funsiona con argumentos entonses primero le pasaremos es el evento de un click el segundo argumento es
//es una funsion declarada o no
//"NOTA: UNA FUNSION NO DECLARADA SON AQUELLAS QUE NO TIENEN NOMBRE PERO SE DECLARAN COMO UN ARROW FUCTION "funcion anonima "
// " ()  => { } " "
/* 
EJEMPLO CON FUNCION NO DECLARADA
btnFlotante.addEventListener('click' , () => {
 console.log('Diste clic en el botón');
 
}); 

EJEMPLO CON FINSION SEPARADA
*/

btnFlotante.addEventListener('click' ,mostrarOcultarFooter);


function mostrarOcultarFooter(){
    //una ves dado el clic la clase de foter camvia a activo pero 
    //tambien nesecitamos que cuando se de clic de nuevo se quiete
    //entonses una forma de verificar si esta activo es con un if y 
    //un metodo que se llama contains este nos va a permitir verificar 
    //si un elemto tiene o no una clase  
    //ahora como ultimo paso bamos agregar estas mismas clases al btn flotante para indicar que esta activo
    if (footer.classList.contains('activo')) {
        footer.classList.remove('activo');
        //si bien podemos dejar esto asi tambien podemos utilizar "this" que si recordamos sirbe para acceder a las propiedades de un mismo objeto
        //btnFlotante.classList.remove('activo');
        //pero tabien cuando this da click y ejecuta una función hace referencia a lo que mando llamar a esa funsion 
        //podemos cambiar el texto del bton gracias a la propiedad texconten y que es un bton
        this.classList.remove('activo');
        this.textContent = 'Idioma y Moneda'
    }else {
        footer.classList.add('activo')
        btnFlotante.classList.add('activo');
        //podemos cambiar el texto del bton gracias a la propiedad texconten y que es un bton
        this.textContent = 'X Cerrar'
    }

}
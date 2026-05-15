//Ejemplo avanzado del DOM
//Bamos a ahacer que el footer aparesca con darle clik al boton de idioma y moneda
//Como primer paso seleccionaremos los elementos que actuaran el btnFlotante y footer
const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');
//Como segundo paso para poder lograr esto lo aremos atraves de un evento
//que vasicamente le estamos disiendo atento si alguien da clic a este boton aras algo 
//Este funsiona con argumentos entonses primero le pasaremos es el evento de un click el segundo argumento es
//es una funsion declarada o no
//"NOTA: UNA FUNSION NO DECLARADA SON AQUELLAS QUE NO TIENEN NOMBRE PERO SE DECLARAN COMO UN ARROW FUCTION  
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

    if (footer.classList.contains('activo')) {
        footer.classList.remove('activo');
    }else {

        footer.classList.add('activo')
    }

}
//Cambiando el CSS

/* const encabezado = document.querySelector('h1');
console.log(encabezado.style);
 */
//La diferencia entre los estilos CSS y los Estilos en JS es que 
//en CSS las propiedades que lleban 2 palabras ban separadas por 
//un guion ejemplo " background-color " y en JS estas ban sin guion y 
//la segunda palabra comienza con mayuscula ejemplo " backgroundColor "

//Esta forma es correcta para camios sencillos pero alargara el codigo
/* encabezado.style.backgroundColor = 'red';
encabezado.style.fontFamily = 'Arial';
encabezado.style.textTransform = 'uppercase'; */

//es mejor agregar o quitar clasess

const card = document.querySelector('.card');
//Agregar una clase
card.classList.add('nueva-clase' , 'segunda-clase');
//Remover una clase
card.classList.remove('card');
console.log(card.classList);


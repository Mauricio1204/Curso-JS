/* //Recorriendo el DOM "Traversing DOM"

lo que quiere decir es ir encontrando la raiz del elemto que quieras editar

const navegacion = document.querySelector('.navegacion');

console.log(navegacion);
console.log(navegacion.childNodes); //childNodes va a traer todos los elementos y los espacios en blanco lo considera elementos
//una form mas limpia es "childen" este solo traera elmentos que son html puro:
console.log(navegacion.children);
//sie queremos entrar a un elmento en especifico lo podemos hacer con una estrucctura parecida a un arreglo
console.log(navegacion.children[0].nodeName);
console.log(navegacion.children[0].nodeType); 
*/
//Cambiando el texto de una cart
const card = document.querySelector('.card');
card.children[1].children[1].textContent = 'Nuevo heading desde traversing the dom'
console.log(card.children[1].children[1].textContent);

card.children[0].src = 'img/hacer3.jpg'
console.log(card.children[0]);  


//Traversing the hijo a padre 
//console.log(card.parentNode); //Si bien esta forma esta bien recuerda que este toma en consideracion los espacios en blanco es mejor utilizar
//Podemos colocar los "parentElement" que nececitemos siempre y cuando exista un padre al cual ir 
//console.log(card.parentElement); //El resultado es el mismo pero este trae puros elemtos html 

//tembien podemos seleccionar los hermanos de un mismo nivel 
//Aligual que con el "parentElement" podemos colocar los que nesecitemos para seleccionar el elemto que nesecitemos
console.log(card);
console.log(card.nextElementSibling);
console.log(card.nextElementSibling.nextElementSibling);//este es para abanar 
//Regresar a un elmento seleccionado 


const ultimoCard = document.querySelector('.card:nth-child(4)');//seleccionamos el ulti mo elemento 

console.log(ultimoCard.previousElementSibling);//la propiedad "previousElementSibling" nos permite seleccionar un elemento antes del ultimo




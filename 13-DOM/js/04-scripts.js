//Esta es la nueva forma de sellecionar elementos
//a pesar de que aya mas de un elemento selector solo te va a retornar maximo un elemento
const card = document.querySelector('.card');
console.log(card);
//Se pueden tener selectores especificos como los CSS 

const info = document.querySelector('.premium .info');

console.log(info);
//seleccionar el segundo card
//nth-child(2) es un selector de css que funsiona en js y podemos hacerlo tan espesificos como lo 
//nesecitemos el numero que se le pasa entre los parentecis es el numero del elemto que queramos seleccionar
const segundocard = document.querySelector('section.hospedaje .card:nth-child(2)');

console.log(segundocard);

//queryselector tambien nos permite sellecionar ids con la misma sintaxis que CSS es decir con un simbolo de "#"
//Seleccionar formulario
// al igual que el getElementorbyId solo ba a seleccionar el primer elemto con ese id si hay dos solo tomara el primero
const formulario = document.querySelector('#formulario');
console.log(formulario);

// Seleccionar elemtos HTML
const navegacion =  document.querySelector('nav');

console.log(navegacion);






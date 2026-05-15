//Creamos html con js
//para crear elementos existen varias formar esa es una createElement y pasamos la etiqueta que queramos crear 
const enlace = document.createElement('A');

//Agregado el texto
enlace.textContent = 'Nuevo Enlace';
//Agregando href
enlace.href = '/nuevo-enlace-';
//Agregando target y podemos agregar los atributos que sean nesesarios segun sea el caso
enlace.target = '_blacnk'  ;
console.log(enlace);
//tambien podemos gragregar atributos al antojo ejemplo
enlace.setAttribute('data-enlace','nuevo-enlace');
//tambien podemos agregar clses 
enlace.classList.add('alguna-clase');
//como conclusion lo mismo que tengas en el html puro lo pddemos agregar utilizardo el createElement 

//agregar las funsiones y eventos tambien esta valido entonses seria de la siguiente manera
enlace.onclick = miFuncion;

//una vez creado el elmento lo ideal seria mostrarlo entonses seleccionaremos la navegacion 
const navegacion = document.querySelector('.navegacion');
//Agregamos el nuevo componente hijo a donde queremos mostrarlo eso lo asemos atraves de appendChild  al utilizar esta forma lo colocara al finar de todos los elemetos que tengan el pare
navegacion.appendChild(enlace); 
//si quisieramos tener el con trol de donde lo agregariamos utilizariamos insertBefore que utiliza 2 argumentos 1 es el elemto que queremos agregar
//2 el indice de donde queremos mostrarlo ejemplo de esta forma seleccionamos la navegacion y damos el indice de la posicion 
// que queramos que tome el elemto que agregaremos ejemplo:
navegacion.insertBefore(enlace,navegacion.children[1]); 


function miFuncion(){
    alert('Diste clik')
}

//Ejercisio más complejo crear un cart de manera dinamica

const parrafo1 = document.createElement('P');
parrafo1.textContent = 'consierto';
parrafo1.classList.add('categoria','consierto');

const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Consierto de Rock';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('P');
parrafo3.textContent = '$800 por Persona';
parrafo3.classList.add('precio')
 
console.log(parrafo1);

//Crear div con la clase de info
const info = document.createElement('div');
info.classList.add('info');
//agregamos los parrafos al div
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

console.log(info);

//creamos la imagen 
const imagen= document.createElement('img');
imagen.src = 'img/hacer2.jpg';
console.log(imagen);

//crear Card
const card = document.createElement('div');
card.classList.add('card');

//asignamos la imagen
card.appendChild(imagen);
//assignamos la info
card.appendChild(info);
//comprobamos la vista en consola
console.log(card);

//Insetamos en el HTML
const contenedor = document.querySelector('.hacer .contenedor-cards'); 

contenedor.appendChild(card);//Insertamos sin un lugar espesifico
contenedor.insertBefore(card,contenedor.children[0]);//Insertamos con un lugar espesifico



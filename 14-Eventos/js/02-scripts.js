//Eventos con el mause 
const nav = document.querySelector('.navegacion');

//registrias un evento
// tipos de eventos 
// El evento click es uno de los eventos màs comunes que tendremos
// El evento mousenter vasicamente es para capturar los movimientos solo con pasar el maus sobre el
// Otro venteo que tenemos es el mouseout que es vasicamente saliendo de 
// Podemos meter estas caracteristicas con otras para el diseño  ejemplo que cuento se pase el mause sobre se colore de negro y cuando salgamos de transparente
// otro evento muy sumilar a click es el mousedown que quiere decir cuando precionas     
// El evento mouseup es cuando das click pero sueltas el mause 
// El doble click se determmina dblclik 
 nav.addEventListener('mouseenter', () => {
    console.log('Entrando a la navegacion');
    nav.style.backgroundColor = 'white'
})
nav.addEventListener('mouseout', () => {
    console.log('Saliendo de la navegacion');    
    
    nav.style.backgroundColor = 'transparent'
})
nav.addEventListener('mouseout', () => {
    
    console.log('Saliendo de la navegacion');    
    nav.style.backgroundColor = 'transparent'
    
}) 
nav.addEventListener('mouseup', () => {
    console.log('Saliendo de la navegacion');    
    nav.style.backgroundColor = 'transparent'
})
nav.addEventListener('dblclick', () => {

    console.log('Doble click');    
    
    nav.style.backgroundColor = 'transparent'
})
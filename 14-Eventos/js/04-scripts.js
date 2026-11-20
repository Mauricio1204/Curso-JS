// evento en formulario
const formulario = document.querySelector('#formulario');

// Esto es una funcion aninima  pero tambioen podemos utlizar una fucion
formulario.addEventListener('submit',(e) => {
    e.preventDefault(); /* El  preventDefault con esto preevenimos la accion que realizaria ese elemto ecitar que el navegador aga lo que aria normalmente */
    
    console.log('Buscando...');
    console.log(e.target.method); /* con este comando savemos que tipo de evento se esta realizando ya sea get post  */
    console.log(e.target.action);/* con esto savemos asia donde iria la accion */
}); 

/* Declaracion de funcion */

function validarFormulario(){
    e.preventDefault(); /* El  preventDefault con esto preevenimos la accion que realizaria ese elemto ecitar que el navegador aga lo que aria normalmente */
    
    console.log('Buscando...');
    console.log(e.target.method); /* con este comando savemos que tipo de evento se esta realizando ya sea get post  */
    console.log(e.target.action);/* con esto savemos asia donde iria la accion */
}

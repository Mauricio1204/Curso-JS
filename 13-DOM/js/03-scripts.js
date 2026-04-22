// solo se puede utilizar un adi con un nombre una vez por documento
// getElementByid
// va a imprimer el primero que encuentre de arriba a abajo
const formulario = document.getElementById('formulario');
console.log(formulario);

//En caso de que intentemos seleccionar algo que no existe nos regresara un null
const noExiste = document.getElementById('no-existe');
console.log(noExiste);
// Es una buena practica que solo exista un solo id por documento



// segundo metodo para el bubgling Tecnica "Delegation"
// de esta forma frenamos atraves de las clases la propagacion del bubbling
const cardDiv = document.querySelector('.card');

cardDiv.addEventListener('click', e => {
    if (e.target.classList.contains('titulo')) {
        console.log('Diste click en titulo');
    }
    if (e.target.classList.contains('precio')){
            console.log('Diste Click en precio');
    }
    if(e.target.classList.contains('card')){
    
        console.log('Diste clic en card');
    }
    })
//que es el Event Bubbling?
// Es cuando presionas en un evento pero el evento se propaga en otros lugares que no deven de ser

//esto quiere decir que aunque demos click en un envento hijo tambien el evento padre lo registrara 

const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo  = document.querySelector('.titulo');


// como ejemplo si damos click en infoDiv  
cardDiv.addEventListener('click', ()=> {
    console.log('click en card');
})
infoDiv.addEventListener('click', ()=> {
    
    console.log('click en info');
})
titulo.addEventListener('click', ()=> {
    console.log('click en titulo');
})
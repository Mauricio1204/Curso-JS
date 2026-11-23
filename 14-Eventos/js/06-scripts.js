//que es el Event Bubbling?
// Es cuando presionas en un evento pero el evento se propaga en otros lugares que no deven de ser

//esto quiere decir que aunque demos click en un envento hijo tambien el evento padre lo registrara 

const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo  = document.querySelector('.titulo');


// como ejemplo si damos click en infoDiv los eventos de cardDiv y titulo tambien se ejecutan ya que 
// estan dentro de la misma cartad que infoDiv entoses a esto nos referimos cuando decimos que el 
// bubbling infiere a los demas eventos 
cardDiv.addEventListener('click', (e)=> {
    //pero si queremos detenerlo es decir que no se ejecuten otros eventos apesar que compartan un mismo padre 
    // el stopPropagation es la manera en que detenemos este bubbling
    e.stopPropagation();
    console.log('click en card');
})
infoDiv.addEventListener('click', (e)=> {
    e.stopPropagation();
    console.log('click en info');
})
titulo.addEventListener('click', (e)=> {
    e.stopPropagation();
    console.log('click en titulo');
})
//Switch 
const metodoPago ='cheque'



switch (metodoPago){
    case 'efectivo':
            console.log(`pagastecon con ${metodoPago}`);
        break;
    case 'cheque':
            console.log(`pagastecon con ${metodoPago}`);
        break;
        case 'tarjeta':
            console.log(`pagastecon con ${metodoPago}`);
        break;
        default: 
        console.log('Aun no has seleccionado un metodo de pago o metodo de pago no soportado');
        break;
    

}
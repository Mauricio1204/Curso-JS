    // estructura diferente de "!=" y "==" igual a 
    const puntaje = 1000;
    const puntaje2 = "1000"

    console.log(typeof puntaje);
    console.log(typeof puntaje2);

    if (puntaje != 1100){
            console.log('si es igual ...')
        }else{
            console.log('no no es igual el puntaje');
            }

    if (puntaje == "1000"){//operador no estricto
            console.log('si es igual ...')
        }

    if (puntaje === "1000"){//operador estricto
            console.log('si es igual ...')
        }else{
            console.log('No es igual')
        }
//Operador estictricto para determinar si es diferente 
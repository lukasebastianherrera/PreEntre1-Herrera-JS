let comando;
while (comando != "salir"){
    comando = prompt("Seleccione la acción que desee realizar:\n\n-salir \n-Comprar un producto\n-Sacar turno en pami");

        switch(comando) { 

            case "Sacar turno en pami": 
            for (let i = 1; i <= 4; i++) {
                let nombre = prompt("Ingrese su nombre porfavor")
                alert( nombre +" Su turno es " + i );
            }
            break;
            case "Comprar un producto":
                alert("Usted tiene que comprar una bolsa de tomaco que cuesta $200");
                let tomaco = prompt("Ingrese con cuanto va a pagar");
                if (tomaco < 200) {
                    let total = 200 - tomaco;
                    alert("Le falto pagar " + "$" + total);
                    break; 
                } if (tomaco >= 200){
                    alert ("Usted compro tomaco");
                    window.location = "https://biociencias.es/wp-content/uploads/2021/09/Tomaco.jpg"
                    comando = salir;
                }
                break; 
            default:
            let comandoErroneo = true;
            //Quizas si es un poco molesto tener que cerrar la página para escribir bien el comando pero le agrega emoción
            while (comandoErroneo) {
                alert("ERROR CRITICO ESCRIBIO MAL EL COMANDO \n-CERRAR Y ABRIR DENUEVO LA PAGINA O TODO EXPLOTARA");
            }
            break;
        }
    }
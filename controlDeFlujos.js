function viajar (destino) {
    if (destino === "Brasil") {
        console.log ("gire a la IZQUIERDA");
        } else if (destino === "Argentina") {
            console.log ("Gire a la DERECHA");
        } else {
            console.log ("NOS PERDIMOS");
        }
}

viajar ("PRUEBA");

function puedeManejar(edad) {
    if(edad >= 18) {
            console.log( true );
    } 
    console.log( false );
}

puedeManejar(17);
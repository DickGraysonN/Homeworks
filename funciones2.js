function cuidadoConElConsoleLog (nombre) {
    console.log (nombre);
}

function otraFuncion () {
    return (
        "el nombre retornado por la funcion ‛cuidadoConElConsoleLog‵ es: " +
        cuidadoConElConsoleLog ("camilo")
    );
};

//ejemplos de clase
//Función: sumaTres
var sumaTres = (x) => {
    return x + 3;
  }
  
  //Función: cuidadoConElConsoleLog
  function cuidadoConElConsoleLog(nombre) {
      console.log(nombre);
      return nombre;
    }
  //Precedencia de valores
  var a = 1;
  var b = 2;
  var c = a = b;
  console.log (c); 
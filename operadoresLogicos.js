//OPERADOR DE "&"
function mayorYmenorYpar (num) {
    if (num > 5 && num < 10 && num % 2===0) console.log (true);
    else console.log (false);
};

mayorYmenorYpar (7);
mayorYmenorYpar (8);

//OPERADOR DE "||""
function operadorOr (str) {
    if (str === "Henry" || str.length<2) console.log(true);
    else console.log(false);
}

operadorOr ("Henry");
operadorOr ("JavaScript");
operadorOr ("H");

//OPERADOR "NOR O NEGACIÓN !"
function negacion (permiso){
    if (permiso !== true) console.log("tiene permiso");
};

negacion (false);

//CONDICIONES COMPLEJAS
function condicionCompleja (num){
    if(num >9 && num % 2 === 0 || num === 3) console.log (true);
    else console.log (false);
};

condicionCompleja (10);
condicionCompleja (3);
condicionCompleja (6);
condicionCompleja (5);
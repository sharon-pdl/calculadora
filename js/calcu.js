var pantalla = document.getElementsByClassName("pantalla");
const teclas = document.getElementsByName("tecla");
const operadores = document.getElementsByName("operador");
const igual = document.getElementById("igual");
const borrar = document.getElementById("borrar");
console.log(teclas);
console.log(operadores);
console.log(igual);
console.log(borrar);

var nActual = "";
var nAnterior = "";
var operanda =  "";
var resultado = "";


teclas.forEach(function(tecla) {
    tecla.addEventListener("click", function() {
        if(tecla.innerText === ',' && nActual.includes(',')) return;
        nActual+=tecla.innerText;
        pantalla[0].textContent = nActual;
    });
});

borrar.addEventListener("click",function() {
    pantalla[0].textContent = "";
    nActual = "";
    nAnterior = "";
    operanda = "";

});
/*
realizarCalculo(){
    var actualFloat = parseFloat(nActual);
    var anteriorFloat = parseFloat (nAnterior);
    if(isNaN(actualFloat) || isNaN(anteriorFloat)) return;
    switch (operadores) {
        case "suma":
            resultado = actualFloat + anteriorFloat;
            break;
        case "resta":
            resultado = actualFloat - anteriorFloat;
            break;
        case "multiplicacion":
            resultado = actualFloat * anteriorFloat;
            break;
        case "division":
            resultado = actualFloat / anteriorFloat;
            break;
        default:
            return;

        }
    
        nActual = resultado
        operadores = undefined
        nAnterior= ""
    };

*/


igual.addEventListener("click", function() {
        console.log("operacion ", operanda);
        switch(operanda){
            case "+":
                resultado = parseFloat(nAnterior) + parseFloat(nActual);
                console.log(resultado);
                break;

            case "-":
                resultado = parseFloat(nAnterior) - parseFloat(nActual);
                console.log(resultado);
                break;

            case "*":
                resultado = parseFloat(nAnterior) * parseFloat(nActual);
                console.log(resultado);
                break;

            case "/":
                resultado = parseFloat(nAnterior) / parseFloat(nActual);
                console.log(resultado);
                break;
                
                default:
                    console.log("Error de sintaxis");
                    
                };
                pantalla[0].textContent = resultado
});
            
            
            
operadores.forEach(function(operador){
    operador.addEventListener("click", function(){
        operanda = operador.innerText;
        nAnterior = nActual;
        nActual = "";
        // pantalla[0].textContent = "";
    });
});

/*
        switch(operador.innerText){
            case "+":
                operacion = "suma";
                break;
            case "-":
                operacion = "resta";
                break;
            case "/":
                operacion = "division";
                break;
            case "*":
                operacion = "multiplicacion";
                break;
            default:
                console.log("Error de Sintaxis");
                break;
        }

    });

});

*/
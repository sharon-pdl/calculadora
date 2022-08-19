var pantalla = document.getElementsByClassName("pantalla");
const teclas = document.getElementsByName("tecla");
const operadores = document.getElementsByName("operador");
const borrar = document.getElementById("borrar");
const igual = document.getElementById("igual");
var operacion = "";
var numero_actual="";
var numero_anterior="";


teclas.forEach(function(tecla) {
    tecla.addEventListener("click", function() {
        numero_actual+= tecla.innerText;
        pantalla[0].textContent = numero_actual;
    });
});

/*el evento es algo que hace el usuario*/

borrar.addEventListener("click",function(){
    pantalla[0].textContent = "";

});

igual.forEach function(igual)
    igual.addEventListener("click", function() {
        switch(igual.innerText){}

});

operadores.forEach(function(operador) {
    operador.addEventListener("click", function() {
        switch(operador.innerText){
            case "+":
                operacion = "suma";
                break;
            case "-":
                operacion = "resta";
                break;
            case "*":
                operacion = "multiplicacion";
                break;
            case "/":
                operacion = "division";
                break;
            default:
                console.log ("operacion invalida");
                break;
        }

        numero_anterior = numero_actual;
        numero_actual = "";

    });
});

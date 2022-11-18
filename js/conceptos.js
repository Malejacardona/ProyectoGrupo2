// Declarar variables en JavaScript
// Para hacer comentarios en parrafos se utiliza /* para abrir y */ para cerrar
/*
    1. var nombrevariable = valor;
       var futbolista = "delantero";// vble de tipo texto
    2. let edad = 15;// vble de tipo entero
    3. const iva = 0.19;// vble o constante de tipo flotante    
*/

var futbolista1 = "delantero";
var futbolista2 = "arquero1";
var futbolista3 = "arquerorival";
var resultado = "gol";

// let edad = 15;
// const iva = 0.19;
// var apagado = false;

// datos de salida
document.write("saque del arquero: " + futbolista2 + "<br/>");
document.write("recepción del delantero: " + futbolista1 + "<br/>");
document.write("el delantero dispara: " + futbolista1 + "<br/>");
document.write("el arquero rival no puede hacer nada: " + futbolista3 + " " + resultado + "<br/>");

// mostrar otro dato de salida es con console.log();
console.log(resultado);

//operaciones básicas con dos números
// datos de entrada con prompt
let num1 = 0;
let num2 = 0;
num1 = prompt("Digita el valor del número 1");
num2 = prompt("Digita el valor del número 2");
// let suma=0;
// let resta=0;
// let multi=0;
// let division=0;

// procesos o calculos u operaciones
suma = num1 + num2;
resta = num1 - num2;
multi = num1 * num2;
division = num1 / num2;

// datos de salida
document.write("La suma: " + suma + "<br/>");
document.write("La resta: " + resta + "<br/>");
document.write("La multiplicación: " + multi + "<br/>");
document.write("La división: " + division + "<br/>");

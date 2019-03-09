var acumulado="";
var resultado=0;
var suma = 0;
var resta = 0;
var multi = 1;
var div = 1;
var operaciones= [suma,resta,multi,div];

function nueve(){
    document.getElementById(btn9);
    acumulado = acumulado + "9";
    document.getElementById("lblOperacion").innerHTML = "Operacion: " + acumulado;
    document.getElementById("lblPantalla").innerHTML = 9;
 }

 function ocho(){
    document.getElementById(btn8);
    acumulado = acumulado + "8";
    document.getElementById("lblOperacion").innerHTML = "Operacion: " + acumulado;
    document.getElementById("lblPantalla").innerHTML = 8;
    //document.getElementById("lblPantalla").innerHTML = acumulado;
    //document.getElementById("lblOperacion").innerHTML = acumulado;
 }
 
 function siete(){
    document.getElementById(btn7);
    acumulado = acumulado + "7";
    document.getElementById("lblOperacion").innerHTML = "Operacion: " + acumulado;
    document.getElementById("lblPantalla").innerHTML = 7;
 }

 function seis(){
    document.getElementById(btn6);
    acumulado = acumulado + "6";
    document.getElementById("lblOperacion").innerHTML = "Operacion: " + acumulado;
    document.getElementById("lblPantalla").innerHTML = 6;
 }

 function cinco(){
    document.getElementById(btn5);
    acumulado = acumulado + "5";
    document.getElementById("lblOperacion").innerHTML = "Operacion: " + acumulado;
    document.getElementById("lblPantalla").innerHTML = 5;
 }

 function cuatro(){
    document.getElementById(btn4);
    acumulado = acumulado + "4";
    document.getElementById("lblOperacion").innerHTML = "Operacion: " + acumulado;
    document.getElementById("lblPantalla").innerHTML = 4;
 }

 function tres(){
    document.getElementById(btn3);
    acumulado = acumulado + "3";
    document.getElementById("lblOperacion").innerHTML = "Operacion: " + acumulado;
    document.getElementById("lblPantalla").innerHTML = 3;
 }

 function dos(){
    document.getElementById(btn2);
    acumulado = acumulado + "2";
    document.getElementById("lblOperacion").innerHTML = "Operacion: " + acumulado;
    document.getElementById("lblPantalla").innerHTML = 2;
 }

 function uno(){
    document.getElementById(btn1);
    acumulado = acumulado + "1";
    document.getElementById("lblOperacion").innerHTML = "Operacion: " + acumulado;
    document.getElementById("lblPantalla").innerHTML = 1;
 }

 function cero(){
    document.getElementById(btn0);
    acumulado = acumulado + "0";
    document.getElementById("lblOperacion").innerHTML = "Operacion: " + acumulado;
    document.getElementById("lblPantalla").innerHTML = 0;
 }

 function sumar(){
    document.getElementById(btnMas);
    acumulado = acumulado + "+";
    document.getElementById("lblOperacion").innerHTML = "Operacion: " + acumulado;
    var sumatemp = document.getElementById("lblPantalla");
    suma = suma + parseInt(sumatemp);
    document.getElementById("lblPantalla").innerHTML = "";  
 }

 function restar(){
    document.getElementById(btnMenos);
    acumulado = acumulado + "-";
    document.getElementById("lblOperacion").innerHTML = "Operacion: " + acumulado;
    var restatemp = document.getElementById("lblPantalla");
    resta = resta - parseInt(restatemp);
    document.getElementById("lblPantalla").innerHTML = "";  
 }

 function Multip(){
    document.getElementById(btnMulti);
    acumulado = acumulado + "x";
    document.getElementById("lblOperacion").innerHTML = "Operacion: " + acumulado;
    var multitemp = document.getElementById("lblPantalla");
    multi = multi * parseInt(multitemp);
    document.getElementById("lblPantalla").innerHTML = "";  
 }

 function Divi(){
    document.getElementById(btnDiv);
    acumulado = acumulado + "/";
    document.getElementById("lblOperacion").innerHTML = "Operacion: " + acumulado;
    var divtemp = document.getElementById("lblPantalla");
    div = div / parseInt(divtemp);
    document.getElementById("lblPantalla").innerHTML = "";  
 }

 function Borrar(){
    document.getElementById(btnBorrar);
    acumulado = "";
    document.getElementById("lblOperacion").innerHTML = "Operacion: ";
    document.getElementById("lblPantalla").innerHTML = acumulado;
 }

 function Igual(){
    document.getElementById(btnIgual);
    resultado = (suma - resta)*((multi)/(div));
    document.getElementById("lblOperacion").innerHTML = "Operacion: ";
    document.getElementById("lblPantalla").innerHTML = resultado;
 }

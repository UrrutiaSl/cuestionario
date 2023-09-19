var nombre = prompt("Esta es la Trivia de la primavera. Escribe tu nombre:");
var c = 0;
var o =0;
alert("Biemvenido/a "+ nombre + " Empezamos........")

var p1 = prompt("¿Cómo se llama al primer día de la Primavera?\nA: Primer Día de la Primavera\n
B: Equinoccio de Primaver\nC: Equinoccio de Invierno")

if(p1 == "B"){
    c = c + 1;
}else if(p1 == "A"){
    i = i + 1;
}else if(p1 == "C"){
    i = i + 1;
}else{
    alert("Opción no válida")
}


var nombre = prompt("Esta es la Trivia de la primavera. Escribe tu nombre:");
var c = 0;
var o =0;
alert("Biemvenido/a "+ nombre + " Empezamos........")

var p2 = prompt("¿Qué sucede en el Polo Norte cuando llega la Primavera?\nA: 6 meses de luz diurna ininterrumpida\nB: 6 meses de oscuridad inimterrumpida\nC: 6 meses de alternancia de luz y oscuridad")

if(p2 == "A"){
    c = c + 1;
}else if(p2 == "B"){
    i = i + 1;
}else if(p2 == "C"){
    i = i + 1;
}else{
    alert("Opción no válida")
}

if(c > i){
    document.write(nombre + ", lo has hecho bien<br>");
    document.write("correctas: " + c + "<br>");
    document.write("Incorrectas: " + i + "<br>");i
}else if(c < i ){
    document.write(nombre + ", No estubiste bien<br>");
    document.write("correctas: " + c + "<br>");
    document.write("Incorrectas: " + i + "<br>");i
}else{
    document.write(nombre + ", Has contestado a medias<br>");
    document.write("correctas: " + c + "<br>");
    document.write("Incorrectas: " + i + "<br>");i 
}

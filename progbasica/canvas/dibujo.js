var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("myCanvas");
var ancho = d.width;
//alert(ancho);
var lienzo = d.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
lienzo.beginPath();
lienzo.strokeStyle = color;
lienzo.moveTo(xinicial, yinicial);
lienzo.lineTo(xfinal, yfinal);
lienzo.stroke();
lienzo.closePath();
}

function dibujoPorClick()
{
var lineas =parseInt(texto.value);
var l =0;
var yi, xf;
var xi, yf;
var colorcito = "orange";
var espacio = ancho / lineas;

for(l =0; l < lineas; l++) //ciclo
{
yi = espacio * l;
xf = espacio * ( l + 1);
dibujarLinea(colorcito,0,yi,xf,ancho);
console.log("Linea " + 1)
xi = espacio * l;
yf = espacio * ( l + 1);
dibujarLinea(colorcito,xi,0,ancho,yf);
}
}

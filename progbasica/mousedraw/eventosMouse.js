var ctx = document.getElementById("myCanvas");
var papel = ctx.getContext("2d");
ctx.addEventListener("mousedown", startDrawing);
ctx.addEventListener("mousemove", drawing);
ctx.addEventListener("mouseup", endDrawing);
var colorcito = "red";
var draw = false;
var x = 0;
var y = 0;

function startDrawing(evento)
{
  x = evento.layerX;
  y = evento.layerY;
  draw = true;
}
function drawing(evento)
{
  if(draw == true)
  {
    dibujarLinea(5,colorcito,x,y,evento.layerX,evento.layerY,papel);
    x = evento.layerX;
    y = evento.layerY;
  }
}
function endDrawing(evento)
{
  dibujarLinea(5,colorcito,x,y,evento.layerX,evento.layerY,papel);
  x = 0;
  y = 0;
  draw = false;
}

var limiteCanvas = ctx.width;
function dibujarLinea(ancho,color,xinicial,yinicial,xfinal,yfinal,lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = ancho;
  lienzo.moveTo(xinicial,yinicial);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
dibujarLinea(2,colorcito, 1, 1, 1, limiteCanvas - 1,papel);
dibujarLinea(2,colorcito, 1, 1, limiteCanvas - 1, 1,papel);
dibujarLinea(2,colorcito, 1, limiteCanvas - 1, limiteCanvas - 1, limiteCanvas - 1,papel);
dibujarLinea(2,colorcito, limiteCanvas - 1, 1, limiteCanvas - 1, limiteCanvas - 1,papel);

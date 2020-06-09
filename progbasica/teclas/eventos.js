var teclas =
{
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

console.log(teclas);
document.addEventListener("keydown", dibujarTeclado);
var ctx = document.getElementById("myCanvas");
var papel = ctx.getContext("2d");
var colorcito = "red";
var limiteCanvas = ctx.width;
var x = limiteCanvas/2;
var y = limiteCanvas/2;
var movimiento = 10;

dibujarLinea(1,"red",x-1,y-1,x+1,x+1,papel);

dibujarLinea(2,colorcito, 1, 1, 1, limiteCanvas - 1,papel);
dibujarLinea(2,colorcito, 1, 1, limiteCanvas - 1, 1,papel);
dibujarLinea(2,colorcito, 1, limiteCanvas - 1, limiteCanvas - 1, limiteCanvas - 1,papel);
dibujarLinea(2,colorcito, limiteCanvas - 1, 1, limiteCanvas - 1, limiteCanvas - 1,papel);

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

function dibujarTeclado(evento)
{
  switch (evento.keyCode)
  {
    case teclas.UP:
      dibujarLinea(1, colorcito, x, y, x, y - movimiento,papel);
      y = y - movimiento;
      break;
    case teclas.DOWN:
      dibujarLinea(1, colorcito, x, y, x, y + movimiento,papel);
      y = y + movimiento;
      break;
    case teclas.LEFT:
      dibujarLinea(1, colorcito, x, y, x - movimiento, y,papel);
      x = x - movimiento;
      break;
    case teclas.RIGHT:
      dibujarLinea(1, colorcito, x, y, x + movimiento, y,papel);
      x = x + movimiento;
      break;
    default:
      console.log("otra Tecla");
    break;
  }
}

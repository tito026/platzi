var box = document.getElementById("myCanvas");
var lienzo = box.getContext("2d");
var colorcito = "orange";
var inicioCanvas = 0;
var limiteCanvas = 1000;
var limiteFigura = 500;
var plus, less, plusHalf, lessHalf;
for(var x = 1; x < limiteCanvas; x += 10)
{
	plus = inicioCanvas + x;
	less = limiteCanvas - x;
	dibujarLinea(1,colorcito,inicioCanvas, plus, plus, limiteCanvas);
	dibujarLinea(1,colorcito, plus, inicioCanvas, limiteCanvas, plus);
	dibujarLinea(1,colorcito,less, inicioCanvas, inicioCanvas, plus);
	dibujarLinea(1,colorcito,less, limiteCanvas, limiteCanvas, plus);
}

for(var x = 1; x < limiteFigura; x += 10)
{
	colorcito = "#ACF";
	plusHalf = limiteFigura + x;
	plus = inicioCanvas + x;
	lessHalf = limiteFigura - x;
	less = limiteCanvas - x;
	console.log("lessHalf " + lessHalf);
	dibujarLinea(1,colorcito,limiteFigura, less, plusHalf, limiteFigura);
	dibujarLinea(1,colorcito,limiteFigura, less, lessHalf, limiteFigura);
	dibujarLinea(1,colorcito,limiteFigura, plus, plusHalf, limiteFigura);
	dibujarLinea(1,colorcito,limiteFigura, plus, lessHalf, limiteFigura);
}
dibujarLinea(1,colorcito, inicioCanvas,limiteFigura,limiteCanvas,limiteFigura);
dibujarLinea(1,colorcito, limiteFigura,inicioCanvas,limiteFigura,limiteCanvas);

colorcito = "orange";
dibujarLinea(2,colorcito, 1, 1, 1, limiteCanvas - 1);
dibujarLinea(2,colorcito, 1, 1, limiteCanvas - 1, 1);
dibujarLinea(2,colorcito, 1, limiteCanvas - 1, limiteCanvas - 1, limiteCanvas - 1);
dibujarLinea(2,colorcito, limiteCanvas - 1, 1, limiteCanvas - 1, limiteCanvas - 1);

function dibujarLinea(ancho,color,xinicial,yinicial,xfinal,yfinal)
{
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.lineWidth = ancho;
	lienzo.moveTo(xinicial,yinicial);
	lienzo.lineTo(xfinal,yfinal);
	lienzo.stroke();
	lienzo.closePath();
}

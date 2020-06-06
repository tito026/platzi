var box = document.getElementById('myCanvas');
var lienzo = box.getContext('2d');
var l = 0;
var colorcito = "#ACF";
var timesTen = 1, timesPlusOne = 1, timesLessOne = half, timesPlusThree = half;
var almost = box.width;
var half = box.width/2;
var lineas = (box.width/10) + 1;

for(l = 0; l < lineas;l++)
{
	dibujarLinea(1, colorcito, half, timesTen, timesLessOne, almost);
	dibujarLinea(1, colorcito, half, timesPlusOne, timesPlusThree, almost);
	timesTen = 10 * l;
	timesPlusOne = 10 * (l + 1);
	timesLessOne = half - timesTen;
	timesPlusThree = half + timesTen;
}

dibujarLinea(2,colorcito, 1, 1, 1, almost);
dibujarLinea(2,colorcito, 1, 1, almost, 1);
dibujarLinea(2,colorcito, 1, almost, almost, almost);
dibujarLinea(2,colorcito, almost, 1, almost, almost);

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

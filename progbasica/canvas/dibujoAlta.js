var box = document.getElementById('myCanvas');
var lienzo = box.getContext('2d');
var lineas = 61;
var l = 0;
var colorcito = "#ACF";
var timesTen = 1, timesPlusOne = 1, timesLessOne = 300, timesPlusThree = 300;
for(l = 0; l < lineas;l++)
{
	console.log("Linea " + l);
	console.log("timesTen " + timesTen);
	console.log("timesPlusOne " + timesPlusOne);
	console.log("timesLessOne " + timesLessOne);
	console.log("timesPlusThree " + timesPlusThree);

	dibujarLinea(1, colorcito, 300, timesTen, timesLessOne, 599);
	dibujarLinea(1, colorcito, 300, timesPlusOne, timesPlusThree, 599);
	timesTen = 10 * l;
	timesPlusOne = 10 * (l + 1);
	timesLessOne = 300 - timesTen;
	timesPlusThree = 300 + timesTen;
}

dibujarLinea(2,colorcito, 1, 1, 1, 599);
dibujarLinea(2,colorcito, 1, 1, 599, 1);
dibujarLinea(2,colorcito, 1, 599, 599, 599);
dibujarLinea(2,colorcito, 599, 1, 599, 599);

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

var box = document.getElementById('myCanvas');
var lienzo = box.getContext('2d');
var lineas = 60;
var l = 0;
var colorcito = "#ACF";
var timesTen = 1, timesPlusOne = 1, timesLessOne = 599;

for(l = 0; l < lineas; l++)
{
	console.log("Linea " + l);
  console.log("timesTen " + timesTen);
  console.log("timesPlusOne " + timesPlusOne);
  console.log("timesLessOne " + timesLessOne);
	dibujarLinea(1, colorcito, 1, timesTen, timesPlusOne, 599);
	dibujarLinea(1, colorcito, timesTen, 1, 599, timesPlusOne);
	dibujarLinea(1, colorcito, 1, timesLessOne , timesPlusOne, 1);
	dibujarLinea(1, colorcito, timesPlusOne, 599, 599, timesLessOne);

	timesTen = 10 * l;
	timesPlusOne = 10 * (l + 1);
	timesLessOne = 599 - timesPlusOne;
	// l = l + 1;
}

// dibujarLinea(1,"black", 1, 1, 599, 599);
// dibujarLinea(1,"black", 599, 1, 1, 599);

dibujarLinea(2,colorcito, 1, 1, 1, 599);
dibujarLinea(2,colorcito, 1, 1, 599, 1);
dibujarLinea(2,colorcito, 1, 599, 599, 599);
dibujarLinea(2,colorcito, 599, 1, 599, 599);

	function dibujarLinea(ancho,color,xinicial,timesTennicial,timesPlusOneinal,yfinal)
	{
		lienzo.beginPath();
		lienzo.strokeStyle = color;
		lienzo.lineWidth = ancho;
		lienzo.moveTo(xinicial,timesTennicial);
		lienzo.lineTo(timesPlusOneinal,yfinal);
		lienzo.stroke();
		lienzo.closePath();
	}

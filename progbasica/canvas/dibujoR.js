var box = document.getElementById('myCanvas');
var lienzo = box.getContext('2d');
var texto = document.getElementById("betweenLines");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);
var colorcito = "white";

function dibujoPorClick()
{
	var espacioLineas = parseInt(texto.value);
	var  first = 0;
	var  second = 0;
	var  third = box.width;
	var  fourth = box.height;
	var limite = box.width / 2;

	while(first < limite)
	{
		dibujarRectangulo(first,second,third,fourth);
		first += espacioLineas;
		second += espacioLineas;
		third -= (espacioLineas * 2);
		fourth -= (espacioLineas * 2);
		console.log(espacioLineas);
	}
}
function dibujarRectangulo(xi,yi,xf,yf)
{
	lienzo.strokeStyle = colorcito;
	lienzo.beginPath();
	lienzo.lineWidth = 1;
	lienzo.strokeRect(xi,yi,xf,yf);
	lienzo.stroke();
	lienzo.closePath();
}

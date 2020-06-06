var texto = document.getElementById("texto_lineas");
var color_user = document.getElementById("texto_color");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);


var box = document.getElementById("myCanvas");
var lienzo = box.getContext("2d");



function dibujoPorClick()
{

	var xxx = parseInt(texto.value);
	var espacioEntreLineas = xxx;
	var colorcito1;
	var colorcito2;
	var colorcito3;
	var inicioCanvas = box.width - box.width;
	var limiteCanvas = box.width;
	var limiteFigura = box.width/2;
	var plus, less, plusHalf, lessHalf;
	console.log(color_user);
	var usuario_color = parseInt(color_user.value);

	if (usuario_color == 1)
	{
		colorcito1 = "white";
		colorcito2 = "white";
		colorcito3 = "white";
		console.log(colorcito1);
	}
	else if(usuario_color == 2)
	{
		colorcito1 = "orange";
		colorcito2 = "orange";
		colorcito3 = "orange";
	}

	else if(usuario_color == 3)
	{
		colorcito1 = "green";
		colorcito2 = "green";
		colorcito3 = "green";
	}

	else if(usuario_color == 4)
	{
		colorcito1 = "#19DCC6";
		colorcito2 = "#19A1DC";
		colorcito3 = "blue";
	}

	else if(usuario_color == 5)
	{
		colorcito1 = "#4EF905";
		colorcito2 = "#EF0E0E";
		colorcito3 = "white";
	}

	else if(usuario_color == 6)
	{
		colorcito1 = "#F96C05";
		colorcito2 = "#EDF905";
		colorcito3 = "yellow";
	}
	else
	{
		alert("Error");
	}



	for(var x = 1; x < limiteCanvas; x += espacioEntreLineas)
	{
		plus = inicioCanvas + x;
		less = limiteCanvas - x;
		lessHalf = limiteFigura - x;
		plusHalf = limiteFigura + x;
		dibujarLinea(1,colorcito1,limiteFigura, plus, plusHalf, limiteCanvas);
		dibujarLinea(1,colorcito2, limiteFigura, plus, lessHalf, limiteCanvas);
	}

	colorcito = "orange";
	dibujarLinea(2,colorcito3, 1, 1, 1, limiteCanvas - 1);
	dibujarLinea(2,colorcito3, 1, 1, limiteCanvas - 1, 1);
	dibujarLinea(2,colorcito3, 1, limiteCanvas - 1, limiteCanvas - 1, limiteCanvas - 1);
	dibujarLinea(2,colorcito3, limiteCanvas - 1, 1, limiteCanvas - 1, limiteCanvas - 1);

}

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

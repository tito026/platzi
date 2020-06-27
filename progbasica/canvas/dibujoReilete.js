var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("myCanvas");
var ancho = d.width;
var papel = d.getContext("2d");
papel.fillStyle = "black";
papel.fillRect(0, 0 , d.width, d.height);

function dibujarLinea(color, xi, yi, xf, yf)
{
  papel.beginPath();
  papel.strokeStyle = color;
  papel.moveTo(xi, yi);
  papel.lineTo(xf, yf);
  papel.stroke();
  papel.closePath();
}

function dibujoPorClick()
{
  var l = 0;
  var x1, x2, y1, y2;
  var lineas = parseInt(texto.value);
  var espacio = ancho/lineas;

  //Dibujo de arriba
  for(l=0; l<lineas; l++)
  {
    x1 = ancho - (l*espacio);
    x2 = ((l+1)*espacio)/2;
    y1 = 0;
    y2 = ((l+1)*espacio)/2;
    dibujarLinea("blue", x1, y1, x2, y2);
    dibujarLinea("blue", 1, 1, ancho, 1);
    dibujarLinea("blue", 1, 1, ancho/2, ancho/2);
  }

  //Dibujo de abajo
  for(l=0; l<lineas; l++)
  {
    x1 = l*espacio;
    x2 = ancho-(l+1)*espacio/2;
    y1 = ancho;
    y2 = ancho-(l+1)*espacio/2;
    dibujarLinea("#B0C4DE", x1, y1, x2, y2);
    dibujarLinea("#B0C4DE", ancho-1, ancho-1, ancho/2, ancho/2);
    dibujarLinea("#B0C4DE", 1, ancho-1, ancho-1, ancho -1);
  }

  //Dibujo de la derecha
  for(l=0; l<lineas; l++)
  {
    x1 = ancho;
    x2 = ancho-(l+1)*espacio/2;
    y1 = ancho - (l*espacio);
    y2 = (l+1)*espacio/2;
    dibujarLinea("#DB7093", x1, y1, x2, y2);
    dibujarLinea("#DB7093", ancho-1, 1, ancho-1, ancho-1)
    dibujarLinea("#DB7093", ancho/2, ancho/2, ancho-1, 1);
  }

  //Dibujo de la hizquierda
  for(l=0; l<lineas; l++)
  {
    x1 = 0;
    x2 = (l+1)*espacio/2;
    y1 = l*espacio;
    y2 = ancho - (l+1)*espacio/2;
    dibujarLinea("#6A5ACD", x1, y1, x2, y2);
    dibujarLinea("#6A5ACD", 1, 1, 1, ancho);
    dibujarLinea("#6A5ACD", 1, ancho-1, ancho/2, ancho/2);
  }

}

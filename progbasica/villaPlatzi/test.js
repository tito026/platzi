// Variables
var flechasTeclado = {LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40};
var iv = document.getElementById("myCanvas");
var lienzo = iv.getContext("2d")
var fondo = {url: "tile.png", cargaOK: false};
var vaca = {url: "vaca.png", cargaOK: false};
var cerdo = {url: "cerdo.png", cargaOK: false};
var cerdoInt = {url: "cerdo.png", cargaOK: false};
var pollo = {url: "pollo.png", cargaOK: false};
//
fondo.villa = new Image();
fondo.villa.src = fondo.url;
fondo.villa.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

cerdoInt.imagen = new Image();
cerdoInt.imagen.src = cerdoInt.url;
cerdoInt.imagen.addEventListener("load", cargarCerdoInt);
// Cargado
function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}

function cargarVaca()
{
  vaca.cargaOK = true;
  dibujar();
}

function cargarCerdo()
{
  cerdo.cargaOK = true;
  dibujar();
}


function cargarPollo()
{
  pollo.cargaOK = true;
  dibujar();
}

function cargarCerdoInt()
{
  cerdoInt.cargaOK = true;
  dibujar();
}

document.addEventListener("keydown", movimientoCI)

// Representacion grafica
function dibujar()
{
  if(fondo.cargaOK)
  {
    lienzo.drawImage(fondo.villa, 0, 0);
  }

  if(vaca.cargaOK)
  {
    var cV = aleatorio(0, 10);
    for(nc = 0; nc < cV; nc++)
    {
      var x = aleatorio(0, 420);
      var y = aleatorio(0, 420);
      lienzo.drawImage(vaca.imagen, x, y);
    }
  }

  if(cerdo.cargaOK)
  {
    var cC = aleatorio(0, 20);
    for(nc = 0; nc < cC; nc++)
    {
      var x = aleatorio(0, 420);
      var y = aleatorio(0, 420);
      lienzo.drawImage(cerdo.imagen, x, y);
    }
  }

  if(pollo.cargaOK)
  {
    var nP = aleatorio(0, 30);
    for(nc = 0; nc < nP; nc++)
    {
      var x = aleatorio(0, 420);
      var y = aleatorio(0, 420);
      lienzo.drawImage(pollo.imagen, x, y);
    }
  }
}
// Movimiento CerdoInt
var x = 0
var y = 0
function movimientoCI(registroTeclado)
{
  var movimiento = 10
  console.log();
  switch(cerdoInt.cargaOK, registroTeclado.keyCode)
  {
    case flechasTeclado.LEFT:
      lienzo.drawImage(cerdoInt.imagen, x - movimiento, y);
      x = x - movimiento;
    break;
    case flechasTeclado.UP:
      lienzo.drawImage(cerdoInt.imagen, x, y - movimiento);
      y = y - movimiento;
    break
    case flechasTeclado.RIGHT:
      lienzo.drawImage(cerdoInt.imagen, x + movimiento, y);
      x = x + movimiento;
    break;
    case flechasTeclado.DOWN:
      lienzo.drawImage(cerdoInt.imagen, x, y + movimiento);
      y = y + movimiento;
  }

}
// F. Aleatorio
function aleatorio(min, max)
{
  var resultado;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;
}

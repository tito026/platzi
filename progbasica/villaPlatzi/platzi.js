var teclas =
{
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

var vp = document.getElementById("myCanvas");
var papel = vp.getContext("2d");
document.addEventListener("keydown", dibujarTeclado);
var xCerdo = 200;
var yCerdo = 200;
var movimiento = 10;

var fondo = {
  url: "tile.png",
  cargaOK: false
};
var vaca = {
  url: "vaca.png",
  cargaOK: false
};
var pollo = {
  url: "pollo.png",
  cargaOK: false
};
var cerdo = {
  url: "cerdo.png",
  cargaOK: false
};

var cantidadVacas = aleatorio(1,20);
var cantidadPollos = aleatorio(1,20);
var cantidadCerdos = aleatorio(1,20);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);




function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}
function cargarVacas()
{
  vaca.cargaOK = true;
  dibujar();
}
function cargarPollos()
{
  pollo.cargaOK = true;
  dibujar();
}
function cargarCerdos()
{
  cerdo.cargaOK = true;
  dibujar();
}

function dibujar()
{
  if(fondo.cargaOK)
  {
    papel.drawImage(fondo.imagen,0,0);
  }
  if(vaca.cargaOK)
  {
    console.log(cantidadVacas);
    for(var v = 0; v < cantidadVacas; v++)
    {
      var x = aleatorio (0, 7);
      var y = aleatorio (0, 7);
      x = x * 60;
      y = y * 60;
      papel.drawImage(vaca.imagen,x,y);
    }
  }
  if(pollo.cargaOK)
  {
    for(var v = 0; v < cantidadPollos; v++)
    {
      var x = aleatorio (0, 7);
      var y = aleatorio (0, 7);
      x = x * 60;
      y = y * 60;
      papel.drawImage(pollo.imagen,x,y);
    }
  }
  if(cerdo.cargaOK)
  {
    papel.drawImage(cerdo.imagen,xCerdo,yCerdo);
  }
}

function dibujarTeclado(evento)
{
  switch (evento.keyCode)
  {
    case teclas.UP:
      dibujar();
      yCerdo = yCerdo - movimiento;
      break;
    case teclas.DOWN:
      dibujar();
      yCerdo = yCerdo + movimiento;
      break;
    case teclas.LEFT:
      dibujar();
      xCerdo = xCerdo - movimiento;
      break;
    case teclas.RIGHT:
      dibujar();
      xCerdo = xCerdo + movimiento;
      break;
    default:
      console.log("otra Tecla");
    break;
  }
}

function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}





// var texto = document.getElementById("textoNumero");
// var textoMini = document.getElementById("textoMin");
// var textoMaxi = document.getElementById("textoMax");
// var boton = document.getElementById("botoncito");

// boton.addEventListener("click", escribirAleatorios);

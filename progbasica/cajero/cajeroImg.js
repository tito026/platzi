class Billete
{
  constructor(v, c)
  {
    this.valor = v;
    this.cantidad = c;
  }
}
class Efectivo
{
  constructor(valor)
  {
    this.tipo = "pesos" + valor;
    this.imagen = new Image();
    this.imagen.src = imagenes[this.tipo];
  }
}
var firstTime = true;
function entregarDinero()
{
  if(!firstTime)
  {
    console.log("aqui");
    resultado.removeChild(document.getElementById('last'));
  }
  firstTime = false;
  var element = document.createElement("div");
  element.setAttribute("id", "last");

  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);
  for(var bi of caja)
  {

    if(dinero > 0)
    {
      div = Math.floor(dinero / bi.valor);

      if(div > bi.cantidad)
      {
        papeles = bi.cantidad;
      }
      else
      {
        papeles = div;
      }

      entregado.push( new Billete(bi.valor, papeles) );
      dinero = dinero - (bi.valor * papeles);
    }

  }

  if(dinero > 0)
  {
    element.innerHTML = "Soy un cajero malo, he sido malo y no puedo darte esa cantidad :(";
  }
  else
  {
    for(var e of entregado)
    {
      if(e.cantidad > 0)
      {
          var name = e.valor+"p.jpg" ;
          element.innerHTML = "<img src='"+name+"'/>"  + e.valor + "<br />";
      }
    }
  }
  document.getElementById('resultado').appendChild(element);
}

var caja = [];
var entregado = [];
caja.push( new Billete(500, 5) );
caja.push( new Billete(200, 10) );
caja.push( new Billete(100, 5) );
caja.push( new Billete(50, 10) );
caja.push( new Billete(20, 5) );
var dinero = 0;
var div = 0;
var papeles = 0;

var imagenes = [];
for (var tipos of caja)
{
  var name = "pesos"+ tipos.valor;
  var url = tipos.valor + "p.jpg";
  imagenes[name] = url;
}

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);

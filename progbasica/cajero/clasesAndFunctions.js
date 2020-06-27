var imagenes = [];
imagenes["20"] = "20p.png";
imagenes["50"] = "50p.jpg";
imagenes["100"] = "100p.jpg";
imagenes["200"] = "200p.jpg";
imagenes["500"] = "500p.jpg";

class Billete
{
  constructor(v,c)
  {
    this.image = new Image();
    this.valor = v;
    this.cantidad = c;
    this.image.src = imagenes[this.valor];
    // this.image.height = "50";
    // this.image.width = "100";
  }
  mostrar()
  {
    // resultado.innerHTML = "HOla <div>";
    var xCanvas = 0;
    var yCanvas = 0;
    var x = document.createElement("CANVAS");
    var ctx = x.getContext("2d");
    ctx.drawImage(this.image, xCanvas,yCanvas);
    document.getElementById("resultado").appendChild(x);
    console.log("HOLA");
    xCanvas = xCanvas + 350;
    if(xCanvas >= ctx.width)
    {
      yCanvas = yCanvas + 150;
    }
    // resultado.innerHTML = "Adios </div>";
  }
}


function entregarDinero()
{
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
      entregado.push( new Billete(bi.valor, papeles));
      dinero = dinero - (bi.valor * papeles);
    }
  }
  if (dinero > 0)
  {
    resultado.innerHTML = "Soy un cajero malo y no puedo darte esa cantidad";
  }
  else
  {
    for(var e of entregado)
    {
      if(e.cantidad > 0)
      {
        for(var i = 1; i <= e.cantidad; i++)
        {
          e.mostrar();
          console.log(entregado);
        }
      }
    }
  }
}

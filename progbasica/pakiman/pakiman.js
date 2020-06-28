
class Pakiman
{
  constructor(n, c)
  {
    this.nombre = n;
    this.cantidad = c;
  }
  nacer(array)
  {
    for (var i = 1; i <= this.cantidad; i++)
    {
      var newName = this.nombre + i;
      console.log(newName);
      array.push(new Pakis(this.nombre, newName));

    }
  }
}
class Pakis
{
  constructor(tipo,name)
  {
    this.vida = aleatorio(30,120);
    this.ataque = aleatorio(30,120);
    this.tipo = tipo;
    this.nombre = name;
    this.imagen = new Image();
    this.imagen.src = imagenes[this.tipo];
  }
  mostrar()
  {
    document.body.appendChild(this.imagen);
    document.write("<p>");
    document.write("<strong>" + this.nombre + "</strong><br/>");
    document.write("Vida: " + this.vida + "<br/>");
    document.write("Ataque: " + this.ataque + "<br/><hr/>");
    document.write("</p>");
  }
  hablar()
  {
    alert(this.nombre);
  }
}
function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}

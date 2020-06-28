class Pakiman
{
  constructor(n, v, a, c)
  {
    this.nombre = n;
    this.vida = v;
    this.ataque = a;
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

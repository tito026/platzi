var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

var coleccion = [];
coleccion.push(new Pakiman("Cauchin",3));
coleccion.push(new Pakiman("Pokacho", 3));
coleccion.push(new Pakiman("Tocinauro", 3));
var coleccionVivos = [];

for(var pakin of coleccion)
{
  pakin.nacer(coleccionVivos);
}

for(var pakin of coleccionVivos)
{
  pakin.mostrar();
}

var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

var coleccion = [];
coleccion.push(new Pakiman("Cauchin", 100, 30, 3));
coleccion.push(new Pakiman("Pokacho", 80, 50, 3));
coleccion.push(new Pakiman("Tocinauro", 120, 40, 3));
var coleccionVivos = [];

for(var pakin of coleccion)
{
  pakin.nacer(coleccionVivos);
}

for(var pakin of coleccionVivos)
{
  pakin.mostrar();
}
// for(var x in coleccion[2])
// {
//   console.log(x);
// }

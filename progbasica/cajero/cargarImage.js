// var fondo = {
//   url: "tile.png",
//   cargaOK: false
// };
// var vaca = {
//   url: "vaca.png",
//   cargaOK: false
// };
// var pollo = {
//   url: "pollo.png",
//   cargaOK: false
// };
// var cerdo = {
//   url: "cerdo.png",
//   cargaOK: false
// };
//
// fondo.imagen = new Image();
// fondo.imagen.src = fondo.url;
// fondo.imagen.addEventListener("load", cargarFondo);
//
// vaca.imagen = new Image();
// vaca.imagen.src = vaca.url;
// vaca.imagen.addEventListener("load", cargarVacas);
//
// pollo.imagen = new Image();
// pollo.imagen.src = pollo.url;
// pollo.imagen.addEventListener("load", cargarPollos);
//
// cerdo.imagen = new Image();
// cerdo.imagen.src = cerdo.url;
// cerdo.imagen.addEventListener("load", cargarCerdos);
//
// function cargarFondo()
// {
//   fondo.cargaOK = true;
//   dibujar();
// }
// function cargarVacas()
// {
//   vaca.cargaOK = true;
//   dibujar();
// }
// function cargarPollos()
// {
//   pollo.cargaOK = true;
//   dibujar();
// }
// function cargarCerdos()
// {
//   cerdo.cargaOK = true;
//   dibujar();
// }
// class Pakiman
// {
//   constructor(n, v, a)
//   {
//     this.imagen = new Image();
//     this.nombre = n;
//     this.vida = v;
//     this.ataque = a;
//
//     this.imagen.src = imagenes[this.nombre];
//   }
//   hablar()
//   {
//     alert(this.nombre);
//   }
//   mostrar()
//   {
//     document.body.appendChild(this.imagen);
//     document.write("<p>");
//     document.write("<strong>" + this.nombre + "</strong><br/>");
//     document.write("Vida: " + this.vida + "<br/>");
//     document.write("Ataque: " + this.ataque + "<br/><hr/>");
//     document.write("</p>");
//   }
// }

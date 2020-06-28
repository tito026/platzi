var caja = [];

caja.push( new Billete(500, 10));
caja.push( new Billete(200, 10));
caja.push( new Billete(100, 20));
caja.push( new Billete(50, 30));
caja.push( new Billete(20, 10));

var dinero = 0;
var div = 0;
var papeles = 0;

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click",entregarDinero);

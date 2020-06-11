var texto = document.getElementById("textoNumero");
var textoMini = document.getElementById("textoMin");
var textoMaxi = document.getElementById("textoMax");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", escribirAleatorios);
function escribirAleatorios()
{
  var z;
  var mini = parseInt(textoMini.value);
  var maximo = parseInt(textoMaxi.value);
  var cuantos = parseInt(texto.value);
  for(var i = 0; i < cuantos; i++)
  {
    z = aleatorio(mini, maximo);
    document.write(z + "<br>");
  }

}

function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}

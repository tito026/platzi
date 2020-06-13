var limite = 2000000;
var primerNumero = 7;
var segundoNumero = 9;
var tercerNumero = 11;
var cuartoNumero = 13;
var porRenglon = 10;
var cantidad = 0;
document.write("<h2>Los siguientes números son divisibles entre " + primerNumero +", " + segundoNumero + ", " + tercerNumero + " y " + cuartoNumero +":</h2> <br><strong>");
for(i = 1; i <= limite; i++)
{
  if(esDivisible(i,primerNumero) && esDivisible(i,segundoNumero) && esDivisible(i,tercerNumero) && esDivisible(i,cuartoNumero))
  {
    cantidad++;
    console.log(cantidad);
    if(!esDivisible(cantidad,porRenglon))
    {
      document.write(i + ", ");
    }
    else
    {
      document.write(i + "<br>");
    }
  }
}
document.write("</strong><br> <h2>En total tenemos "+ cantidad + " numeros que son divisibles entre " + primerNumero +", " + segundoNumero + ", " + tercerNumero + " y " + cuartoNumero + "</h2>");



function esDivisible(num, divisor)
{
  if (num % divisor == 0)
  {
    return true;
  }
  else
  {
    return false;
  }
}

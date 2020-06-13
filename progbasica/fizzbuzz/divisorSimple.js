var limite = 5000;
var cantidad = 0;
document.write("Los siguientes números son divisibles entre 5 y 3: <br>")
for(i = 1; i <= limite; i++)
{
  if(esDivisible(i,3) && esDivisible(i,5))
  {
    cantidad++;
    console.log(cantidad);
    if(!esDivisible(cantidad,10))
    {
      document.write(i + ", ");
    }
    else
    {
      document.write(i + "<br>");
    }
  }
}



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

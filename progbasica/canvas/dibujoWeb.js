var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
for(var x = 1; x < 600; x += 10)
{
	ctx.strokeStyle = "#ACF";
	ctx.lineWidth = 1;
	ctx.moveTo(0, 0 + x)
  ctx.lineTo(0 + x, 600);
  ctx.stroke();
}
for(var x = 1; x < 600; x += 10)
{
  ctx.moveTo(0+x, 0)
  ctx.lineTo(600, 0+x);
  ctx.stroke();
}
for(var x = 1; x < 600; x += 10)
{
  ctx.moveTo(600 - x, 0)
  ctx.lineTo(0, 0 + x);
  ctx.stroke();
}

for(var x = 1; x < 600; x += 10)
{
  ctx.moveTo(600, 0+x)
  ctx.lineTo(600 - x, 600);
  ctx.stroke();
}

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let scale = window.devicePixelRatio;
canvas.width = 900 * scale;
canvas.height = 420 * scale;

//mar
ctx.fillStyle = '#156bc6';
ctx.fillRect(0, 270, 1000, 150);
//cel
ctx.fillStyle = '#90d4ff';
ctx.fillRect(0, 0, 1000, 270);
//sorra #e0c070
ctx.beginPath();
ctx.ellipse(450, 320, 248, 94, 0, 0, Math.PI * 2);
ctx.fillStyle = '#e0c070';
ctx.fill();
//terra #3cb371
ctx.beginPath();
// (x, y, radioX, radioY, rotacion, inicio, fin)
ctx.ellipse(450, 300, 238, 74, 0, 0, Math.PI * 2);
ctx.fillStyle = '#3cb371';
ctx.fill();
//nuvol
ctx.beginPath();
ctx.ellipse(90, 100, 50, 30, 0, 0, Math.PI * 2);
ctx.ellipse(110, 80, 50, 30, 0, 0, Math.PI * 2);
ctx.ellipse(130, 110, 50, 30, 0, 0, Math.PI * 2);
ctx.fillStyle = 'white';
ctx.fill();
ctx.beginPath();
ctx.ellipse(280, 60, 70, 30, 0, 0, Math.PI * 2);
ctx.ellipse(300, 40, 70, 30, 0, 0, Math.PI * 2);
ctx.ellipse(340, 70, 70, 30, 0, 0, Math.PI * 2);
ctx.fillStyle = 'orange';
ctx.fill();

//cuadrat rosa
ctx.fillStyle = 'pink';
ctx.fillRect(370, 162, 160, 145);
//finestra blancs
ctx.fillStyle = 'white';
ctx.fillRect(380, 170, 60, 57);

//finestra blancs
ctx.fillStyle = 'white';
ctx.fillRect(461, 170, 60, 57);

//porta
ctx.fillStyle = 'brown';
ctx.fillRect(429, 252, 42, 55);
//triangle
ctx.beginPath();
ctx.moveTo(450, 90);
ctx.lineTo(330, 162);
ctx.lineTo(570, 162);
ctx.closePath();
//color del teulada
ctx.fillStyle = 'red';
ctx.fill();
//RECTANGLE de text
ctx.fillStyle = 'white';
ctx.fillRect(380, 132, 138, 26);
//text
ctx.font = '20.5px Arial';
ctx.fillStyle = 'black';
ctx.fillText('KAME HOUSE', 380, 152);
ctx.beginPath();
ctx.arc(830, 60, 56, 0, Math.PI * 2);
ctx.fillStyle = '#ffd54f';
ctx.fill();

ctx.beginPath();
ctx.arc(450, 60, 8, 0, Math.PI * 2);
ctx.fillStyle = 'black';
ctx.fill();

ctx.fillStyle = 'black';
ctx.fillRect(447, 61, 6, 32);

ctx.fillStyle = '#8C615A';
ctx.fillRect(262, 210, 20, 120);
ctx.fillStyle = '#8C615A';
ctx.fillRect(617, 210, 20, 120);

ctx.beginPath();
ctx.arc(272, 210, 66, Math.PI, 0);
ctx.arc(627, 210, 66, Math.PI, 0);
ctx.fillStyle = '#448713';
ctx.fill();
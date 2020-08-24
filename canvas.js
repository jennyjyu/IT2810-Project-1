function draw() {
  drawStar();
  drawCircle();
  drawEllipse();
  drawRectangle();
  drawRoundrect();
}

function drawStar() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  ctx.beginPath();
  ctx.moveTo(100,10);
  ctx.lineTo(40,198);
  ctx.lineTo(190,78);
  ctx.lineTo(10,78);
  ctx.lineTo(160,198);
  ctx.closePath();
  ctx.fillStyle = "#FFFF66";
  ctx.fill();
}


function drawRectangle() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  ctx.fillStyle = "#CCFF99";
  ctx.fillRect(100,210,200,100);
  ctx.strokeRect(98,208,202,102);
}

function drawEllipse() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  var centerX = 200;
  var centerY = 400;
  var height = 75*2;
  var width = 400;
  ctx.beginPath();
  ctx.moveTo(centerX, centerY-height/2);
  ctx.bezierCurveTo(centerX + width/2, centerY - height/2,
      centerX + width/2, centerY + height/2,
      centerX, centerY + height/2);
  ctx.bezierCurveTo(centerX - width/2, centerY + height/2,
      centerX - width/2, centerY - height/2,
      centerX, centerY - height/2);
  ctx.closePath();
  ctx.fillStyle = "#FFCC66";
  ctx.strokeStyle = "#000000";
  ctx.fill();
  ctx.stroke();
}

function drawCircle() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    ctx.beginPath()
    ctx.moveTo(600,350);
    ctx.arc(500,350,100, 0, 2*Math.PI);
    ctx.closePath();
    ctx.fillStyle = "#CC66FF";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

function drawRoundrect() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  roundRect(ctx,350, 50, 150, 150, 30, true, true);
  ctx.fillStyle = "#CCFFFF";
  ctx.fill();
  ctx.stroke();
}


/** FANT DENNE PÅ STACK OVERFLOW https://stackoverflow.com/questions/1255512/how-to-draw-a-rounded-rectangle-on-html-canvas
 * Draws a rounded rectangle using the current state of the canvas.
 * If you omit the last three params, it will draw a rectangle
 * outline with a 5 pixel border radius
 * @param {CanvasRenderingContext2D} ctx
 * @param {Number} x The top left x coordinate
 * @param {Number} y The top left y coordinate
 * @param {Number} width The width of the rectangle
 * @param {Number} height The height of the rectangle
 * @param {Number} [radius = 5] The corner radius; It can also be an object
 *                 to specify different radii for corners
 * @param {Number} [radius.tl = 0] Top left
 * @param {Number} [radius.tr = 0] Top right
 * @param {Number} [radius.br = 0] Bottom right
 * @param {Number} [radius.bl = 0] Bottom left
 * @param {Boolean} [fill = false] Whether to fill the rectangle.
 * @param {Boolean} [stroke = true] Whether to stroke the rectangle.
 */
function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
  if (typeof stroke == 'undefined') {
    stroke = true;
  }
  if (typeof radius === 'undefined') {
    radius = 5;
  }
  if (typeof radius === 'number') {
    radius = {tl: radius, tr: radius, br: radius, bl: radius};
  } else {
    var defaultRadius = {tl: 0, tr: 0, br: 0, bl: 0};
    for (var side in defaultRadius) {
      radius[side] = radius[side] || defaultRadius[side];
    }
  }
  ctx.beginPath();
  ctx.moveTo(x + radius.tl, y);
  ctx.lineTo(x + width - radius.tr, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
  ctx.lineTo(x + width, y + height - radius.br);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
  ctx.lineTo(x + radius.bl, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
  ctx.lineTo(x, y + radius.tl);
  ctx.quadraticCurveTo(x, y, x + radius.tl, y);
  ctx.closePath();
  if (fill) {
    ctx.fill();
  }
  if (stroke) {
    ctx.stroke();
  }

}

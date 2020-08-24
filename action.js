
$(document).ready(function() {

  $("#circle1").click(function() {
    $(this).hide(1500);
  })

  $("#rectangle").hover(
    function() {
      $(this).css("fill", "#49fc03");
    },
      function() {
        $(this).css("fill","#CCFF99");
  })

  $("#star").click(function() {
    // $(this).css("fill", "#31a305");
    $(this).fadeTo(100, 0.1).fadeTo(200, 1.0);
  })

  $("#roundrect").dblclick(function() {
    $("#circle1").show(1500);
  })


  $("#docButton").click(function() {
    $("#documentation").slideToggle();
  })

  $("#docButton").hover(
    function() {
      $(this).css("background-color", "#333");
      $(this).css("color","white");
    },
    function() {
      $(this).css("background-color", "grey");
      $(this).css("color", "white");
  })


  $(".canvas").click(function() {
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
    ctx.fillStyle = "#FF0000";
    ctx.strokeStyle = "#000000";
    ctx.fill();
    ctx.stroke();
  })

  $(".canvas").dblclick(function() {
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
  })

  $(".canvas").hover(
    function() {
      var canvas = document.getElementById("canvas");
      var ctx = canvas.getContext("2d");

      roundRect(ctx,350, 50, 150, 150, 30, true, true);
      ctx.fillStyle = "#39b8f7";
      ctx.fill();
      ctx.stroke();
    },
    function() {
      var canvas = document.getElementById("canvas");
      var ctx = canvas.getContext("2d");

      roundRect(ctx,350, 50, 150, 150, 30, true, true);
      ctx.fillStyle = "#CCFFFF";
      ctx.fill();
      ctx.stroke();
  })


})

var canvas3 = d3.select("#plot3").append("canvas").node();
var widthCanvas3 = d3.select("#plot3").node().clientWidth;
var heightCanvas3 = d3.select("#plot3").node().clientHeight;

canvas3.width = widthCanvas3;
canvas3.height = heightCanvas3;

var ctx3 = canvas3.getContext("2d");

function cup1 () {
    ctx3.beginPath();
    ctx3.moveTo(39, 287);
    ctx3.lineTo(39, 423);
    ctx3.lineTo(131, 423);
    ctx3.lineTo(131, 287);
    ctx3.stroke();
}

function cup2 () {
    ctx3.beginPath();
    ctx3.moveTo(159, 287);
    ctx3.lineTo(159, 423);
    ctx3.lineTo(251, 423);
    ctx3.lineTo(251, 287);
    ctx3.stroke();
}

function cup3 () {
    ctx3.beginPath();
    ctx3.moveTo(279, 287);
    ctx3.lineTo(279, 423);
    ctx3.lineTo(371, 423);
    ctx3.lineTo(371, 287);
    ctx3.stroke();
}
cup1();
cup2();
cup3();

function beer1 () {
    ctx3.beginPath();
    ctx3.moveTo(40, 400);
    ctx3.lineTo(40, 422);
    ctx3.lineTo(130, 422);
    ctx3.lineTo(130, 400);
    ctx3.fillStyle = "orange"
    ctx3.fill();
}
function beer2 () {
    ctx3.beginPath();
    ctx3.moveTo(160, 380);
    ctx3.lineTo(160, 422);
    ctx3.lineTo(250, 422);
    ctx3.lineTo(250, 380);
    ctx3.fillStyle = "orange"
    ctx3.fill();
}
function beer3 () {
    ctx3.beginPath();
    ctx3.moveTo(280, 320);
    ctx3.lineTo(280, 422);
    ctx3.lineTo(370, 422);
    ctx3.lineTo(370, 320);
    ctx3.fillStyle = "orange"
    ctx3.fill();
}
beer1();
beer2();
beer3();

function foam1 () {
    ctx3.beginPath();
    ctx3.moveTo(40, 310);
    ctx3.lineTo(40, 400);
    ctx3.lineTo(130, 400);
    ctx3.lineTo(130, 310);
    ctx3.fillStyle = "#eddaa8";
    ctx3.fill();
}
function foam2 () {
    ctx3.beginPath();
    ctx3.moveTo(160, 310);
    ctx3.lineTo(160, 380);
    ctx3.lineTo(250, 380);
    ctx3.lineTo(250, 310);
    ctx3.fillStyle = "#eddaa8";
    ctx3.fill();
}
function foam3 () {
    ctx3.beginPath();
    ctx3.moveTo(280, 310);
    ctx3.lineTo(280, 320);
    ctx3.lineTo(370, 320);
    ctx3.lineTo(370, 310);
    ctx3.fillStyle = "#eddaa8";
    ctx3.fill();
}

foam1();
foam2();
foam3();
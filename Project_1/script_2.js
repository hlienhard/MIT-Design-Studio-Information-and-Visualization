var canvas2 = d3.select("#plot2").append("canvas").node();
var widthCanvas2 = d3.select("#plot2").node().clientWidth;
var heightCanvas2 = d3.select("#plot2").node().clientHeight;

canvas2.width = widthCanvas2;
canvas2.height = heightCanvas2;

var ctx2 = canvas2.getContext("2d"); 

function square1() {
    ctx2.rect(145, 302, 130, 130);
    ctx2.stroke();
}

function triangle1() {
    ctx2.beginPath();
    ctx2.moveTo(145, 432);
    ctx2.lineTo(275, 432);
    ctx2.lineTo(275, 302);
    ctx2.lineTo(145, 432);
    ctx2.stroke();
}

function triangle2() {
    ctx2.beginPath();
    ctx2.moveTo(145, 432);
    ctx2.lineTo(275, 432);
    ctx2.lineTo(210, 367);
    ctx2.lineTo(145, 432);
    ctx2.stroke();
}

function trianglesquare() {
    ctx2.beginPath();
    ctx2.moveTo(145, 432);
    ctx2.lineTo(275, 432);
    ctx2.lineTo(275, 367);
    ctx2.lineTo(210, 367);
    ctx2.lineTo(145, 432);
    ctx2.stroke();
    
    ctx2.beginPath();
    ctx2.setLineDash([5, 15]);
    ctx2.moveTo(210, 367);
    ctx2.lineTo(210, 432);
    ctx2.moveTo(210, 367);
    ctx2.lineTo(275,432);
    ctx2.stroke();
}

function square2(){
    ctx2.beginPath();
    ctx2.setLineDash([]);
    ctx2.moveTo(177.5,432);
    ctx2.lineTo(242.5,432);
    ctx2.lineTo(242.5,367);
    ctx2.lineTo(177.5,367);
    ctx2.lineTo(177.5,432);
    ctx2.stroke();
    
    ctx2.beginPath();
    ctx2.setLineDash([5, 15]);
    ctx2.moveTo(177.5,367);
    ctx2.lineTo(242.5,432);
    ctx2.stroke();
}

function diamond(){
    ctx2.beginPath();
    ctx2.setLineDash([]);
    ctx2.moveTo(177.5,367)
    ctx2.lineTo(210,432);
    ctx2.lineTo(242.5,367);
    ctx2.lineTo(210,302);
    ctx2.lineTo(177.5,367);
    ctx2.stroke();
    
    ctx2.beginPath();
    ctx2.moveTo(210,302);
    ctx2.lineTo(210,432);
    ctx2.stroke();
}

function kite(){
    ctx2.beginPath();
    ctx2.moveTo(177.5,367)
    ctx2.lineTo(210,432);
    ctx2.lineTo(242.5,367);
    ctx2.lineTo(210,334.5);
    ctx2.lineTo(177.5,367);
    ctx2.stroke();
    
    ctx2.beginPath();
    ctx2.setLineDash([5, 15]);
    ctx2.moveTo(210,334.5);
    ctx2.lineTo(210,432);
    ctx2.stroke();
}

function pointykite() {
ctx2.beginPath();
    ctx2.setLineDash([]);
    ctx2.moveTo(188,357)
    ctx2.lineTo(210,432);
    ctx2.lineTo(232,357);
    ctx2.lineTo(210,302);
    //ctx2.lineTo(210,334.5);
    ctx2.lineTo(188,357);
    ctx2.stroke();
    
    ctx2.beginPath();
    ctx2.moveTo(210,302);
    ctx2.lineTo(210,340);
    ctx2.lineTo(197,363);
    ctx2.moveTo(210,340);
    ctx2.lineTo(223,363);
    
    ctx2.moveTo(188,357);
    ctx2.lineTo(210,370);
    ctx2.moveTo(232,357);
    ctx2.lineTo(210,370);
    ctx2.lineTo(210,432);
    ctx2.stroke();
    
    
//    ctx2.beginPath();
//    ctx2.setLineDash([5, 15]);
//    ctx2.moveTo(188,357);
//    ctx2.lineTo(232,357);
//    ctx2.stroke();
}

function pentagon() {
ctx2.beginPath();
    ctx2.setLineDash([]);
    ctx2.moveTo(188,397);
    ctx2.lineTo(197,432);
    ctx2.lineTo(223,432);
    
    ctx2.lineTo(232,397);
    ctx2.lineTo(210,342);
    ctx2.lineTo(188,397);
    ctx2.stroke();
    
   
    
    ctx2.beginPath();
    ctx2.setLineDash([5, 15]);
    ctx2.moveTo(210,342);
    ctx2.lineTo(210,432);
    ctx2.stroke();
}

function folddown() {
    ctx2.beginPath();
    ctx2.setLineDash([]);
    ctx2.moveTo(188,397)
    ctx2.lineTo(210,462);
    ctx2.lineTo(232,397);
    ctx2.lineTo(210,374);
    ctx2.lineTo(188,397);
    
    ctx2.moveTo(189,397);
    ctx2.lineTo(190,302);
    ctx2.lineTo(199,385);
    ctx2.moveTo(231,397);
    ctx2.lineTo(230,302);
    ctx2.lineTo(221,385);
    ctx2.stroke();
    
    ctx2.beginPath();
    ctx2.moveTo(188,397);
    ctx2.lineTo(232,397);
    ctx2.stroke();
}

function open() {
    ctx2.beginPath();
    ctx2.moveTo(188,397)
    ctx2.lineTo(210,462);
    ctx2.lineTo(232,397);
    ctx2.lineTo(210,374);
    ctx2.lineTo(188,397);
    
    ctx2.moveTo(189,397);
    ctx2.lineTo(157,302);
    ctx2.lineTo(199,385);
    ctx2.moveTo(231,397);
    ctx2.lineTo(263,302);
    ctx2.lineTo(221,385);
    ctx2.stroke();
    
    ctx2.beginPath();
    ctx2.moveTo(188,397);
    ctx2.lineTo(232,397);
    ctx2.stroke();
}

function beak() {
    ctx2.beginPath();
    ctx2.moveTo(188,397)
    ctx2.lineTo(210,462);
    ctx2.lineTo(232,397);
    ctx2.lineTo(210,374);
    ctx2.lineTo(188,397);
    
    ctx2.moveTo(189,397); //tail
    ctx2.lineTo(157,302);
    ctx2.lineTo(199,385);
    
    ctx2.moveTo(221,385); //head
    ctx2.lineTo(263,322);
    ctx2.lineTo(270,322);
    ctx2.lineTo(285,332);
    ctx2.lineTo(266,330);
    ctx2.lineTo(270,322);
    ctx2.lineTo(231,397);
   
    ctx2.stroke();
    
    ctx2.beginPath();
    ctx2.moveTo(188,397);
    ctx2.lineTo(232,397);
    ctx2.stroke();
}



var date = new Date();
    var hour = date.getHours();
    //var minutes = date.getMinutes();
    //var seconds = date.getSeconds();

if (hour == 1 || hour == 13) {
    square1();
}
if (hour == 2 || hour == 14) {
    triangle1();
}
if (hour == 3 || hour == 15) {
    triangle2();
}
if (hour == 4 || hour == 16) {
    trianglesquare();
}
if (hour == 5 || hour == 17) {
    square2();
}
if (hour == 6 || hour == 18) {
    diamond();
}
if (hour == 7 || hour == 19) {
    kite();
}
if (hour == 8 || hour == 20) {
    pointykite();
}
if (hour == 9 || hour == 21) {
    pentagon();
}
if (hour == 10 || hour == 22) {
    folddown();
}
if (hour == 11 || hour == 23) {
    open();
}
if (hour == 12 || hour == 0) {
    beak();
}

var canvas = document.getElementById("plot1");
canvas.height = document.getElementById("plot1").clientHeight;
canvas.width = document.getElementById("plot1").clientWidth;
var ctx = canvas.getContext("2d");
//ctx.fillstyle = '#030303';

function circle0(){
    ctx.beginPath();
    ctx.arc(70,357,30,0,2*Math.PI);
    ctx.stroke();
}
function circle1(){
    ctx.beginPath();
    ctx.arc(98+65,357,30,0,2*Math.PI);
    ctx.stroke();
}
function circle2(){
    ctx.beginPath();
    ctx.arc(210+50,357,30,0,2*Math.PI);
    ctx.stroke();
}
function circle3(){
    ctx.beginPath();
    ctx.arc(315+30,357,30,0,2*Math.PI);
    ctx.stroke();
}

function halfcircle1(){
    ctx.beginPath();
    ctx.arc(98+65,354,30,0,Math.PI);
    ctx.moveTo (68+65,354);
    ctx.lineTo(128+65,354);
    ctx.stroke();
}
function halfcircle2(){
    ctx.beginPath();
    ctx.arc(210+50,354,30,0,Math.PI);
    ctx.moveTo (180+50,354);
    ctx.lineTo(240+50,354);
    ctx.stroke();
}
function halfcircle3(){
    ctx.beginPath();
    ctx.arc(315+30,354,30,0,Math.PI);
    ctx.moveTo (285+30,354);
    ctx.lineTo(345+30,354);
    ctx.stroke();
}

function triangle1 () {
    ctx.beginPath();
    ctx.moveTo(70+65, 382);
    ctx.lineTo(98+65, 327);
    ctx.lineTo(126+65, 382);
    ctx.lineTo(70+65,382);
    ctx.stroke();
}
function triangle2 () {
    ctx.beginPath();
    ctx.moveTo(182+50, 382);
    ctx.lineTo(210+50, 327);
    ctx.lineTo(238+50, 382);
    ctx.lineTo(182+50,382);
    ctx.stroke();
}
function triangle3 () {
    ctx.beginPath();
    ctx.moveTo(287+30, 382);
    ctx.lineTo(315+30, 327);
    ctx.lineTo(343+30, 382);
    ctx.lineTo(287+30,382);
    ctx.stroke();
}

function rectangle1(){
    ctx.rect(77+65, 332, 50, 50);
    ctx.stroke();
}
function rectangle2 () {
    ctx.rect(182+50, 332, 50, 50);
    ctx.stroke();
}
function rectangle3 () {
    ctx.rect(287+30, 332, 50, 50);
    ctx.stroke();
}

function pentagon1 () {
    ctx.beginPath();
    ctx.moveTo(67+65, 350);
    ctx.lineTo(80+65, 382);
    ctx.lineTo(116+65, 382);
    ctx.lineTo(129+65, 350);
    ctx.lineTo(98+65, 324);
    ctx.lineTo(67+65, 350);
    ctx.stroke();
}
function pentagon2 () {
    ctx.beginPath();
    ctx.moveTo(179+50, 350);
    ctx.lineTo(192+50, 382);
    ctx.lineTo(228+50, 382);
    ctx.lineTo(241+50, 350);
    ctx.lineTo(210+50, 324);
    ctx.lineTo(179+50, 350);
    ctx.stroke();
}
function pentagon3 () {
    ctx.beginPath();
    ctx.moveTo(284+30, 350);
    ctx.lineTo(297+30, 382);
    ctx.lineTo(333+30, 382);
    ctx.lineTo(346+30, 350);
    ctx.lineTo(315+30, 324);
    ctx.lineTo(284+30, 350);
    ctx.stroke();
}

function hexagon1 () {
    ctx.beginPath();
    ctx.moveTo(67+65, 355);
    ctx.lineTo(81+65, 382);
    ctx.lineTo(115+65, 382);
    ctx.lineTo(129+65, 355);
    ctx.lineTo(115+65, 327);
    ctx.lineTo(81+65,327);
    ctx.lineTo(67+65, 355);
    ctx.stroke();
}
function hexagon2 () {
    ctx.beginPath();
    ctx.moveTo(179+50, 355);
    ctx.lineTo(193+50, 382);
    ctx.lineTo(227+50, 382);
    ctx.lineTo(241+50, 355);
    ctx.lineTo(227+50, 327);
    ctx.lineTo(193+50, 327);
    ctx.lineTo(179+50, 355);
    ctx.stroke();
}
function hexagon3 () {
    ctx.beginPath();
    ctx.moveTo(284+30, 355);
    ctx.lineTo(298+30, 382);
    ctx.lineTo(332+30, 382);
    ctx.lineTo(346+30, 355);
    ctx.lineTo(332+30, 327);
    ctx.lineTo(298+30, 327);
    ctx.lineTo(284+30, 355);
    ctx.stroke();
}

function heptagon1 () {
    ctx.beginPath();
    ctx.moveTo(69+65, 363);
    ctx.lineTo(85+65, 382);
    ctx.lineTo(111+65, 382);
    ctx.lineTo(127+65, 363);
    ctx.lineTo(124+65, 340);
    ctx.lineTo(98+65, 324);
    ctx.lineTo(72+65, 340);
    ctx.lineTo(69+65, 363);
    ctx.stroke();
}
function heptagon2 () {
    ctx.beginPath();
    ctx.moveTo(181+50, 363);
    ctx.lineTo(197+50, 382);
    ctx.lineTo(223+50, 382);
    ctx.lineTo(239+50, 363);
    ctx.lineTo(236+50, 340);
    ctx.lineTo(210+50, 324);
    ctx.lineTo(184+50, 340);
    ctx.lineTo(181+50, 363);
    ctx.stroke();
}
function heptagon3 () {
    ctx.beginPath();
    ctx.moveTo(286+30, 363);
    ctx.lineTo(302+30, 382);
    ctx.lineTo(328+30, 382);
    ctx.lineTo(344+30, 363);
    ctx.lineTo(341+30, 340);
    ctx.lineTo(315+30, 324);
    ctx.lineTo(289+30, 340);
    ctx.lineTo(286+30, 363);
    ctx.stroke();
}

function octagon1 () {
    ctx.beginPath();
    ctx.moveTo(69+65, 366);
    ctx.lineTo(85+65, 382);
    ctx.lineTo(111+65, 382);
    ctx.lineTo(127+65, 366);
    ctx.lineTo(127+65, 345);
    ctx.lineTo(111+65, 327);
    ctx.lineTo(85+65, 327);
    ctx.lineTo(69+65, 345);
    ctx.lineTo(69+65, 366);
    ctx.stroke();
}
function octagon2 () {
    ctx.beginPath();
    ctx.moveTo(181+50, 366);
    ctx.lineTo(197+50, 382);
    ctx.lineTo(223+50, 382);
    ctx.lineTo(239+50, 366);
    ctx.lineTo(239+50, 345);
    ctx.lineTo(223+50, 327);
    ctx.lineTo(197+50, 327);
    ctx.lineTo(181+50, 345);
    ctx.lineTo(181+50, 366);
    ctx.stroke();
}
function octagon3 () {
    ctx.beginPath();
    ctx.moveTo(286+30, 366);
    ctx.lineTo(302+30, 382);
    ctx.lineTo(328+30, 382);
    ctx.lineTo(344+30, 366);
    ctx.lineTo(344+30, 345);
    ctx.lineTo(328+30, 327);
    ctx.lineTo(302+30, 327);
    ctx.lineTo(286+30, 345);
    ctx.lineTo(286+30, 366);
    ctx.stroke();
}

function nonagon1 () {
    ctx.beginPath();
    ctx.moveTo(74+65, 369); //bottom edge
    ctx.lineTo(88+65, 382);
    ctx.lineTo(110+65, 382);
    ctx.lineTo(124+65, 369); //bottom edge
    ctx.lineTo(128+65, 351); //middle edge
    ctx.lineTo(118+65, 335); //top edge
    ctx.lineTo(98+65, 327), //peak
    ctx.lineTo(78+65, 335); //top edge
    ctx.lineTo(70+65, 351); //middle edge
    ctx.lineTo(74+65, 369); //bottom edge
    ctx.stroke();
}
function nonagon2 () {
    ctx.beginPath();
    ctx.moveTo(186+50, 369); //bottom edge
    ctx.lineTo(200+50, 382);
    ctx.lineTo(222+50, 382);
    ctx.lineTo(236+50, 369); //bottom edge
    ctx.lineTo(240+50, 351); //middle edge
    ctx.lineTo(230+50, 335); //top edge
    ctx.lineTo(210+50, 327), //peak
    ctx.lineTo(190+50, 335); //top edge
    ctx.lineTo(182+50, 351); //middle edge
    ctx.lineTo(186+50, 369); //bottom edge
    ctx.stroke();
}
function nonagon3 () {
    ctx.beginPath();
    ctx.moveTo(291+30, 369); //bottom edge
    ctx.lineTo(305+30, 382);
    ctx.lineTo(327+30, 382);
    ctx.lineTo(341+30, 369); //bottom edge
    ctx.lineTo(345+30, 351); //middle edge
    ctx.lineTo(335+30, 335); //top edge
    ctx.lineTo(315+30, 327), //peak
    ctx.lineTo(295+30, 335); //top edge
    ctx.lineTo(287+30, 351); //middle edge
    ctx.lineTo(291+30, 369); //bottom edge
    ctx.stroke();
}

//circle0();
//circle1();//circle2();//circle3();//halfcircle1();//triangle1();//triangle2();//triangle3()
//rectangle1();//rectangle3();//rectangle2();//pentagon1();//pentagon2();//pentagon3();
//hexagon1();//hexagon2();//hexagon3();//heptagon1();//heptagon2();//heptagon3();
//octagon1();//octagon2(); //octagon3();//nonagon1();//nonagon2();//nonagon3();

var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();

if (hour == 1 || hour == 13) {
    circle1();
}
if (hour == 2 || hour == 14) {
    halfcircle1();
}
if (hour == 3 || hour == 15) {
    triangle1();
}
if (hour == 4 || hour == 16) {
    rectangle1();
}
if (hour == 5 || hour == 17) {
    pentagon1();
}
if (hour == 6 || hour == 18) {
    hexagon1();
}
if (hour == 7 || hour == 19) {
    heptagon1();
}
if (hour == 8 || hour == 20) {
    octagon1();
}
if (hour == 9 || hour == 21) {
    nonagon1();
}
if (hour == 10 || hour == 22) {
    circle0();
}
if (hour == 11 || hour == 23) {
    circle0();
    circle1();
}
if (hour == 12 || hour == 0) {
    circle0();
    halfcircle1();
}
 
if (minute == 1 || minute == 11 || minute == 21 || minute == 31 ||minute == 41 ||minute == 51) {
    circle3();
}
if (minute == 2 || minute == 12 || minute == 22 || minute == 32 ||minute == 42 ||minute == 52) {
    halfcircle3();
}
if (minute == 3 || minute == 13 || minute == 23 || minute == 33 ||minute == 43 ||minute == 53) {
    triangle3();
}
if (minute == 4 || minute == 14 || minute == 24 || minute == 34 ||minute == 44 ||minute == 54) {
    rectangle3();
}
if (minute == 5 || minute == 15 || minute == 25 || minute == 35 ||minute == 45 ||minute == 55) {
    pentagon3();
}
if (minute == 6 || minute == 16 || minute == 26 || minute == 36 ||minute == 46 ||minute == 56) {
    hexagon3();
}
if (minute == 7 || minute == 17 || minute == 27 || minute == 37 ||minute == 47 ||minute == 57) {
    heptagon3();
}
if (minute == 8 || minute == 18 || minute == 28 || minute == 38 ||minute == 48 ||minute == 58) {
    octagon3();
}
if (minute == 9 || minute == 19 || minute == 29 || minute == 39 ||minute == 49 ||minute == 59) {
    nonagon3();
}


if (minute < 20 && minute >= 10) {
    circle2();
}
if (minute < 30 && minute >= 20) {
    halfcircle2();
}
if (minute < 40 && minute >= 30) {
    triangle2();
}
if (minute < 50 && minute >= 40) {
    rectangle2();
}
if (minute <= 59 && minute >= 50) {
    pentagon2();
}

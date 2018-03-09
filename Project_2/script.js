d3.json("data/boston_weather.json",draw);

var temp =0;
var temp3 =0;
var icon =0;
var humid = 0;
var precip = 0;
var date = new Date();
    var hour = date.getHours();
    var day = date.getDay();

function draw(error,data){
console.log(data);
var daily = (data).daily;
var hourly = (data).hourly;
    icon = hourly.data[0].icon;
    temp = hourly.data[0].temperature;
    temp = Math.round(temp);
    temp3 = daily.data[1].apparentTemperatureHigh;
    temp3 = Math.round(temp3);
    temp4 = daily.data[2].apparentTemperatureHigh;
    temp4 = Math.round(temp4);
    temp5 = daily.data[3].apparentTemperatureHigh;
    temp5 = Math.round(temp5);
    temp6 = daily.data[4].apparentTemperatureHigh;
    temp6 = Math.round(temp6);
    temp7 = daily.data[5].apparentTemperatureHigh;
    temp7 = Math.round(temp7);
    temp8 = daily.data[6].apparentTemperatureHigh;
    temp8 = Math.round(temp8);
    humid = daily.data[0].humidity;
    

    precip = daily.data[0].precipProbability;
    precip = precip*100;
    precip = Math.round(precip);
    precip1 = daily.data[1].precipProbability;
    precip1 = precip1*100;
    precip1 = Math.round(precip1);
    precip2 = daily.data[2].precipProbability;
    precip2 = precip2*100;
    precip2 = Math.round(precip2);
    precip3 = daily.data[3].precipProbability;
    precip3 = precip3*100;
    precip3 = Math.round(precip3);
    precip4 = daily.data[4].precipProbability;
    precip4 = precip4*100;
    precip4 = Math.round(precip4);
    precip5 = daily.data[5].precipProbability;
    precip5 = precip5*100;
    precip5 = Math.round(precip5);
    precip6 = daily.data[6].precipProbability;
    precip6 = precip6*100;
    precip6 = Math.round(precip6);
    
    document.getElementById("precip").innerHTML = precip.toString()+ "%";
    document.getElementById("precip1").innerHTML = precip1.toString()+ "%";
    document.getElementById("precip2").innerHTML = precip2.toString()+ "%";
    document.getElementById("precip3").innerHTML = precip3.toString()+ "%";
    document.getElementById("precip4").innerHTML = precip4.toString()+ "%";
    document.getElementById("precip5").innerHTML = precip5.toString()+ "%";
    document.getElementById("precip6").innerHTML = precip6.toString()+ "%";
    document.getElementById("temp").innerHTML = temp.toString() + "º";
    document.getElementById("temp2").innerHTML = temp.toString()+ "º";
    document.getElementById("temp3").innerHTML = temp3.toString()+ "º";
    document.getElementById("temp4").innerHTML = temp4.toString()+ "º";
    document.getElementById("temp5").innerHTML = temp5.toString()+ "º";
    document.getElementById("temp6").innerHTML = temp6.toString()+ "º";
    document.getElementById("temp7").innerHTML = temp7.toString()+ "º";
    document.getElementById("temp8").innerHTML = temp8.toString()+ "º";
    document.getElementById("image").src = background1();
    document.getElementById("bird").src = bird();
    document.getElementById("image2").src = background2();
    document.getElementById("bird").style = birdpos();
    document.getElementById("Mon").innerHTML = Mon;
    document.getElementById("Tue").innerHTML = Tue;
    document.getElementById("Wed").innerHTML = Wed;
    document.getElementById("Thu").innerHTML = Thu;
    document.getElementById("Fri").innerHTML = Fri;
    document.getElementById("Sat").innerHTML = Sat;
    document.getElementById("Sun").innerHTML = Sun;
    document.getElementById("Mon").style = today1();
    document.getElementById("Tue").style = today2();
    document.getElementById("Wed").style = today3();
    document.getElementById("Thu").style = today4();
    document.getElementById("Fri").style = today5();
    document.getElementById("Sat").style = today6();
    document.getElementById("Sun").style = today7();
    document.getElementById("precip").style = today7();
    document.getElementById("precip1").style = today1();
    document.getElementById("precip2").style = today2();
    document.getElementById("precip3").style = today3();
    document.getElementById("precip4").style = today4();
    document.getElementById("precip5").style = today5();
    document.getElementById("precip6").style = today6();
    document.getElementById("temp2").style = today7();
    document.getElementById("temp3").style = today1();
    document.getElementById("temp4").style = today2();
    document.getElementById("temp5").style = today3();
    document.getElementById("temp6").style = today4();
    document.getElementById("temp7").style = today5();
    document.getElementById("temp8").style = today6();
}

function background1(){
    if (icon == "rain" ) {
       return "rain.png"; 
    }
    if (icon == "snow" && hour >= 17 || hour < 6){
        return "nightsnow.png";
    }
    if (icon == "snow" && hour <= 16){
        return "daysnow.png";
    }
    if (icon == "sunny" && hour <= 16){
    return  "clearday.png";
}
    if (icon == "sunny" && hour >= 17 || hour < 6 ){
    return  "clearnight.png";
}
    
    if (icon == "cloudy" && hour <= 16){
    return  "clearday.png";
}
    if (icon == "cloudy" && hour >= 17 || hour < 6){
     return  "clearnight.png";
}
    if (icon == "partly-cloudy" && hour <= 16){
    return  "clearday.png";
}
    if (icon == "partly-cloudy" && hour >= 17 || hour < 6){
     return  "clearnight.png";
}
     if (icon == "wind" && hour <= 16){
     return  "clearday.png";
}
     if (icon == "wind" && hour >= 17 || hour < 6){
     return  "clearnight.png";
}
}

function bird(){
    return "bird.png";
}
function birdpos(){
    if (humid <= 0.6 && humid >= 0.4){
        return "position: relative; bottom: 675px; left: 200px;";
    }
    else if (humid <= 0.4 && humid >= 0.2){
        return "position: relative; bottom: 680px; left: 140px;";
    }
    else if (humid <= 0.2 && humid >= 0.0){
        return "position: relative; bottom: 685px; left: 90px;";
    }
    else if (humid <= 0.8 && humid >= 0.6){
        return "position: relative; bottom: 670px; left: 260px;";
    }
    else if (humid <= 1 && humid >= 0.8){
        return "position: relative; bottom: 665px; left: 325px;";
    }
}

function background2(){
     if (icon == "rain") {
       return "rainflower.png"; 
    }
    if (icon == "snow"){
        return "snowflower.png";
    }
    
    if (icon == "wind"){
        return "windyflower.png";
    }
    else if (temp < 45){
        return "coldflower.png";
    }
    else {
    return  "warmflower.png";
}
}


var Mon = "Mon";
var Tue = "Tue";
var Wed = "Wed";
var Thu = "Thu";
var Fri = "Fri";
var Sat = "Sat";
var Sun = "Sun";



function today1(){
    if (day == 1){
        return "font-size: 18pt; color: black; text-transform: uppercase;font-weight: bold; font-family:Century Gothic";
}
    else{
        return "font-size: 18pt; color: black; text-transform: capitalize;";
    }
}
function today2(){
    if (day == 2){
        return "font-size: 18pt; color: black; text-transform: uppercase;font-weight: bold;font-family:Century Gothic";
}
    else{
        return "font-size: 18pt; color: black; text-transform: capitalize;";
    }
}
function today3(){
    if (day == 3){
        return "font-size: 18pt; color: black; text-transform: uppercase;font-weight: bold;font-family:Century Gothic";
}
    else{
        return "font-size: 18pt; color: black; text-transform: capitalize;";
    }
}
function today4(){
    if (day == 4){
        return "font-size: 18pt; color: black; text-transform: uppercase;font-weight: bold;font-family:Century Gothic";
}
    else{
        return "font-size: 18pt; color: black; text-transform: capitalize;";
    }
}
function today5(){
    if (day == 5){
        return "font-size: 18pt; color: black; text-transform: uppercase;font-weight: bold;font-family:Century Gothic";
}
    else{
        return "font-size: 18pt; color: black; text-transform: capitalize;";
    }
}
function today6(){
    if (day == 6){
        return "font-size: 18pt; color: black; text-transform: uppercase;font-weight: bold;font-family:Century Gothic";
}
    else{
        return "font-size: 18pt; color: black; text-transform: capitalize;";
    }
}
function today7(){
    if (day == 0){
        return "font-size: 18pt; color: black; text-transform: uppercase;font-weight: bold;font-family:Century Gothic";
}
    else{
        return "font-size: 18pt; color: black; text-transform: capitalize;";
    }
}

    
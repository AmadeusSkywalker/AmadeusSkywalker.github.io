function toggleWords1(){
    SecondHalf = document.getElementById("secondhalf1");
    Icekredit = document.getElementById("icekredit");
    if(SecondHalf.style.display == "block"){
        SecondHalf.style.display = "none";
        Icekredit.style.height = "250px";
    }else{
        SecondHalf.style.display = "block";
        Icekredit.style.height = "600px";
    }
}
document.getElementById("button1").onclick = toggleWords1;
/*
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("toggle-button").onclick = toggleWords;
  });
*/

function toggleWords2(){
    SecondHalf = document.getElementById("secondhalf2");
    Icekredit = document.getElementById("orbital");
    if(SecondHalf.style.display == "block"){
        SecondHalf.style.display = "none";
        Icekredit.style.height = "250px";
    }else{
        SecondHalf.style.display = "block";
        Icekredit.style.height = "830px";
    }
}
document.getElementById("button2").onclick = toggleWords2;


function toggleWords3(){
    SecondHalf = document.getElementById("secondhalf3");
    Icekredit = document.getElementById("ixl");
    if(SecondHalf.style.display == "block"){
        SecondHalf.style.display = "none";
        Icekredit.style.height = "250px";
    }else{
        SecondHalf.style.display = "block";
        Icekredit.style.height = "365px";
    }
}
document.getElementById("button3").onclick = toggleWords3;
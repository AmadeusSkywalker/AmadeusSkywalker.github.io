function toggleWords1(){
    SecondHalf = document.getElementById("secondhalf1");
    Icekredit = document.getElementById("icekredit");
    if(SecondHalf.style.display == "block"){
        SecondHalf.style.display = "none";
        Icekredit.style.height = "20%";
    }else{
        SecondHalf.style.display = "block";
        Icekredit.style.height = "100%";
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
        /*
        Icekredit.style.height = "250px";
        */
        Icekredit.style.height = "20%";
    }else{
        SecondHalf.style.display = "block";
        /*
        Icekredit.style.height = "830px";
        */
        Icekredit.style.height = "100%";
    }
}
document.getElementById("button2").onclick = toggleWords2;


function toggleWords3(){
    SecondHalf = document.getElementById("secondhalf3");
    Icekredit = document.getElementById("ixl");
    if(SecondHalf.style.display == "block"){
        SecondHalf.style.display = "none";
        Icekredit.style.height = "20%";
    }else{
        SecondHalf.style.display = "block";
        Icekredit.style.height = "100%";
    }
}
document.getElementById("button3").onclick = toggleWords3;
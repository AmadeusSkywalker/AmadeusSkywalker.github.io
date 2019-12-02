/**
 * Sets the background color of #q1-container
 *
 * @param {string} color The background color that #q1-container should change to
 */
function setBackgroundColor(color) {
    // TODO: Get the element with the id "q1-container" and set its background color to the input color
    document.getElementById("profile").style.backgroundColor = color;
}

function redButtonClicked() {
    setBackgroundColor("#EF476F");
}
document.getElementById("btn-red").onclick = redButtonClicked;


function yellowButtonClicked(){
    setBackgroundColor("#FFD166");
}
document.getElementById("btn-yellow").onclick = yellowButtonClicked;


function greenButtonClicked(){
    setBackgroundColor("#06D6A0");
}
document.getElementById("btn-green").onclick = greenButtonClicked;


function lightblueButtonClicked(){
    setBackgroundColor("#118AB2");
}
document.getElementById("btn-lightblue").onclick = lightblueButtonClicked;


function originalButtonClicked(){
    setBackgroundColor("#D3CFDD");
}
document.getElementById("btn-original").onclick = originalButtonClicked;
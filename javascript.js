
// Toggle button for hiding/showing elements
function showdemo(objstr) {
    var x = document.getElementById(objstr);
    if (x.style.display === "none") {
        x.style.display = "block"; 
        document.getElementById(objstr + "-button").innerHTML = "Hide " + objstr;
    } else {
        x.style.display = "none";
        document.getElementById(objstr + "-button").innerHTML = "Show " + objstr;
    }		
}



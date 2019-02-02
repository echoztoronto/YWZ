
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


//Slide show swap
var slidenum = 1;
var total = 6;

function slideswap(n) {
    slidenum = slidenum + n;
    if (slidenum === total + 1) {
        slidenum = 1;
    } 
    if (slidenum === 0) {
        slidenum = total;
    }

    switch(slidenum) {
        case 1:
        document.getElementById("slide_image").src="/image/gujian.jpg";
        document.getElementById("slide_cap").textContent="Edited Screenshot of Gu Jian 3";
        break;
        case 2:
        document.getElementById("slide_image").src="/image/gujian2.jpg";
        document.getElementById("slide_cap").textContent="Edited Screenshot of Gu Jian 3";
        break;
        case 3:
        document.getElementById("slide_image").src="/image/elderscroll.jpg";
        document.getElementById("slide_cap").textContent="Screenshot of The Elder Scrolls V";
        break;
        case 4:
        document.getElementById("slide_image").src="/image/elderscroll2.jpg";
        document.getElementById("slide_cap").textContent="Screenshot of The Elder Scrolls V";
        break;
        case 5:
        document.getElementById("slide_image").src="/image/elderscroll3.jpg";
        document.getElementById("slide_cap").textContent="Screenshot of The Elder Scrolls V";
        break;
        case 6:
        document.getElementById("slide_image").src="/image/bird.jpg";
        document.getElementById("slide_cap").textContent="A photo I took in 2012";
        break;        
    }
}
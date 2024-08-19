window.onload = initLinks;

var thePic = 0;
var gallery = ["resources\\images\\elliot1.JPG", "resources\\images\\warehouse1.jpg", "resources\\images\\warped_1.JPG"];

var theText = 0;
var desc = ["elliot with cast of <i>WARPED</i>, 2023", "<i>the warehouse</i>, 2022", "<i>WARPED</i>, 2023"];
//make sure these arrays are the same length for script to work.

function initLinks() {
    if (document.getElementById("prev")) {
        document.getElementById("prev").onclick = processPrevious;
        document.getElementById("next").onclick = processNext;
    }
    rotate();
}

function processPrevious() {
    if (thePic == 0) {
        thePic = gallery.length; //resetting to end of slideshow once beginning is reached.
    }
    if (theText == 0) {
        theText = desc.length;
    }
    thePic--;
    theText--;

    document.getElementById("elliotPic").src = gallery[thePic]; //sets source of img to corrsesponding value in array.
    document.getElementById("picDescription").innerHTML = desc[thePic];
    return false; //stops browser from following link written in HTML.
}

function processNext() {
    thePic++;
    theText++;
    if (thePic == gallery.length) {
        thePic = 0; //resetting to beginning of slideshow once end is reached.
    }
    if (theText == desc.length) {
        theText = 0;
    }

    document.getElementById("elliotPic").src = gallery[thePic];
    document.getElementById("picDescription").innerHTML = desc[thePic];
    return false;
}

function rotate() {
    thePic++;
    theText++;
    if (thePic == gallery.length) {
        thePic = 0;
    }
    if (theText == gallery.length) {
        theText = 0;
    }
    document.getElementById("elliotPic").src = gallery[thePic];
    document.getElementById("picDescription").innerHTML = desc[thePic];

    setTimeout(rotate, 3 * 1000);
}

document.getElementById("emailButton").onclick = sendEmail;

function sendEmail() {
    
    var name = document.getElementById("contactName").value;
    var email = document.getElementById("contactEmail").value;
    var message = "Thanks for sending a message!" + "%0D%0A" + "%0D%0A" + "Name: " + name + "%0D%0A" + "Email: " + email + "%0D%0A" + "Message: " + document.getElementById("contactMessage").value;
    
    var href = "mailto:elliotallen01@gmail.com" + "?subject=Elliot Allen Website Form Submission" + "&body=" + message;
    window.open(href, "_blank")
}
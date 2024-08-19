window.onload = initLinks;

var warehousePic = 0;
var warehousePix = ["resources\\images\\warehouse3.jpeg", "resources\\images\\warehouse2.jpeg", "resources\\images\\warehouse4.jpeg", "resources\\images\\warehouse5.jpeg"]

var warpedPic = 0;
var warpedPix = ["resources\\images\\warped2.jpg", "resources\\images\\warped6.JPG", "resources\\images\\warped7.JPG", "resources\\images\\warped7.JPG", "resources\\images\\warped9.JPG", "resources\\images\\warped11.JPG", "resources\\images\\warped_team.JPG"];

var uhhwtopPic = 0;
var uhhwtopPix = ["resources\\images\\uhhwtop2.jpg", "resources\\images\\uhhwtop5.jpg", "resources\\images\\uhhwtop6.jpg", "resources\\images\\uhhwtop4.jpg", "resources\\images\\uhhwtop7.jpg", "resources\\images\\uhhwtop3.jpg"];

var aphPic = 0;
var aphPix = ["resources\\images\\aph2.JPG", "resources\\images\\aph3.JPG", "resources\\images\\aph4.JPG", "resources\\images\\aph5.JPG", "resources\\images\\aph6.JPG", "resources\\images\\aph7.JPG", "resources\\images\\aph8.JPG"];

var k2togPic = 0;
var k2togPix = ["resources\\images\\k2tog1.jpg", "resources\\images\\k2tog2.jpg", "resources\\images\\k2tog3.jpg", "resources\\images\\k2tog4.jpg", "resources\\images\\k2tog6.jpg", "resources\\images\\k2tog5.jpg"];

var tcbpPic = 0;
var tcbpPix = ["resources\\images\\tcbp7.JPG", "resources\\images\\tcbp3.JPG", "resources\\images\\tcbp2.JPG", "resources\\images\\tcbp4.JPG", "resources\\images\\tcbp5.JPG", "resources\\images\\tcbp6.JPG", "resources\\images\\tcbpumbrella1.PNG", "resources\\images\\tcbpumbrella2.PNG", "resources\\images\\tcbp_team.JPG"];
/*var tcbpCap = 0;
var tcbpCaptions = ["", "", "", "", "", "", "Rhys Luke, director, with custom 'elephant' umbrella.", "Rhys Luke, director, with custom 'elephant' umbrella.", ""];
*/

var vfrPic = 0;
var vfrPix = ["resources\\images\\vfr2.png", "resources\\images\\vfr5.png", "resources\\images\\vfr4.png", "resources\\images\\vfr6.png", "resources\\images\\vfr7.png", "resources\\images\\vfr8.png", "resources\\images\\vfr3.png"];

function initLinks() {
    if (document.getElementById("warehousePrev")) {
        document.getElementById("warehousePrev").onclick = warehousePrevious;
        document.getElementById("warehouseNext").onclick = warehouseNext;
    }
    if (document.getElementById("warpedPrev")) {
        document.getElementById("warpedPrev").onclick = warpedPrevious;
        document.getElementById("warpedNext").onclick = warpedNext;
    }
    if (document.getElementById("uhhwtopPrev")) {
        document.getElementById("uhhwtopPrev").onclick = uhhwtopPrevious;
        document.getElementById("uhhwtopNext").onclick = uhhwtopNext;
    }
    if (document.getElementById("aphPrev")) {
        document.getElementById("aphPrev").onclick = aphPrevious;
        document.getElementById("aphNext").onclick = aphNext;
    }
    if (document.getElementById("tcbpPrev")) {
        document.getElementById("tcbpPrev").onclick = tcbpPrevious;
        document.getElementById("tcbpNext").onclick = tcbpNext;
    }
    if (document.getElementById("k2togPrev")) {
        document.getElementById("k2togPrev").onclick = k2togPrevious;
        document.getElementById("k2togNext").onclick = k2togNext;
    }
    if (document.getElementById("vfrPrev")) {
        document.getElementById("vfrPrev").onclick = vfrPrevious;
        document.getElementById("vfrNext").onclick = vfrNext;
    }
    /*if (document.getElementById("workNext")) {
        projectNext();
        //document.getElementById("workPrev").onclick = projectPrev;
    };*/
}

/*const projects = [
    {
        projName: 'Ape the Immortality',
        projURL: 'ati.html'
    },
    {
        projName: 'WARPED',
        projURL: 'warped.html'
    },
    {
        projName: 'the warehouse',
        projURL: 'warehouse.html'
    },
    {
        projName: 'UHHwtOP',
        projURL: 'uhhwtop.html'
    },
    {
        projName: 'after-party haze',
        projURL: 'aph.html'
    },
    {
        projName: 'the children\'s book play',
        projURL: 'tcbp.html'
    },
    {
        projName: 'variations for relapse',
        projURL: 'vfr.html'
    },
];

var theProj = 0;

function projectNext() {
    theProj++;
    console.log("you got it dude");

    if (theProj == projects.length) {
        theProj = 0; //resetting to beginning of array once end is reached.
    };

    const nextProj = document.getElementById('nextLink');

    nextProj.innerText = projects[theProj + 1].projName;
    nextProj.setAttribute('href', projects[theProj + 1].projURL);

};*/

function warehousePrevious() {
    if (warehousePic == 0) {
        warehousePic = warehousePix.length;
    }
    warehousePic--;
    document.getElementById("warehouseMain").src = warehousePix[warehousePic];
    return false;
}

function warehouseNext() {
    warehousePic++;
    if (warehousePic == warehousePix.length) {
        warehousePic = 0;
    }
    document.getElementById("warehouseMain").src = warehousePix[warehousePic];
    return false;
}

function warpedPrevious() {
    if (warpedPic == 0) {
        warpedPic = warpedPix.length;
    }
    warpedPic--;
    document.getElementById("warpedMain").src = warpedPix[warpedPic];
    return false;
}

function warpedNext() {
    warpedPic++;
    if (warpedPic == warpedPix.length) {
        warpedPic = 0;
    }
    document.getElementById("warpedMain").src = warpedPix[warpedPic];
    return false;
}

function uhhwtopPrevious() {
    if (uhhwtopPic == 0) {
        uhhwtopPic = uhhwtopPix.length;
    }
    uhhwtopPic--;
    document.getElementById("uhhwtopMain").src = uhhwtopPix[uhhwtopPic];
    return false;
}

function uhhwtopNext() {
    uhhwtopPic++;
    if (uhhwtopPic == uhhwtopPix.length) {
        uhhwtopPic = 0;
    }
    document.getElementById("uhhwtopMain").src = uhhwtopPix[uhhwtopPic];
    return false;
}

function aphPrevious() {
    if (aphPic == 0) {
        aphPic = aphPix.length;
    }
    aphPic--;
    document.getElementById("aphMain").src = aphPix[aphPic];
    return false;
}

function aphNext() {
    aphPic++;
    if (aphPic == aphPix.length) {
        aphPic = 0;
    }
    document.getElementById("aphMain").src = aphPix[aphPic];
    return false;
}

function tcbpPrevious() {
    if (tcbpPic == 0) {
        tcbpPic = tcbpPix.length;
    }
    /*if (tcbpCap == 0) {
        tcbpCap = tcbpCaptions.length;
    }*/
    tcbpPic--;
    //tcbpCap--;
    document.getElementById("tcbpMain").src = tcbpPix[tcbpPic];
    //document.getElementById("tcbpText").innerHTML = tcbpCaptions[tcbpCap];
    return false;
}

function tcbpNext() {
    tcbpPic++;
    //tcbpCap++;
    if (tcbpPic == tcbpPix.length) {
        tcbpPic = 0;
    }
    /*if (tcbpCap == tcbpCaptions.length) {
        tcbpCap = 0;
    }*/
    document.getElementById("tcbpMain").src = tcbpPix[tcbpPic];
    //document.getElementById("tcbpText").innerHTML = tcbpCaptions[tcbpCap];
    return false;
}

function k2togPrevious() {
    if (k2togPic == 0) {
        k2togPic = k2togPix.length;
    }
    k2togPic--;
    document.getElementById("k2togMain").src = k2togPix[k2togPic];
    return false;
}

function k2togNext() {
    k2togPic++;
    if (k2togPic == k2togPix.length) {
        k2togPic = 0;
    }
    document.getElementById("k2togMain").src = k2togPix[k2togPic];
    return false;
}

function vfrPrevious() {
    if (vfrPic == 0) {
        vfrPic = vfrPix.length;
    }
    vfrPic--;
    document.getElementById("vfrMain").src = vfrPix[vfrPic];
    return false;
}

function vfrNext() {
    vfrPic++;
    if (vfrPic == vfrPix.length) {
        vfrPic = 0;
    }
    document.getElementById("vfrMain").src = vfrPix[vfrPic];
    return false;
}
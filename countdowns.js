// My Birthday
var BcountDownDate = new Date("Oct 6, 2020").getTime();
var Bx = setInterval(function() {

    var Bnow = new Date().getTime();

    var Bdistance = BcountDownDate - Bnow;

    var Bdays = Math.floor(Bdistance / (1000 * 60 * 60 * 24));
    var Bhours = Math.floor((Bdistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var Bminutes = Math.floor((Bdistance % (1000 * 60 * 60)) / (1000 * 60));
    var Bseconds = Math.floor((Bdistance % (1000 * 60)) / 1000);

    document.getElementById("cd-birthday").innerHTML = Bdays + "d " + Bhours + "h " +
        Bminutes + "m " + Bseconds + "s ";

    if (Bdistance < 0) {
        clearInterval(Bx);
        document.getElementById("cd-birthday").innerHTML = "Happy Birthday!";
    }
}, 1000);

// Christmas
var CcountDownDate = new Date("Dec 25, 2020").getTime();
var Cx = setInterval(function() {

    var Cnow = new Date().getTime();

    var Cdistance = CcountDownDate - Cnow;

    var Cdays = Math.floor(Cdistance / (1000 * 60 * 60 * 24));
    var Chours = Math.floor((Cdistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var Cminutes = Math.floor((Cdistance % (1000 * 60 * 60)) / (1000 * 60));
    var Cseconds = Math.floor((Cdistance % (1000 * 60)) / 1000);

    document.getElementById("cd-christmas").innerHTML = Cdays + "d " + Chours + "h " +
        Cminutes + "m " + Cseconds + "s ";

    if (Cdistance < 0) {
        clearInterval(Cx);
        document.getElementById("cd-christmas").innerHTML = "Merry Christmas!";
    }
}, 1000);

// Thanksgiving
var TcountDownDate = new Date("Nov 26, 2020").getTime();
var Tx = setInterval(function() {

    var Tnow = new Date().getTime();

    var Tdistance = TcountDownDate - Tnow;

    var Tdays = Math.floor(Tdistance / (1000 * 60 * 60 * 24));
    var Thours = Math.floor((Tdistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var Tminutes = Math.floor((Tdistance % (1000 * 60 * 60)) / (1000 * 60));
    var Tseconds = Math.floor((Tdistance % (1000 * 60)) / 1000);

    document.getElementById("cd-thanksgiving").innerHTML = Tdays + "d " + Thours + "h " +
        Tminutes + "m " + Tseconds + "s ";

    if (Tdistance < 0) {
        clearInterval(Tx);
        document.getElementById("cd-thanksgiving").innerHTML = "Happy Thanksgiving!";
    }
}, 1000);

// Halloween
var HcountDownDate = new Date("Oct 31, 2020").getTime();
var Hx = setInterval(function() {

    var Hnow = new Date().getTime();

    var Hdistance = HcountDownDate - Hnow;

    var Hdays = Math.floor(Hdistance / (1000 * 60 * 60 * 24));
    var Hhours = Math.floor((Hdistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var Hminutes = Math.floor((Hdistance % (1000 * 60 * 60)) / (1000 * 60));
    var Hseconds = Math.floor((Hdistance % (1000 * 60)) / 1000);

    document.getElementById("cd-halloween").innerHTML = Hdays + "d " + Hhours + "h " +
        Hminutes + "m " + Hseconds + "s ";

    if (Hdistance < 0) {
        clearInterval(Hx);
        document.getElementById("cd-halloween").innerHTML = "Happy Spooky Day!";
    }
}, 1000);

// St. Patricks Day
var ScountDownDate = new Date("Mar 17, 2021").getTime();
var Sx = setInterval(function() {

    var Snow = new Date().getTime();

    var Sdistance = ScountDownDate - Snow;

    var Sdays = Math.floor(Sdistance / (1000 * 60 * 60 * 24));
    var Shours = Math.floor((Sdistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var Sminutes = Math.floor((Sdistance % (1000 * 60 * 60)) / (1000 * 60));
    var Sseconds = Math.floor((Sdistance % (1000 * 60)) / 1000);

    document.getElementById("cd-stpatty").innerHTML = Sdays + "d " + Shours + "h " +
        Sminutes + "m " + Sseconds + "s ";

    if (Sdistance < 0) {
        clearInterval(Sx);
        document.getElementById("cd-stpatty").innerHTML = "Happy St. Patricks Day!";
    }
}, 1000);

// Easter
var EcountDownDate = new Date("Apr 4, 2021").getTime();
var Ex = setInterval(function() {

    var Enow = new Date().getTime();

    var Edistance = EcountDownDate - Enow;

    var Edays = Math.floor(Edistance / (1000 * 60 * 60 * 24));
    var Ehours = Math.floor((Edistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var Eminutes = Math.floor((Edistance % (1000 * 60 * 60)) / (1000 * 60));
    var Eseconds = Math.floor((Edistance % (1000 * 60)) / 1000);

    document.getElementById("cd-easter").innerHTML = Edays + "d " + Ehours + "h " +
        Eminutes + "m " + Eseconds + "s ";

    if (Edistance < 0) {
        clearInterval(Ex);
        document.getElementById("cd-easter").innerHTML = "Happy Easter!";
    }
}, 1000);

// Hack Club Anniversary
var HCcountDownDate = new Date("Sep 11, 2020").getTime();
var HCx = setInterval(function() {

    var HCnow = new Date().getTime();

    var HCdistance = HCcountDownDate - HCnow;

    var HCdays = Math.floor(HCdistance / (1000 * 60 * 60 * 24));
    var HChours = Math.floor((HCdistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var HCminutes = Math.floor((HCdistance % (1000 * 60 * 60)) / (1000 * 60));
    var HCseconds = Math.floor((HCdistance % (1000 * 60)) / 1000);

    document.getElementById("cd-hcversary").innerHTML = HCdays + "d " + HChours + "h " +
        HCminutes + "m " + HCseconds + "s ";

    if (HCdistance < 0) {
        clearInterval(HCx);
        document.getElementById("cd-hcversary").innerHTML = "Happy HC Anniversary!";
    }
}, 1000);
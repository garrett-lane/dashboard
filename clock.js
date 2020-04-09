function GetClock() {
    var d = new Date();
    var nmonth = d.getMonth(),
        ndate = d.getDate(),
        nyear = d.getFullYear();
    var nhour = d.getHours(),
        nmin = d.getMinutes(),
        nsec = d.getSeconds();
    if (nmin <= 9) nmin = "0" + nmin;
    if (nsec <= 9) nsec = "0" + nsec;

    var clockTime = nhour + ":" + nmin + ":" + nsec;
    var clockDate = (nmonth + 1) + "/" + ndate + "/" + nyear;
    document.getElementById('clocktime').innerHTML = clockTime;
    document.getElementById('clockdate').innerHTML = clockDate;
}

GetClock();
setInterval(GetClock, 1000);
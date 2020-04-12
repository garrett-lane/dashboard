function GetClock() {
    var d = new Date();
    var month = d.getMonth();
    var date = d.getDate();
    var year = d.getFullYear();
    var hour = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();
    var day = d.getDay();
    if (min <= 9) min = "0" + min;
    if (sec <= 9) sec = "0" + sec;
    if (hour <= 9) hour = "0" + hour;

    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    day = weekday[day]

    var monthTXT = new Array(12)
    monthTXT[0] = "January";
    monthTXT[1] = "February";
    monthTXT[2] = "March";
    monthTXT[3] = "April";
    monthTXT[4] = "May";
    monthTXT[5] = "June";
    monthTXT[6] = "July";
    monthTXT[7] = "August";
    monthTXT[8] = "September";
    monthTXT[9] = "October";
    monthTXT[10] = "November";
    monthTXT[11] = "December";
    month = monthTXT[month]

    var dayArray = new Array(31)
    dayArray[0] = "1st";
    dayArray[1] = "2nd";
    dayArray[2] = "3rd";
    dayArray[3] = "4th";
    dayArray[4] = "5th";
    dayArray[5] = "6th";
    dayArray[6] = "7th";
    dayArray[7] = "8th";
    dayArray[8] = "9th";
    dayArray[9] = "10th";
    dayArray[10] = "11th";
    dayArray[11] = "12th";
    dayArray[12] = "13th";
    dayArray[13] = "14th";
    dayArray[14] = "15th";
    dayArray[15] = "16th";
    dayArray[16] = "17th";
    dayArray[17] = "18th";
    dayArray[18] = "19th";
    dayArray[19] = "20th";
    dayArray[20] = "21st";
    dayArray[21] = "22nd";
    dayArray[22] = "23rd";
    dayArray[23] = "24th";
    dayArray[24] = "25th";
    dayArray[25] = "26th";
    dayArray[26] = "27th";
    dayArray[27] = "28th";
    dayArray[28] = "29th";
    dayArray[29] = "30th";
    dayArray[30] = "31st";
    var daySuffix = dayArray[(date - 1)]

    dayFormat = day + ", " + month + " " + daySuffix + ", " + year

    var clockTime = hour + ":" + min + ":" + sec;
    // var clockDate = (month + 1) + "/" + date + "/" + year;
    document.getElementById('clocktime').innerText = clockTime;
    // document.getElementById('clockdate').innerText = clockDate;
    document.getElementById('dayFormat').innerHTML = dayFormat;
}

GetClock();
setInterval(GetClock, 1000);
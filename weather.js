const url = "https://api.openweathermap.org/data/2.5/weather?zip=51106,US&units=imperial&appid=6335342b1772199128a9970299a65c4c"
fetch(url)
    .then(response => response.json())
    .then((data) => {
        // Description of current weather
        document.getElementById("weather-desc").innerText = "Weather: " + data.weather[0].description;

        // Current real tempature
        let realTemp = data.main.temp
        realTemp = realTemp.toFixed(0)
        document.getElementById("weather-temp").innerText = "Tempature: " + realTemp + "°F";

        // Current feels like/wind chill tempature
        let feelsLike = data.main.temp
        feelsLike = feelsLike.toFixed(0)
        document.getElementById("weather-feelsLike").innerText = "Feels Like Tempature: " + feelsLike + "°F";

        // Minimum real tempature for the day
        // let minTemp = data.main.temp_min
        // minTemp = minTemp.toFixed(0)
        // document.getElementById("weather-minTemp").innerText = "Minimum Tempature: " + minTemp + "°F";

        // Maximum real tempature for the day
        // let maxTemp = data.main.temp_max
        // maxTemp = maxTemp.toFixed(0)
        // document.getElementById("weather-maxTemp").innerText = "Maximum Tempature: " + maxTemp + "°F";

        // Current wind speed
        let windSpeed = data.wind.speed
        windSpeed = windSpeed.toFixed(0)
        document.getElementById("weather-windSpeed").innerText = "Wind Speed: " + windSpeed + " mph";

        // Current wind direction
        let windDeg = data.wind.deg;
        if (windDeg < 11.25) {
            windDeg = "North";
        } else if (windDeg < 33.75) {
            windDeg = "North-Northeast";
        } else if (windDeg < 56.25) {
            windDeg = "Northeast";
        } else if (windDeg < 78.75) {
            windDeg = "East-Northeast";
        } else if (windDeg < 101.25) {
            windDeg = "East";
        } else if (windDeg < 123.75) {
            windDeg = "East-Southeast";
        } else if (windDeg < 146.25) {
            windDeg = "Southeast";
        } else if (windDeg < 168.75) {
            windDeg = "South-Southeast";
        } else if (windDeg < 191.25) {
            windDeg = "South";
        } else if (windDeg < 213.75) {
            windDeg = "South-Southwest";
        } else if (windDeg < 236.25) {
            windDeg = "Southwest";
        } else if (windDeg < 258.75) {
            windDeg = "West-Southwest";
        } else if (windDeg < 281.25) {
            windDeg = "West";
        } else if (windDeg < 303.75) {
            windDeg = "West-Northwest";
        } else if (windDeg < 326.25) {
            windDeg = "Northwest";
        } else if (windDeg < 348.75) {
            windDeg = "North-Northwest";
        } else if (windDeg < 360) {
            windDeg = "North";
        } else {
            windDeg = "Error";
        }
        document.getElementById("weather-windDirection").innerText = "Wind Direction: " + windDeg;

        // Current visibility
        let vis = data.visibility
        vis = vis / 1609
        if (vis > 2.09) {
            vis = vis.toFixed(0)
        } else if (vis < 2.1) {
            vis = vis.toFixed(1)
        } else if (vis < 1.1) {
            vis = vis.toFixed(3)
        } else {
            vis = "Error"
        }
        document.getElementById("weather-vis").innerText = "Visibility: " + vis + " miles";

        let sunrise = data.sys.sunrise
        var srdate = new Date(sunrise * 1000);
        var srhours = srdate.getHours();
        var srminutes = "0" + srdate.getMinutes();
        sunrise = srhours + ':' + srminutes.substr(-2)
        document.getElementById("weather-sunrise").innerText = "Sunrise: " + sunrise

        let sunset = data.sys.sunset
        var ssdate = new Date(sunset * 1000);
        var sshours = ssdate.getHours();
        srhours = srhours - 12
        var ssminutes = "0" + ssdate.getMinutes();
        sunset = sshours + ':' + ssminutes.substr(-2)
        document.getElementById("weather-sunset").innerText = "Sunset: " + sunset
    })
    .catch(err => console.error(err))
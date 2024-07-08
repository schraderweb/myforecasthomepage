function generateForecast() {
    const morningClouds = document.getElementById("morning-clouds").value;
    const afternoonClouds = document.getElementById("afternoon-clouds").value;
    const eveningClouds = document.getElementById("evening-clouds").value;
    const nightClouds = document.getElementById("night-clouds").value;

    const morningPrecip = document.getElementById("morning-precip").value;
    const afternoonPrecip = document.getElementById("afternoon-precip").value;
    const eveningPrecip = document.getElementById("evening-precip").value;
    const nightPrecip = document.getElementById("night-precip").value;
    const precipPossible = document.getElementById("precip-possible").checked;

    const windSpeed = document.getElementById("wind-speed").value;
    const windDirection = document.getElementById("wind-direction").value;
    const windGusts = document.getElementById("wind-gusts").checked;

    let forecast = "";

    if (morningClouds || afternoonClouds || eveningClouds || nightClouds) {
        forecast += "Cloudiness: ";
        if (morningClouds) forecast += `Morning: ${morningClouds}. `;
        if (afternoonClouds) forecast += `Afternoon: ${afternoonClouds}. `;
        if (eveningClouds) forecast += `Evening: ${eveningClouds}. `;
        if (nightClouds) forecast += `Night: ${nightClouds}. `;
    }

    if (morningPrecip || afternoonPrecip || eveningPrecip || nightPrecip) {
        forecast += "Precipitation: ";
        if (precipPossible) forecast += "Possible ";
        if (morningPrecip) forecast += `Morning: ${morningPrecip}. `;
        if (afternoonPrecip) forecast += `Afternoon: ${afternoonPrecip}. `;
        if (eveningPrecip) forecast += `Evening: ${eveningPrecip}. `;
        if (nightPrecip) forecast += `Night: ${nightPrecip}. `;
    }

    if (windSpeed || windDirection || windGusts) {
        forecast += "Winds: ";
        if (windSpeed) forecast += `${windSpeed} mph `;
        if (windDirection) forecast += `from the ${windDirection} `;
        if (windGusts) forecast += "with gusts ";
    }

    document.getElementById("forecast-output").innerText = forecast;
}

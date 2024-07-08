function generateForecast() {
    const clouds = document.getElementById("clouds").value;
    const cloudsTime = document.getElementById("cloudsTime").value;
    const precipitation = document.getElementById("precipitation").value;
    const precipitationTime = document.getElementById("precipitationTime").value;
    const precipitationType = document.getElementById("precipitationType").value;
    const windDirection = document.getElementById("windDirection").value;
    const windSpeed = document.getElementById("windSpeed").value;
    const windGusts = document.getElementById("windGusts").value;

    let forecast = "";

    // Construct the cloud forecast
    if (clouds) {
        if (cloudsTime) {
            forecast += `${clouds} in the ${cloudsTime}`;
        } else {
            forecast += `${clouds} all day`;
        }
    }

    // Construct the precipitation forecast
    if (precipitation && precipitation !== "None") {
        if (forecast) forecast += " with ";
        if (precipitationType === "possible") {
            forecast += `possible ${precipitation.toLowerCase()}`;
        } else {
            forecast += `${precipitation.toLowerCase()}`;
        }
        if (precipitationTime) {
            forecast += ` in the ${precipitationTime}`;
        } else {
            forecast += ` throughout the day`;
        }
    }

    // Construct the wind forecast
    if (windDirection || windSpeed) {
        if (forecast) forecast += ", ";
        forecast += windSpeed > 0 ? `${windDirection} winds around ${windSpeed} mph` : "calm winds";
        if (windGusts === "gusts") {
            forecast += " with gusts";
        }
    }

    // Capitalize the first letter and finalize the forecast
    forecast = forecast.charAt(0).toUpperCase() + forecast.slice(1) + ".";
    document.getElementById("forecastOutput").innerText = forecast;
}

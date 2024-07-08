function generateForecast() {
    const times = ['morning', 'afternoon', 'evening', 'night'];
    let forecast = '';
    let prevClouds = '';
    let prevPrecipitation = '';

    times.forEach(time => {
        const clouds = document.getElementById(`clouds-${time}`).value;
        const precipitation = document.getElementById(`precipitation-${time}`).value;

        // Determine cloud summary
        if (clouds !== prevClouds) {
            if (forecast) forecast += ' ';
            forecast += `${capitalizeFirstLetter(clouds)} ${time}`;
            prevClouds = clouds;
        }

        // Determine precipitation summary
        if (precipitation !== 'None' && precipitation !== prevPrecipitation) {
            if (forecast) forecast += '. ';
            forecast += `Expect ${precipitation.toLowerCase()} ${time}`;
            prevPrecipitation = precipitation;
        }
    });

    // Add wind information
    const windSpeed = document.getElementById('wind-speed').value;
    const windDirection = document.getElementById('wind-direction').value;
    const windGusts = document.getElementById('wind-gusts').value;

    if (forecast) forecast += '. ';
    if (windSpeed > 0) {
        forecast += `Winds from the ${windDirection} around ${windSpeed} mph`;
        if (windGusts > 0) forecast += ` with gusts up to ${windGusts} mph.`;
        else forecast += '.';
    } else {
        forecast += 'Calm winds.';
    }

    // Display the generated forecast
    document.getElementById('forecast-output').innerText = forecast.trim();
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function generateForecast() {
    const morningClouds = document.getElementById('clouds-morning').value;
    const afternoonClouds = document.getElementById('clouds-afternoon').value;
    const morningPrecipitation = document.getElementById('precipitation-morning').value;
    const windSpeed = document.getElementById('wind-speed').value;
    const windDirection = document.getElementById('wind-direction').value;

    let forecast = '';

    // Determine cloud coverage summary
    if (morningClouds === afternoonClouds) {
        forecast += `${morningClouds} all day. `;
    } else {
        if (morningClouds !== 'Clear') {
            forecast += `${morningClouds} in the morning, `;
        }
        if (afternoonClouds !== 'Clear') {
            forecast += `then ${afternoonClouds} in the afternoon. `;
        }
    }

    // Determine precipitation summary
    if (morningPrecipitation !== 'None') {
        forecast += `Expect ${morningPrecipitation.toLowerCase()} in the morning. `;
    }

    // Add wind information
    if (windSpeed > 0) {
        forecast += `Winds from the ${windDirection} around ${windSpeed} mph.`;
    } else {
        forecast += 'Calm winds.';
    }

    // Display the generated forecast
    document.getElementById('forecast-output').innerText = forecast.trim();
}

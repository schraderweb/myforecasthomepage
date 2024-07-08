function generateForecast() {
    const times = ['morning', 'afternoon', 'evening', 'night'];
    const forecastParts = [];
    let previousConditions = {};

    times.forEach(time => {
        const clouds = document.getElementById(`clouds-${time}`).value;
        const precipitation = document.getElementById(`precipitation-${time}`).value;
        const possible = document.getElementById(`possible-${time}`).checked;

        // Cloud summary
        if (clouds && (!previousConditions.clouds || clouds !== previousConditions.clouds)) {
            const cloudsSummary = `${capitalizeFirstLetter(clouds.toLowerCase())} in the ${time}`;
            forecastParts.push(cloudsSummary);
            previousConditions.clouds = clouds;
        }

        // Precipitation summary
        if (precipitation !== 'None' && (!previousConditions.precipitation || precipitation !== previousConditions.precipitation)) {
            const precipitationSummary = `${possible ? 'Possible ' : ''}${precipitation.toLowerCase()} in the ${time}`;
            forecastParts.push(precipitationSummary);
            previousConditions.precipitation = precipitation;
        }
    });

    // Wind information
    const windSpeed = document.getElementById('wind-speed').value;
    const windDirection = document.getElementById('wind-direction').value;
    const windGusts = document.getElementById('wind-gusts').value;

    if (windSpeed > 0) {
        const windSummary = `Winds from the ${windDirection} around ${windSpeed} mph`;
        if (windGusts > 0) {
            windSummary += ` with gusts up to ${windGusts} mph`;
        }
        forecastParts.push(windSummary);
    }

    // Combine forecast parts
    const forecastOutput = forecastParts.join('. ') + '.';
    document.getElementById('forecast-output').innerText = forecastOutput;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

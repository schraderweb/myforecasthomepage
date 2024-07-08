function generateForecast() {
    const morningClouds = document.getElementById('morningClouds').value;
    const afternoonClouds = document.getElementById('afternoonClouds').value;
    const eveningClouds = document.getElementById('eveningClouds').value;
    const nightClouds = document.getElementById('nightClouds').value;

    const morningPrecipitation = document.getElementById('morningPrecipitation').value;
    const afternoonPrecipitation = document.getElementById('afternoonPrecipitation').value;
    const eveningPrecipitation = document.getElementById('eveningPrecipitation').value;
    const nightPrecipitation = document.getElementById('nightPrecipitation').value;

    const morningPrecipitationPossible = document.getElementById('morningPrecipitationPossible').checked;
    const afternoonPrecipitationPossible = document.getElementById('afternoonPrecipitationPossible').checked;
    const eveningPrecipitationPossible = document.getElementById('eveningPrecipitationPossible').checked;
    const nightPrecipitationPossible = document.getElementById('nightPrecipitationPossible').checked;

    const windSpeed = document.getElementById('windSpeed').value;
    const windDirection = document.getElementById('windDirection').value;
    const windGusts = document.getElementById('windGusts').checked;

    let forecast = '';

    // Combine cloud conditions
    if (morningClouds === afternoonClouds && afternoonClouds === eveningClouds && eveningClouds === nightClouds) {
        forecast += `${morningClouds} all day. `;
    } else {
        if (morningClouds) forecast += `${morningClouds} in the morning. `;
        if (afternoonClouds) forecast += `${afternoonClouds} in the afternoon. `;
        if (eveningClouds) forecast += `${eveningClouds} in the evening. `;
        if (nightClouds) forecast += `${nightClouds} at night. `;
    }

    // Combine precipitation conditions
    if (morningPrecipitation === afternoonPrecipitation && afternoonPrecipitation === eveningPrecipitation && eveningPrecipitation === nightPrecipitation) {
        forecast += `${morningPrecipitation} all day. `;
    } else {
        if (morningPrecipitation !== "No precipitation") {
            forecast += `${morningPrecipitationPossible ? 'Possible ' : ''}${morningPrecipitation} in the morning. `;
        }
        if (afternoonPrecipitation !== "No precipitation") {
            forecast += `${afternoonPrecipitationPossible ? 'Possible ' : ''}${afternoonPrecipitation} in the afternoon. `;
        }
        if (eveningPrecipitation !== "No precipitation") {
            forecast += `${eveningPrecipitationPossible ? 'Possible ' : ''}${eveningPrecipitation} in the evening. `;
        }
        if (nightPrecipitation !== "No precipitation") {
            forecast += `${nightPrecipitationPossible ? 'Possible ' : ''}${nightPrecipitation} at night. `;
        }
    }

    // Add wind conditions
    if (windSpeed > 0) {
        forecast += `Winds from the ${windDirection} around ${windSpeed} mph${windGusts ? ' with gusts' : ''}.`;
    } else {
        forecast += 'Calm winds.';
    }

    document.getElementById('forecast').innerText = forecast;
}

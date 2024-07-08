function generateForecast() {
    const morningClouds = document.getElementById('morningClouds').value;
    const afternoonClouds = document.getElementById('afternoonClouds').value;
    const eveningClouds = document.getElementById('eveningClouds').value;
    const nightClouds = document.getElementById('nightClouds').value;

    const morningPrecip = document.getElementById('morningPrecip').value;
    const afternoonPrecip = document.getElementById('afternoonPrecip').value;
    const eveningPrecip = document.getElementById('eveningPrecip').value;
    const nightPrecip = document.getElementById('nightPrecip').value;

    const windSpeed = document.getElementById('windSpeed').value;
    const windDirection = document.getElementById('windDirection').value;
    const windGusts = document.getElementById('windGusts').value;

    let forecast = '';

    if (morningClouds === afternoonClouds && afternoonClouds === eveningClouds && eveningClouds === nightClouds) {
        forecast += `${morningClouds} all day. `;
    } else {
        if (morningClouds) forecast += `${morningClouds} in the morning. `;
        if (afternoonClouds) forecast += `${afternoonClouds} in the afternoon. `;
        if (eveningClouds) forecast += `${eveningClouds} in the evening. `;
        if (nightClouds) forecast += `${nightClouds} at night. `;
    }

    if (morningPrecip !== 'None') forecast += `${morningPrecip} in the morning. `;
    if (afternoonPrecip !== 'None') forecast += `${afternoonPrecip} in the afternoon. `;
    if (eveningPrecip !== 'None') forecast += `${eveningPrecip} in the evening. `;
    if (nightPrecip !== 'None') forecast += `${nightPrecip} at night. `;

    if (windSpeed > 0) {
        forecast += `${windDirection} winds around ${windSpeed} mph. `;
        if (windGusts > 0) forecast += `Gusts up to ${windGusts} mph. `;
    } else {
        forecast += 'Calm winds. ';
    }

    document.getElementById('forecast').innerText = forecast;
}

function generateForecast() {
    // Get values from HTML
    const clouds = document.getElementById('clouds').value;
    const sunshine = document.getElementById('sunshine').value;
    const rain = document.getElementById('rain').value;
    const timePeriod = document.getElementById('time-period').value;
    const windSpeed = parseInt(document.getElementById('wind-speed').value);
    const windDirection = document.getElementById('wind-direction').value;
    const windGusts = document.getElementById('wind-gusts').checked;

    const thunderstorms = document.getElementById('thunderstorms').checked;
    const blizzard = document.getElementById('blizzard').checked;
    const heavySnow = document.getElementById('heavy-snow').checked;
    const snow = document.getElementById('snow').checked;
    const lightSnow = document.getElementById('light-snow').checked;

    let forecast = [];

    // Cloud coverage
    if (clouds !== 'none') {
        forecast.push(`${clouds.replace('-', ' ')} skies`);
    }

    // Sunshine
    if (sunshine !== 'none') {
        forecast.push(sunshine.replace('-', ' '));
    }

    // Rain
    if (rain !== 'none') {
        forecast.push(rain === 'possible' ? 'possible rain' : rain.replace('-', ' '));
    }

    // Special conditions
    if (thunderstorms) forecast.push('possible thunderstorms');
    if (blizzard) forecast.push('blizzard conditions');
    if (heavySnow) forecast.push('heavy snow');
    if (snow) forecast.push('snow');
    if (lightSnow) forecast.push('light snow');

    // Time period
    if (timePeriod !== 'all-day') {
        forecast.push(`in the ${timePeriod.replace('-', ' ')}`);
    } else {
        forecast.push('all day');
    }

    // Wind
    if (windSpeed > 0 || windGusts) {
        let windDesc = windSpeed === 0 ? 'calm winds' : `winds around ${windSpeed} mph`;
        if (windDirection !== 'none') {
            windDesc += ` from the ${windDirection}`;
        }
        if (windGusts) {
            windDesc += ' with gusts';
        }
        forecast.push(windDesc);
    }

    // Combine forecast
    document.getElementById('forecast-output').innerText = forecast.join(' ');
}

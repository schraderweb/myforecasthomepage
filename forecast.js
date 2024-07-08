function generateForecast() {
    const times = ['morning', 'afternoon', 'evening', 'night'];
    let forecast = '';
    let prevClouds = '';
    let prevPrecipitation = '';

    times.forEach(time => {
        const clouds = document.getElementById(`clouds-${time}`).value;
        const precipitation = document.getElementById(`precipitation-${time}`).value;
        const possible = document.getElementById(`possible-${time}`).checked;

        // Cloud summary
        if (clouds !== prevClouds) {
            if (forecast) forecast += ' ';
            forecast += `${capitalizeFirstLetter(clouds)} in the ${time}`;
            prevClouds = clouds;
        }

        // Precipitation summary
        if (precipitation !== 'None' && precipitation !== prevPrecipitation) {
            if (forecast) forecast += '. ';
            forecast += `${possible ? 'Possible ' : ''}${precipitation.toLowerCase()} in the ${time}`;
            prevPrecipitation = precipitation;
        }
    });

    // Wind information
    const windSpeed = document.getElementById('wind-speed').value;
    const windDirection = document.getElementById('wind-direction').value;
    const windGusts = document.getElementById('wind-gusts').value;

    if (forecast) forecast += '. ';
    if (windSpeed > 0) {
       

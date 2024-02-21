fetch('https://api.weather.gov/gridpoints/APX/81,45/forecast/hourly?units=us')
.then(response => response.json())
.then(data => {
    let temperature = data.properties.periods[0].temperature;
    let dewpoint = data.properties.periods[0].dewpoint.value;
    // Reduce the decimal places to 2 and convert to Fahrenheit
    let dewpointF = (dewpoint * 9/5 + 32).toFixed(2);

    // Check if <temp> tag exists, if so update its content
    let tempElement = document.querySelector('temp');
    if(tempElement) {
        tempElement.textContent = `${temperature}°F`;
    }

    // Check if <dew> tag exists, if so update its content
    let dewElement = document.querySelector('dew');
    if(dewElement) {
        dewElement.textContent = `${dewpointF}°F`; <html> <p> Dew Point* <p> </html> 
    }
})
.catch(error => console.error('Error:', error));




fetch('https://api.weather.gov/gridpoints/APX/81,45/forecast/hourly?units=us')
.then(response => response.json())
.then(data => {
    let windDirection = data.properties.periods[0].windDirection;
    let arrow = document.querySelector('.box-small .arrow');
    let angle;

    switch(windDirection) {
        case 'N':
            angle = 0;
            break;
        case 'NE':
            angle = 45;
            break;
        case 'E':
            angle = 90;
            break;
        case 'SE':
            angle = 135;
            break;
        case 'S':
            angle = 180;
            break;
        case 'SW':
            angle = 225;
            break;
        case 'W':
            angle = 270;
            break;
        case 'NW':
            angle = 315;
            break;
    }

    arrow.style.transform = `rotate(${angle}deg)`;
})
.catch(error => console.error('Error:', error));











// Define the mapping
var directions = {
    "N": "North",
    "NE": "North-East",
    "E": "East",
    "SE": "South-East",
    "S": "South",
    "SW": "South-West",
    "W": "West",
    "NW": "North-West"
};

// Make a request to the API
fetch('https://api.weather.gov/gridpoints/APX/81,45/forecast/hourly?units=us')
    .then(response => response.json())
    .then(data => {
        // Get the wind direction and speed from the data
        var windDirectionAbbreviation = data.properties.periods[0].windDirection;
        var windSpeed = data.properties.periods[0].windSpeed;

        // Map the abbreviation to the full form
        var windDirectionFull = directions[windDirectionAbbreviation];

        // Display the result
        document.getElementById('weatherInfo').textContent = "Wind speed: " + windSpeed + ", Wind direction: " + windDirectionFull + " winds.";
    })
    .catch(error => console.error('Error:', error));









fetch('https://api.weather.gov/gridpoints/APX/81,45/forecast/hourly?units=us')
.then(response => response.json())
.then(data => {
    const forecast = data.properties.periods[0]; // Get the first period in the forecast
    if (forecast) {
        document.getElementById('forecast').textContent = `Forecast: ${forecast.shortForecast}`;
    } else {
        document.getElementById('forecast').textContent = 'No forecast data available';
    }
})
.catch(error => {
    console.error('Error:', error);
    document.getElementById('forecast').textContent = 'Failed to load forecast.';
});















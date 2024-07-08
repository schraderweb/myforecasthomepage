function generateForecast() {
  const morningClouds = document.getElementById('morning-clouds').value;
  const afternoonClouds = document.getElementById('afternoon-clouds').value;
  const eveningClouds = document.getElementById('evening-clouds').value;
  const nightClouds = document.getElementById('night-clouds').value;

  const morningPrecipitation = document.getElementById('morning-precipitation').value;
  const afternoonPrecipitation = document.getElementById('afternoon-precipitation').value;
  const eveningPrecipitation = document.getElementById('evening-precipitation').value;
  const nightPrecipitation = document.getElementById('night-precipitation').value;

  const morningPrecipitationPossible = document.getElementById('morning-precipitation-possible').checked;
  const afternoonPrecipitationPossible = document.getElementById('afternoon-precipitation-possible').checked;
  const eveningPrecipitationPossible = document.getElementById('evening-precipitation-possible').checked;
  const nightPrecipitationPossible = document.getElementById('night-precipitation-possible').checked;

  const windSpeed = document.getElementById('wind-speed').value;
  const windDirection = document.getElementById('wind-direction').value;
  const windGusts = document.getElementById('wind-gusts').checked;

  let forecast = '';

  if (morningClouds === afternoonClouds && afternoonClouds === eveningClouds && eveningClouds === nightClouds) {
    forecast += `${morningClouds} all day`;
  } else {
    if (morningClouds) forecast += `${morningClouds} in the morning, `;
    if (afternoonClouds) forecast += `${afternoonClouds} in the afternoon, `;
    if (eveningClouds) forecast += `${eveningClouds} in the evening, `;
    if (nightClouds) forecast += `${nightClouds} at night`;
  }

  if (morningPrecipitation !== 'None' || afternoonPrecipitation !== 'None' || eveningPrecipitation !== 'None' || nightPrecipitation !== 'None') {
    forecast += '. ';
    if (morningPrecipitation !== 'None') forecast += `${morningPrecipitationPossible ? 'Possible ' : ''}${morningPrecipitation} in the morning, `;
    if (afternoonPrecipitation !== 'None') forecast += `${afternoonPrecipitationPossible ? 'Possible ' : ''}${afternoonPrecipitation} in the afternoon, `;
    if (eveningPrecipitation !== 'None') forecast += `${eveningPrecipitationPossible ? 'Possible ' : ''}${eveningPrecipitation} in the evening, `;
    if (nightPrecipitation !== 'None') forecast += `${nightPrecipitationPossible ? 'Possible ' : ''}${nightPrecipitation} at night`;
  }

  if (windSpeed > 0 || windGusts) {
    forecast += '. ';
    forecast += `Winds from the ${windDirection} around ${windSpeed} mph`;
    if (windGusts) forecast += ` with gusts possible`;
  }

  document.getElementById('forecast-output').innerText = forecast.trim();
}

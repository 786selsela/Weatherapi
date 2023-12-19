document.addEventListener('DOMContentLoaded', () => {
    getWeatherInfo();
});

function getWeatherInfo() {
    const apiKey = '3d4ec2f8340b0ad829766045ad477f79';
    const city = 'Milwaukee'; // Replace with the city you want to get weather info for

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayWeatherInfo(data))
        .catch(error => console.error('Error fetching weather info:', error));
}

function displayWeatherInfo(data) {
    const weatherInfoContainer = document.getElementById('weather-info');
    weatherInfoContainer.innerHTML = 'Weather info will be displayed here.'; // Clear previous content

    const temperature = data.main.temp;
    const condition = data.weather[0].description;

    const weatherInfo = document.createElement('div');
    weatherInfo.innerHTML = `
        <p>Temperature: ${temperature} &#8451;</p>
        <p>Condition: ${condition}</p>
    `;

    weatherInfoContainer.appendChild(weatherInfo);

}
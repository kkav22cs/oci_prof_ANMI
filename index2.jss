const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key

function getWeather() {
    const city = document.getElementById("city-input").value;
    if (city) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.cod === '404') {
                    alert('City not found');
                    return;
                }

                const cityName = data.name;
                const temperature = data.main.temp;
                const description = data.weather[0].description;
                const humidity = data.main.humidity;
                const windSpeed = data.wind.speed;

                // Display the data
                document.getElementById("city-name").textContent = cityName;
                document.getElementById("temperature").textContent = `Temperature: ${temperature}°C`;
                document.getElementById("description").textContent = `Weather: ${description}`;
                document.getElementById("humidity").textContent = `Humidity: ${humidity}%`;
                document.getElementById("wind-speed").textContent = `Wind Speed: ${windSpeed} m/s`;

                document.getElementById("weather-info").style.display = 'block';
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
            });
    }
}

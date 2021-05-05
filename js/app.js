const API_KEY = '64744ab32f9d2e85886be2c5182fa32c';

const getWeatherInfo = (city) => {
    const URL = 'https://api.openweathermap.org/data/2.5/weather';
    const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=metric`;
    const weatherData = fetch(FULL_URL);

    //Return the promise with the data
    return weatherData.then(response => {
        // The response is the representation of the promise
        // We want to use the json method 
        // to have access to the data
        return response.json();
    });
}

const searchCity = () => {
    const city = document.getElementById('city').value;
    let cityWeather = getWeatherInfo('Detroit');

    // Pulls the data out from the promise.
    cityWeather.then(data => {
        console.log(data);
        displayWeather(data);
    });
}

const displayWeather = (weatherData) => {
    document.getElementById('city-report').innerText = weatherData.name;
    document.getElementById('weather-type-report').innerText = `Weather Type: ${weatherData.weather[0].main}`;
    document.getElementById('current-temp-report').innerText = `Current: ${weatherData.main.temp} Celcius`;
    document.getElementById('mint-temp-report').innerText = `Min: ${weatherData.main.temp_min} Celcius`;
    document.getElementById('max-temp-report').innerText = `Max: ${weatherData.main.temp_max} Celcius`;
}

let searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', searchCity);


// This will fetch the API using XMLHTTPRequest (XHR)
function getWeatherUsingXHR() {
    const latitude = document.getElementById("latitude").value;
    const longitude = document.getElementById("longitude").value;
    const weatherIcon = document.getElementById("weather-icon");
    const weatherDescription = document.getElementById("weather-description");
    const weatherTemperature = document.getElementById("weather-temperature");

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        // When the request is done, successful, and response is ready
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            const todayTemp = data.current.temperature_2m;

            const icon = "☀️";
            const description = '';
            const temperature = todayTemp + '°C';
            weatherIcon.textContent = icon;
            weatherDescription.textContent = description;
            weatherTemperature.textContent = temperature;
        }
    };
    // Send an asynchronous HTTP GET request to the given end point (url)
    xhr.open("GET", `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m&current=weathercode`, true);
    xhr.send();
}



// This will fetch the API using Fetch API with promises
function getWeatherUsingFetch() {
    const latitude = document.getElementById("latitude").value;
    const longitude = document.getElementById("longitude").value;
    const weatherIcon = document.getElementById("weather-icon");
    const weatherDescription = document.getElementById("weather-description");
    const weatherTemperature = document.getElementById("weather-temperature");


    fetch('https://api.open-meteo.com/v1/forecast?latitude=' + latitude + '&longitude=' + longitude + '&current=temperature_2m&current=weathercode')
        .then(function (response) {
            return response.text();
        })
        .then(function (responseText) {
            let data = JSON.parse(responseText);
            const todayTemp = data.current.temperature_2m;
            const icon = "☀️";
            const description = '';
            const temperature = todayTemp + '°C';

            weatherIcon.textContent = icon;
            weatherDescription.textContent = description;
            weatherTemperature.textContent = temperature;
        })
        .catch(function (e) {
            console.log("Error: " + e);
        })
}




// Fetch the API using Fetch API with async/await
async function getWeatherUsingFetchAsyncAwait() {
    const latitude = document.getElementById("latitude").value;
    const longitude = document.getElementById("longitude").value;
    const weatherIcon = document.getElementById("weather-icon");
    const weatherDescription = document.getElementById("weather-description");
    const weatherTemperature = document.getElementById("weather-temperature");

    const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=' + latitude + '&longitude=' + longitude + '&current=temperature_2m&current=weathercode');
    const data = await response.json();

    const todayTemp = data.current.temperature_2m;
    const icon = "☀️";
    const description = '';
    const temperature = todayTemp + '°C'

    weatherIcon.textContent = icon;
    weatherDescription.textContent = description;
    weatherTemperature.textContent = temperature;
}


// 21.492500 latitude
// 39.177570 longitude
// Asia/Riyadh timezone

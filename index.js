const apiKey = "380b47f24a469ca5f69b58e2632bfa67";
function search() {

    const searchCity = document.getElementById("search-city").value;

    const section = document.getElementById("weather-card")
    if (searchCity != "") {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${apiKey}&units=metric`
        fetch(url).then(response => {
            if (response.status == 404) {
                alert("City Not Found");
                section.style.display = "none";
            }
            else {
                const jsonRes = response.json();
                jsonRes.then(data => {
                    const cityName = data.name
                    const temperature = Math.round(data.main.temp);
                    const weatherType = data.weather[0].main;
                    const icon = data.weather[0].icon;
                    // To make the weather card visible
                    section.style.display = "block";

                    // Setting the City name in the weather card
                    const city = document.getElementById("city");
                    city.innerText = cityName;

                    // Setting the Temperature in the weather card
                    const temp = document.getElementById("temperature");
                    temp.innerText = temperature;

                    // Setting the Weather Type in the weather card
                    const weather = document.getElementById("weatherType");
                    weather.innerText = weatherType;

                    // Setting the Current time in the weather card
                    const today = new Date();
                    const time = document.getElementById("time");
                    time.innerText = today.getHours() + ":" + today.getMinutes()

                    // Setting the Icon in the weather card
                    const weatherImage = document.getElementById("weather-image");
                    weatherImage.src = `https://openweathermap.org/img/wn/${icon}@2x.png`

                })
            }
        });
    }
    else {
        alert("Enter a city name")
    }
}
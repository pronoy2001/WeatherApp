

function search() {

    const data = [
        {
            city: "Kolkata",
            temp: 28,
            weather: "Stormy"
        },
        {
            city: "Mumbai",
            temp: 27,
            weather: "Haze"
        },
        {
            city: "Delhi",
            temp: 25,
            weather: "Cloudy"
        },
        {
            city: "Bangalore",
            temp: 20,
            weather: "Rainy"
        },
    ]

    const searchCity = document.getElementById("search-city").value;
    const section = document.getElementById("weather-card")
    if (searchCity != "") {
        let cityName;
        let temperature;
        let weatherType;
        let found = false;
        for (let i = 0; i < data.length; i++) {
            const cityData = data[i];
            if (cityData.city.toLowerCase() === searchCity.toLowerCase()) {
                found = true;
                cityName = cityData.city;
                temperature = cityData.temp;
                weatherType = cityData.weather;    
                section.style.display = "block";
            }
        }
        if(found === false){
            alert("City not found");
            section.style.display = "none";
        }
        const city = document.getElementById("city");
        city.innerText = cityName;

        const temp = document.getElementById("temperature");
        temp.innerText = temperature;

        const weather = document.getElementById("weatherType");
        weather.innerText = weatherType;

        const today = new Date();
        const time = document.getElementById("time");
        time.innerText = today.getHours() + ":" + today.getMinutes()
    }
    else {
        alert("Please enter a city name");
        section.style.display = "none";
    }
}
const apiKey = "65a3c482d1ce6fd0a449331d60a4ada3";

function getWeather() {
    const city = document.getElementById("city").value.trim();

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found");
            }
            return response.json();
        })
        .then(data => {
            document.getElementById("location").innerText = data.name;
            document.getElementById("temperature").innerText =
                `Temperature: ${data.main.temp} °C`;
            document.getElementById("condition").innerText =
                `Condition: ${data.weather[0].description}`;
        })
        .catch(error => {
            alert("❌ City not found or API error!");
        });
}

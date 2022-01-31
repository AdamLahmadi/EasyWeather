// Initialize classes

api = new WeatherApi();

ui = new UI();

// Listen to the input
const locationForm= document.getElementById('location-form');

// Tooltip event listener


locationForm.addEventListener('submit', setLocation)


function setLocation(e){
    const location = document.getElementById('location').value;

    console.log(location)

    api.getWeather(location).then(
        data => {
            if (data.weather.cod === "404" || data.weather.cod === "400" ) {
                // Show alert
                ui.showAlert('City not Found', 'alert');
            } else {
                // Update UI
                ui.updateWeather(data.weather)
            }
        }
    );


    e.preventDefault();
}
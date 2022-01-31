class UI{

    constructor(){
        this.display = document.getElementById('display')
        this.city = document.getElementById('city')
        this.temperature = document.getElementById('temperature')
        this.weatherIcon = document.getElementById('weather-div')
        this.humidityInfo = document.getElementById('rain-text')
        this.windInfo = document.getElementById('wind-text')
    }
    
    updateWeather(weather){
        // Update City
        this.city.innerHTML = `${weather.name}, ${weather.sys.country}`
        // Update temperature
        this.temperature.innerHTML = `${Math.round(weather.main.temp)}<sup>°C</sup>`
        // Update weather Icon
        if(weather.clouds.all > 25){
            if(weather.rain){
                this.weatherIcon.innerHTML = `<img src="img/rainy.svg" alt="" id="weather-icon">`
            } else{
                this.weatherIcon.innerHTML = `<img src="img/cloudy.svg" alt="" id="weather-icon">`
            }
        } else{
            this.weatherIcon.innerHTML = `<img src="img/sunny.svg" alt="" id="weather-icon">`
        }

        // Update Time info 
        const currTime = (new Date().getTime() / 1000);

        // Check for day or night
        if (weather.sys.sunrise < currTime && currTime < weather.sys.sunset){
            // Update weather Icon
            if(weather.clouds.all > 25){
                if(weather.rain){
                    this.weatherIcon.innerHTML = `<img src="img/rainy.svg" alt="" id="weather-icon">`
                } else{
                    this.weatherIcon.innerHTML = `<img src="img/cloudy.svg" alt="" id="weather-icon">`
                }
            } else{
                this.weatherIcon.innerHTML = `<img src="img/sunny.svg" alt="" id="weather-icon">`
            }

        } else {
            console.log('this is night')
            // Update weather Icon
            

            if(weather.clouds.all > 25){
                if(weather.rain){
                    this.weatherIcon.innerHTML = `<img src="img/rainy.svg" alt="" id="weather-icon">`
                } else{
                    this.weatherIcon.innerHTML = `<img src="img/cloudy-night.svg" alt="" id="weather-icon">`
                }
            } else{
                this.weatherIcon.innerHTML = `<img src="img/night.svg" alt="" id="weather-icon">`
            }
        }


        // Update windInfo
        this.windInfo.innerHTML = `${Math.round((weather.wind.speed)*3.6)}km/h wind`

        // Update Humidity info
        this.humidityInfo.innerHTML = `${weather.main.humidity}% Humidity`;
    }

    showAlert(message, className){
        // Only show alert if no alert is up
        const currentAlert = document.querySelector('.alert')
        
        if(!currentAlert){
            const alert = document.getElementById('alert')
            // Create a new div
            const div = document.createElement('div')
            // Create the alert
            div.className = className
            div.innerHTML = `${message}`
            alert.appendChild(div);
            // Clear alert after 3sec
            setTimeout(() => this.clearAlert(),3000)
        }
    }

    clearAlert(){
        const currentAlert = document.querySelector('.alert')

        if (currentAlert){
            currentAlert.remove();
        }
    }
}
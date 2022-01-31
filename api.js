class WeatherApi{

    constructor(){
        this.api_key = 'e50efd2068dda047ac2dcdd104681b2d'
    }

    async getWeather(location){
        // Get weather Response
        const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${this.api_key}`);

        const weather = await weatherResponse.json();


        return{
            weather
        }
    }
}
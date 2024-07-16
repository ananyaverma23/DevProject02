import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp() {
    let[weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 40.21,
        temp: 39.05,
        maxTemp: 39.05,
        minTemp: 39.05,
        humidity: 27,
        weather: "haze"   
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return(
        <div style={{textAlign: "center"}}>
            <h2>Weather App by Ananya!</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}
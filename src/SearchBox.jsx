import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'

export default function SearchBox({updateInfo}) {
    let[city,setCity] = useState("");
    let[error, setError] = useState(false);
    const API_URL = "http://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "31dd592581e9b364e2cf74442edc13a8";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            let result = {
            city: jsonResponse.name,
            temp: jsonResponse.main.temp,
            minTemp: jsonResponse.main.temp_min,
            maxTemp: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        };
        console.log(result);
        return result;
        } catch(err) {
            throw err;
        }
    }

    let handleChange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async (event) => {
        try{
            event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
        } catch(err) {
            setError(true);
        }
    }

    return(
        <div className="searchBox">
           <form onSubmit={handleSubmit}>
           <TextField onChange={handleChange}
           id="city" 
           label="City Name" 
           variant="outlined" 
           value={city} 
           required />
           <br></br> <br></br>
           <Button variant="contained" type="submit">Search</Button>
        {error && <p style={{color: "red"}}>No such place exists in our Data!!</p>}   
           </form>
        </div>
    )
}
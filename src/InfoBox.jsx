import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./InfoBox.css";

export default function InfoBox({info}) {
    const INIT_IMG = 
    "https://images.unsplash.com/photo-1445880374709-535a5a1b49f9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9sbHV0ZWQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";

    const HOT_IMG = 
    "https://images.unsplash.com/photo-1447601932606-2b63e2e64331?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    const COLD_IMG = 
    "https://images.unsplash.com/photo-1564314968303-86c5df2b9a4c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

    const RAIN_IMG = 
    "https://images.unsplash.com/photo-1632058098906-b947801d0bc9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJhaW55JTIwc2Vhc29ufGVufDB8fDB8fHww";
    
    return(
        <div className="InfoBox">
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity > 80 ? RAIN_IMG : (info.temp > 35 ? HOT_IMG : COLD_IMG)}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city} {
                        info.humidity > 80 ? <ThunderstormIcon/> : (info.temp > 35 ? <WbSunnyIcon/> : <AcUnitIcon/>)
                    }
                    
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component={"span"}>
                    <div>Temperature: {info.temp}&deg;C</div>
                    <div>Humidity: {info.humidity}&deg;C</div>
                    <div>Min Temperature: {info.minTemp}&deg;C</div>
                    <div>Max Temperature: {info.maxTemp}&deg;C</div>
                    <div>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</div>

                    </Typography>
                </CardContent>
                </Card>
            </div>
        </div>
    )
};
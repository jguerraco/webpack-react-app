import React, { useState, useEffect } from "react";
import axios from "axios";

const WeatherWidget: React.FC = () => {
  const [weather, setWeather] = useState<any>(null);

  useEffect(() => {
    axios
      .get(
        "https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=London"
      )
      .then((response) => setWeather(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {weather ? (
        <div>
          <h3>Weather in {weather.location.name}</h3>
          <p>{weather.current.temp_c}°C</p>
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default WeatherWidget;

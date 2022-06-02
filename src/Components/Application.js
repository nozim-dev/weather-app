import React, { useState } from "react";
import { fetchWeather } from "./Api/fetchWeather";

const Application = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(query);
      setWeather(data);
      setQuery();
      console.log(data);
    }
  };

  return (
    <div className="main_container">
      <div className="container">
        <div className="search">
          <input
            type="text"
            className="search_inline"
            placeholder="Search Location"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={search}
          />
        </div>
        {weather.main && (
          <div className="city">
            <div className="city_box">
              <div className="info">
                <img
                  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  alt={weather.weather[0].description}
                />
              </div>
              <div className="details">
                <h2 className="city_name">
                  <span>{weather.name}</span>
                  <sub>{weather.sys.country}</sub>
                </h2>
                <div className="city-temp">
                  {Math.round(weather.main.temp)}
                  <sup>&deg;C</sup>
                  <p>{weather.weather[0].description}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Application;

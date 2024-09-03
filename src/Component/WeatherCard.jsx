import React from "react";
import Card from "./Card";
import { FaTemperatureHigh } from "react-icons/fa";
import { FiWind } from "react-icons/fi";
import { MdOutlineVisibility } from "react-icons/md";
import { BsDropletHalf } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { weatherImageMap } from "../utils/WeatherImageMap";
import { getWeatherImage } from "../utils/WeatherImageMap";

function WeatherCard({ weather }) {
  const weatherImage = getWeatherImage(weather.weatherDescription);

  return (
    <>
      <div className="weather-card text-white mt-8 text-center">
        <h2 className="flex">
          <span className="mr-2 text-2xl">
            <HiOutlineLocationMarker />
          </span>{" "}
          {weather.city}, {weather.region}, {weather.country}
        </h2>
        <div className="weather-image-div flex justify-center items-center">
          <img
            src={weatherImage}
            alt={weather.weatherDescription}
            className="weather-image w-[210px] h-[210px]"
          />
          <h1 className="text-9xl">{weather.feelslike}°C</h1>
        </div>
        <h2 className="mt-2 text-4xl">{weather.weatherDescription}</h2>
      </div>

      <div className="flex justify-around mt-10 w-[700px]">
        <Card
          icon={FaTemperatureHigh}
          value={`${weather.temperature}°C`}
          title="Temperature"
        />
        <Card
          icon={FiWind}
          value={`${weather.windSpeed} km/h`}
          title="Wind Speed"
        />
        <Card
          icon={MdOutlineVisibility}
          value={`${weather.visibility} km`}
          title="Visibility"
        />
        <Card
          icon={BsDropletHalf}
          value={`${weather.humidity}%`}
          title="Humidity"
        />
      </div>
    </>
  );
}

export default WeatherCard;

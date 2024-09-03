import React, { useState } from 'react'
import WeatherCard from './weatherCard'
import SearchBar from './SearchBar'
import { getWeatherData } from '../Api/weatherService'
import { getWeatherVideo } from '../utils/WeatherVideoMap'


function Forground({ onWeatherData }) {
  const [weather, setWeather] = useState(null);
  const [videoSrc, setVideoSrc] = useState(null);


  const handleSearch = async (location) => {
    try {
      const data = await getWeatherData(location)
      setWeather(data);
      // Update the video source based on the weather description
      const newVideoSrc = getWeatherVideo(data.weatherDescription);
      setVideoSrc(newVideoSrc);
    } catch (error) {
      console.error('Failed to fetch weather data:', error);
      setWeather(null);
      setVideoSrc(null);
    }
  }

  return (
    <div className='z-[2] flex flex-col justify-center items-center p-4 w-full h-full'>
      <header className=''>
        <h1 className='text-white text-center text-4xl mb-8'>Weather Application</h1>
        <SearchBar onSearch={handleSearch} />
      </header>
      {videoSrc && (
        <video
          className="fixed z-[-1] w-full h-screen object-cover"
          src={videoSrc}
          autoPlay
          loop
          muted
        />
      )}
      <div >
        {weather ? (
          <WeatherCard weather={weather} />
        ) : (
          <p className='text-white'>Please search for a location to see the weather data.</p>
        )}
      </div>
    </div>
  )
}

export default Forground
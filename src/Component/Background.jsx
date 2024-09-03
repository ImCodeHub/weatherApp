import React from 'react'
import { getWeatherVideo } from '../utils/WeatherVideoMap';

function Background({weatherDescription}) {
  const videoSource = getWeatherVideo(weatherDescription);
  return (
    <>
      <div className="fixed inset-0 z-[-1] w-full h-screen bg-black overflow-hidden">
        <video autoPlay muted loop className="w-full h-full object-cover">
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  )
}

export default Background
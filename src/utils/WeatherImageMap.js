import rainy from "./images/rainy.png";
import defaultimage from './images/default.png';
import partialCloudy from './images/partialy-cloudy.png';
import sunny from './images/sun.png';
import foggy from './images/foggy.png';
import snowy from './images/snowy.png';
import thunder from './images/thunder.png';
import windy from './images/windy.png';
import cold from './images/cold.png'

export const weatherImageMap = {
  'rain': rainy,
  'Partly Cloudy':partialCloudy,
  'sunny': sunny,
  'foggy': foggy,
  'mist': foggy,
  'snowy': snowy,
  'thunder':thunder,
  'sleet': snowy,
  'sunshower':defaultimage,
  'hase': defaultimage,
  'windy': windy,
  'heat': sunny,
  'cold': cold,
  'Default':defaultimage,
  
};

export const getWeatherImage = (description) => {
  if (!description) return weatherImageMap['Default'];
  // Split the description into individual words/phrases
  const descriptionParts = description.split(",").map((part) => part.trim());

  // Find the first matching weather image
  for (let part of descriptionParts) {
    for (let key in weatherImageMap) {
      if (part.toLowerCase().includes(key.toLowerCase())) {
        return weatherImageMap[key];
      }
    }
  }

  // Return default if no match is found
  return weatherImageMap["Default"];
};

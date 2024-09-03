import windy from "./videos/wind.mp4";
import rain from "./videos/rain.mp4";
import sunny from "./videos/sunny.mp4";
import cloudy from "./videos/sunny.mp4";
import thunder from "./videos/thunder.mp4";
import wind from "./videos/windy.mp4";
import snow from "./videos/snow.mp4";
import cold from "./videos/cold.mp4";
import heat from "./videos/heat.mp4";
import mist from "./videos/mist.mp4";

export const weatherVideoMap = {
  'windy': windy,
  'rain': rain,
  'sunny':sunny,
  'cloud':cloudy,
  'thunder':thunder,
  'snow':snow,
  'wind':wind,
  'cold':cold,
  'heat':heat,
  'mist':mist,
  'Default': windy,
};
export const getWeatherVideo = (description) => {
  if (!description) return weatherVideoMap["Default"];
  // Split the description into individual words/phrases
  const descriptionParts = description.split(",").map((part) => part.trim());

  console.log("Description parts:", descriptionParts);

  // Find the first matching weather image
  for (let part of descriptionParts) {
    for (let key in weatherVideoMap) {
      if (part.toLowerCase().includes(key.toLowerCase())) {
        console.log(`Match found: ${part} includes ${key}`);

        return weatherVideoMap[key];
      }
    }
  }

  // Return default if no match is found
  return weatherVideoMap["Default"];
};

import axios from 'axios';

const API_URL = 'http://localhost:8080';

export const getWeatherData = async(location) => {
    try {
        const response = await axios.get(`${API_URL}/api/v1/weather/city/${location}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching weather data: ', error);
        throw error;
    }
};
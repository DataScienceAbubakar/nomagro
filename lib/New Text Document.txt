const WEATHER_API_KEY = process.env.f36684098550df0ac8c8e5113e3ecdc1;
const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5';

export async function getWeatherByCoordinates(lat: number, lon: number) {
  try {
    const response = await fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const data = await response.json();
    return {
      temperature: data.main.temp,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      description: data.weather[0].description,
      rainfall: data.rain ? data.rain['1h'] : 0
    };
  } catch (error) {
    throw new Error('Failed to fetch weather data');
  }
}

export async function getForecast(lat: number, lon: number) {
  try {
    const response = await fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const data = await response.json();
    return data.list.map((item: any) => ({
      timestamp: item.dt * 1000,
      temperature: item.main.temp,
      humidity: item.main.humidity,
      windSpeed: item.wind.speed,
      description: item.weather[0].description,
      rainfall: item.rain ? item.rain['3h'] : 0
    }));
  } catch (error) {
    throw new Error('Failed to fetch forecast data');
  }
}
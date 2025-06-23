const WEATHER_API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5';
const BACKEND_URL = process.env.NODE_ENV === 'production' 
  ? 'https://nomagro.railway.app'  // Railway URL
  : 'http://localhost:8000';             // Local development

export async function getForecast(lat: number, lon: number) {
  const response = await fetch(`${BACKEND_URL}/forecast?days=7`);
  return response.json();
}
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

// Updated to call your Python backend
export async function getForecast(lat: number, lon: number) {
  try {
    // Call your Python backend for Prophet-based forecasting
    const response = await fetch(`${PYTHON_BACKEND_URL}/forecast`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        latitude: lat,
        longitude: lon,
        days: 7 // Request 7 days forecast
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    // Transform the data to match your frontend expectations
    return data.forecast.map((item: any, index: number) => ({
      timestamp: new Date(item.ds).getTime(),
      temperature: Math.round(Math.random() * 10 + 25), // You can get this from OpenWeather
      humidity: Math.round(Math.random() * 20 + 60),
      windSpeed: Math.round(Math.random() * 5 + 10),
      description: item.yhat > 15 ? 'Rainy' : 'Partly Cloudy',
      rainfall: Math.max(0, item.yhat), // Your Prophet forecast
      day: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index] || `Day ${index + 1}`
    }));
  } catch (error) {
    console.error('Error calling Python backend:', error);
    
    // Fallback to OpenWeatherMap if Python backend fails
    try {
      const response = await fetch(
        `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
      );
      const data = await response.json();
      return data.list.slice(0, 7).map((item: any, index: number) => ({
        timestamp: item.dt * 1000,
        temperature: item.main.temp,
        humidity: item.main.humidity,
        windSpeed: item.wind.speed,
        description: item.weather[0].description,
        rainfall: item.rain ? item.rain['3h'] : 0,
        day: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index] || `Day ${index + 1}`
      }));
    } catch (fallbackError) {
      throw new Error('Failed to fetch forecast data from both sources');
    }
  }
}

// New function to get current weather for dashboard
export async function getCurrentWeather(lat: number, lon: number) {
  try {
    const weather = await getWeatherByCoordinates(lat, lon);
    return weather;
  } catch (error) {
    throw new Error('Failed to fetch current weather');
  }
}
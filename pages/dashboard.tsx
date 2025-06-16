import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { 
  Cloud, 
  Droplet, 
  Thermometer, 
  Wind, 
  AlertTriangle, 
  Calendar,
  LogOut,
  TrendingUp,
  BarChart,
  Sun,
  Loader
} from 'lucide-react';

interface WeatherData {
  day: string;
  temperature: number;
  rainfall: number;
  humidity: number;
  windSpeed: number;
  description: string;
}

interface CurrentWeather {
  temperature: number;
  humidity: number;
  windSpeed: number;
  rainfall: number;
  description: string;
}

export default function DashboardPage() {
  const [weatherData, setWeatherData] = useState<WeatherData[]>([]);
  const [currentWeather, setCurrentWeather] = useState<CurrentWeather | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Kano coordinates - you can make this dynamic later
  const KANO_LAT = 12.0022;
  const KANO_LON = 8.5920;

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const fetchWeatherData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch forecast data from your Next.js API
      const forecastResponse = await fetch(`/api/weather/forecast?lat=${KANO_LAT}&lon=${KANO_LON}`);
      if (!forecastResponse.ok) {
        throw new Error('Failed to fetch forecast data');
      }
      const forecastData = await forecastResponse.json();

      // Fetch current weather
      const weatherResponse = await fetch(`/api/weather/current?lat=${KANO_LAT}&lon=${KANO_LON}`);
      if (!weatherResponse.ok) {
        throw new Error('Failed to fetch current weather');
      }
      const currentData = await weatherResponse.json();

      setWeatherData(forecastData);
      setCurrentWeather(currentData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch weather data');
      console.error('Weather fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader className="h-8 w-8 animate-spin mx-auto mb-4 text-green-600" />
          <p className="text-gray-600">Loading weather data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <AlertTriangle className="h-8 w-8 mx-auto mb-4 text-red-500" />
          <p className="text-red-600 mb-4">{error}</p>
          <button 
            onClick={fetchWeatherData}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-green-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <img 
                src="/images/logo.png" 
                alt="Nomagro Logo" 
                className="h-16 md:h-22 w-auto logo-float logo-glow cursor-pointer" 
              />
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <span className="text-sm">Welcome, John Doe</span>
            <div className="h-6 w-px bg-green-400"></div>
            <Link href="/" className="hover:text-green-200 flex items-center gap-2">
              <LogOut className="h-4 w-4" />
              Logout
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Date and Location */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Farm Dashboard</h1>
          <p className="text-gray-600">Kano State, Nigeria | {new Date().toLocaleDateString()}</p>
          <button 
            onClick={fetchWeatherData}
            className="mt-2 text-sm text-green-600 hover:text-green-800 flex items-center gap-1"
          >
            <TrendingUp className="h-4 w-4" />
            Refresh Data
          </button>
        </div>

        {/* Weather Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center">
              <div className="p-3 bg-orange-100 rounded-lg">
                <Thermometer className="h-6 w-6 text-orange-500" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Temperature</p>
                <p className="text-2xl font-bold">
                  {currentWeather ? `${Math.round(currentWeather.temperature)}°C` : '--°C'}
                </p>
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-gray-500">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span>{currentWeather?.description || 'Loading...'}</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Cloud className="h-6 w-6 text-blue-500" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Rainfall</p>
                <p className="text-2xl font-bold">
                  {currentWeather ? `${currentWeather.rainfall.toFixed(1)}mm` : '--mm'}
                </p>
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-gray-500">
              <BarChart className="h-4 w-4 mr-1" />
              <span>AI Forecast Active</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center">
              <div className="p-3 bg-indigo-100 rounded-lg">
                <Droplet className="h-6 w-6 text-indigo-500" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Humidity</p>
                <p className="text-2xl font-bold">
                  {currentWeather ? `${currentWeather.humidity}%` : '--%'}
                </p>
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-gray-500">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span>Optimal for crops</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center">
              <div className="p-3 bg-cyan-100 rounded-lg">
                <Wind className="h-6 w-6 text-cyan-500" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Wind Speed</p>
                <p className="text-2xl font-bold">
                  {currentWeather ? `${currentWeather.windSpeed.toFixed(1)}km/h` : '--km/h'}
                </p>
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-gray-500">
              <Sun className="h-4 w-4 mr-1" />
              <span>Clear conditions</span>
            </div>
          </div>
        </div>

        {/* Weather Chart */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <h2 className="text-xl font-semibold mb-6">
            AI-Powered Weather Forecast 
            <span className="text-sm font-normal text-gray-500 ml-2">(Prophet Model)</span>
          </h2>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weatherData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Line 
                  yAxisId="left" 
                  type="monotone" 
                  dataKey="temperature" 
                  stroke="#f97316" 
                  name="Temperature (°C)"
                  strokeWidth={2}
                />
                <Line 
                  yAxisId="right" 
                  type="monotone" 
                  dataKey="rainfall" 
                  stroke="#3b82f6" 
                  name="Rainfall (mm)"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recommendations and Alerts */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Crop Calendar */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Crop Calendar</h2>
              <Calendar className="h-5 w-5 text-gray-500" />
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                <div>
                  <h3 className="font-medium text-green-800">Maize Planting</h3>
                  <p className="text-sm text-green-600">Optimal conditions for planting</p>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  Now
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <div>
                  <h3 className="font-medium text-yellow-800">Cassava Harvesting</h3>
                  <p className="text-sm text-yellow-600">Coming up in 2 weeks</p>
                </div>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                  Soon
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                <div>
                  <h3 className="font-medium text-gray-800">Yam Cultivation</h3>
                  <p className="text-sm text-gray-600">Season starts in 3 months</p>
                </div>
                <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                  Planning
                </span>
              </div>
            </div>
          </div>

          {/* Dynamic Alerts based on forecast */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">AI Alerts & Notifications</h2>
              <AlertTriangle className="h-5 w-5 text-gray-500" />
            </div>
            <div className="space-y-4">
              {weatherData.length > 0 && weatherData[0]?.rainfall > 10 && (
                <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-yellow-400 mt-0.5" />
                    <div className="ml-3">
                      <h3 className="font-medium text-yellow-800">Heavy Rainfall Expected</h3>
                      <p className="text-sm text-yellow-700 mt-1">
                        AI forecast predicts {weatherData[0].rainfall.toFixed(1)}mm rainfall. Consider protecting sensitive crops.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="p-4 bg-green-50 border-l-4 border-green-400 rounded">
                <div className="flex items-start">
                  <Cloud className="h-5 w-5 text-green-400 mt-0.5" />
                  <div className="ml-3">
                    <h3 className="font-medium text-green-800">AI-Powered Forecasting</h3>
                    <p className="text-sm text-green-700 mt-1">
                      Using Prophet machine learning model for accurate rainfall predictions based on historical data.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
                <div className="flex items-start">
                  <Droplet className="h-5 w-5 text-blue-400 mt-0.5" />
                  <div className="ml-3">
                    <h3 className="font-medium text-blue-800">Smart Irrigation Reminder</h3>
                    <p className="text-sm text-blue-700 mt-1">
                      Based on forecast data, schedule irrigation accordingly to optimize water usage.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
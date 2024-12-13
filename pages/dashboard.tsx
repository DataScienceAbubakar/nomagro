import React, { useState } from 'react';
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
  Sun
} from 'lucide-react';

export default function DashboardPage() {
  // Sample weather data
  const weatherData = [
    { day: 'Mon', temperature: 28, rainfall: 20, humidity: 65 },
    { day: 'Tue', temperature: 30, rainfall: 10, humidity: 60 },
    { day: 'Wed', temperature: 29, rainfall: 15, humidity: 68 },
    { day: 'Thu', temperature: 27, rainfall: 25, humidity: 75 },
    { day: 'Fri', temperature: 31, rainfall: 5, humidity: 55 },
    { day: 'Sat', temperature: 30, rainfall: 12, humidity: 62 },
    { day: 'Sun', temperature: 28, rainfall: 18, humidity: 70 },
  ];

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
                className="h-8 md:h-10 w-auto logo-float logo-glow cursor-pointer" 
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
                <p className="text-2xl font-bold">28°C</p>
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-gray-500">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span>2°C higher than yesterday</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Cloud className="h-6 w-6 text-blue-500" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Rainfall</p>
                <p className="text-2xl font-bold">2.5mm</p>
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-gray-500">
              <BarChart className="h-4 w-4 mr-1" />
              <span>Expected to increase</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center">
              <div className="p-3 bg-indigo-100 rounded-lg">
                <Droplet className="h-6 w-6 text-indigo-500" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Humidity</p>
                <p className="text-2xl font-bold">65%</p>
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
                <p className="text-2xl font-bold">12km/h</p>
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
          <h2 className="text-xl font-semibold mb-6">Weekly Weather Forecast</h2>
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

          {/* Alerts */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Alerts & Notifications</h2>
              <AlertTriangle className="h-5 w-5 text-gray-500" />
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-yellow-400 mt-0.5" />
                  <div className="ml-3">
                    <h3 className="font-medium text-yellow-800">Heavy Rainfall Expected</h3>
                    <p className="text-sm text-yellow-700 mt-1">
                      Prepare for heavy rainfall in the next 48 hours. Consider protecting sensitive crops.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-green-50 border-l-4 border-green-400 rounded">
                <div className="flex items-start">
                  <Cloud className="h-5 w-5 text-green-400 mt-0.5" />
                  <div className="ml-3">
                    <h3 className="font-medium text-green-800">Optimal Planting Conditions</h3>
                    <p className="text-sm text-green-700 mt-1">
                      Current weather conditions are ideal for maize planting. Consider starting within the next week.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
                <div className="flex items-start">
                  <Droplet className="h-5 w-5 text-blue-400 mt-0.5" />
                  <div className="ml-3">
                    <h3 className="font-medium text-blue-800">Irrigation Reminder</h3>
                    <p className="text-sm text-blue-700 mt-1">
                      Schedule irrigation for your cassava field based on current soil moisture levels.
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
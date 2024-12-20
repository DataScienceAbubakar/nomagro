type WeatherData = {
  temperature: number;
  humidity: number;
  windSpeed: number;
  rainfall: number;
};

export function checkWeatherAlerts(weatherData: WeatherData) {
  const alerts = [];

  // Check for heavy rainfall
  if (weatherData.rainfall > 50) {
    alerts.push({
      type: 'HEAVY_RAIN',
      severity: 'HIGH',
      message: 'Heavy rainfall alert! Protect sensitive crops and check drainage systems.',
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours from now
    });
  }

  // Check for extreme temperatures
  if (weatherData.temperature > 35) {
    alerts.push({
      type: 'HIGH_TEMPERATURE',
      severity: 'MEDIUM',
      message: 'High temperature alert! Consider additional irrigation.',
      expiresAt: new Date(Date.now() + 12 * 60 * 60 * 1000)
    });
  }

  if (weatherData.temperature < 10) {
    alerts.push({
      type: 'LOW_TEMPERATURE',
      severity: 'MEDIUM',
      message: 'Low temperature alert! Protect sensitive crops from frost.',
      expiresAt: new Date(Date.now() + 12 * 60 * 60 * 1000)
    });
  }

  // Check for high winds
  if (weatherData.windSpeed > 20) {
    alerts.push({
      type: 'HIGH_WIND',
      severity: 'HIGH',
      message: 'High wind alert! Secure equipment and protect young plants.',
      expiresAt: new Date(Date.now() + 6 * 60 * 60 * 1000)
    });
  }

  // Check for drought conditions
  if (weatherData.humidity < 30 && weatherData.rainfall === 0) {
    alerts.push({
      type: 'DROUGHT',
      severity: 'CRITICAL',
      message: 'Drought conditions detected! Implement water conservation measures.',
      expiresAt: new Date(Date.now() + 48 * 60 * 60 * 1000)
    });
  }

  return alerts;
}
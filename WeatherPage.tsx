import React from 'react';
import { WeatherWidget } from '../components/Weather';
import { Cloud, Droplets, Thermometer, Wind } from 'lucide-react';
import type { Weather } from '../types';

interface WeatherPageProps {
  weather: Weather;
}

export const WeatherPage: React.FC<WeatherPageProps> = ({ weather }) => {
  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Weather Forecast</h2>
        <WeatherWidget weather={weather} />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Crop Weather Advisory</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Thermometer className="w-6 h-6 text-red-500 mt-1" />
              <div>
                <p className="font-medium">Temperature Impact</p>
                <p className="text-gray-600 dark:text-gray-400">
                  Current temperature is optimal for most crops. Monitor during peak afternoon.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Droplets className="w-6 h-6 text-blue-500 mt-1" />
              <div>
                <p className="font-medium">Watering Recommendation</p>
                <p className="text-gray-600 dark:text-gray-400">
                  {weather.humidity > 70
                    ? 'High humidity - reduce watering'
                    : 'Normal humidity - maintain regular watering schedule'}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">5-Day Forecast</h3>
          <div className="space-y-4">
            {weather.forecast.map((day, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Cloud className="w-5 h-5 text-gray-500" />
                  <span>{day.date}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span>{day.temperature}°C</span>
                  <span>{day.humidity}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
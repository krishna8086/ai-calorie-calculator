import React from 'react';
import { Cloud, Sun, Thermometer } from 'lucide-react';
import type { Weather } from '../types';

interface WeatherWidgetProps {
  weather: Weather;
}

export const WeatherWidget: React.FC<WeatherWidgetProps> = ({ weather }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {weather.icon === 'sunny' ? (
            <Sun className="w-8 h-8 text-yellow-500" />
          ) : (
            <Cloud className="w-8 h-8 text-gray-500" />
          )}
          <div>
            <h3 className="text-lg font-semibold">Current Weather</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{weather.description}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <Thermometer className="w-5 h-5 mr-1" />
            <span>{weather.temperature}°C</span>
          </div>
          <div>
            <span>{weather.humidity}% Humidity</span>
          </div>
        </div>
      </div>
    </div>
  );
};
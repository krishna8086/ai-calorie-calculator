import React, { useState, useEffect } from 'react';
import { Leaf } from 'lucide-react';
import { Navigation } from './components/Navigation';
import { ThemeToggle } from './components/ThemeToggle';
import { HomePage } from './pages/HomePage';
import { FarmingTipsPage } from './pages/FarmingTipsPage';
import { WeatherPage } from './pages/WeatherPage';
import { GamesPage } from './pages/GamesPage';
import { OtherPage } from './pages/OtherPage';
import { AdvancedFarmingPage } from './pages/AdvancedFarmingPage';
import type { GameState, Weather, NavPage, ThemeType } from './types';

function App() {
  const [theme, setTheme] = useState<ThemeType>('light');
  const [currentPage, setCurrentPage] = useState<NavPage>('home');
  
  const [gameState, setGameState] = useState<GameState>({
    plants: [],
    resources: {
      water: 100,
      fertilizer: 50,
      seeds: 10,
      fishFood: 100,
      nutrients: 100
    },
    experience: 0,
    level: 1,
    rewards: [],
    theme: 'light'
  });

  const [weather, setWeather] = useState<Weather>({
    temperature: 25,
    humidity: 60,
    description: 'Partly Cloudy',
    icon: 'cloudy',
    forecast: [
      { date: 'Monday', temperature: 24, humidity: 65, description: 'Sunny' },
      { date: 'Tuesday', temperature: 26, humidity: 55, description: 'Clear' },
      { date: 'Wednesday', temperature: 23, humidity: 70, description: 'Rain' },
      { date: 'Thursday', temperature: 25, humidity: 62, description: 'Cloudy' },
      { date: 'Friday', temperature: 27, humidity: 58, description: 'Sunny' }
    ]
  });

  useEffect(() => {
    // Remove all theme classes
    document.documentElement.classList.remove(
      'light',
      'dark',
      'theme-nature',
      'theme-ocean',
      'theme-sunset'
    );

    // Add the new theme class
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (theme !== 'light') {
      document.documentElement.classList.add(`theme-${theme}`);
    }
  }, [theme]);

  const handlePlantAction = (action: string, plantId: string) => {
    // Handle plant actions (water, fertilize, pest control)
    console.log(`Performing ${action} on plant ${plantId}`);
  };

  const getThemeClasses = () => {
    const baseClasses = "min-h-screen text-gray-900 transition-colors duration-200";
    switch (theme) {
      case 'dark':
        return `${baseClasses} bg-gray-900 text-gray-100`;
      case 'nature':
        return `${baseClasses} bg-nature-background text-nature-text`;
      case 'ocean':
        return `${baseClasses} bg-ocean-background text-ocean-text`;
      case 'sunset':
        return `${baseClasses} bg-sunset-background text-sunset-text`;
      default:
        return `${baseClasses} bg-gray-100`;
    }
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage gameState={gameState} onPlantAction={handlePlantAction} />;
      case 'tips':
        return <FarmingTipsPage />;
      case 'weather':
        return <WeatherPage weather={weather} />;
      case 'games':
        return <GamesPage />;
      case 'other':
        return <OtherPage />;
      case 'advanced':
        return <AdvancedFarmingPage />;
      default:
        return <HomePage gameState={gameState} onPlantAction={handlePlantAction} />;
    }
  };

  return (
    <div className={getThemeClasses()}>
      <header className="bg-white dark:bg-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Leaf className="w-8 h-8 text-green-500" />
              <span className="ml-2 text-xl font-bold">Urban Farm Simulator</span>
            </div>
            <div className="flex items-center space-x-4">
              <ThemeToggle currentTheme={theme} onThemeChange={setTheme} />
            </div>
          </div>
        </div>
      </header>

      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderCurrentPage()}
      </main>
    </div>
  );
}

export default App;
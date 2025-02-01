import React from 'react';
import { Sun, Moon, Leaf, Droplets, Sunset } from 'lucide-react';
import type { ThemeType } from '../types';

interface ThemeToggleProps {
  currentTheme: ThemeType;
  onThemeChange: (theme: ThemeType) => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ currentTheme, onThemeChange }) => {
  const themes: { type: ThemeType; icon: typeof Sun; label: string }[] = [
    { type: 'light', icon: Sun, label: 'Light' },
    { type: 'dark', icon: Moon, label: 'Dark' },
    { type: 'nature', icon: Leaf, label: 'Nature' },
    { type: 'ocean', icon: Droplets, label: 'Ocean' },
    { type: 'sunset', icon: Sunset, label: 'Sunset' },
  ];

  return (
    <div className="flex items-center space-x-2">
      {themes.map(({ type, icon: Icon, label }) => (
        <button
          key={type}
          onClick={() => onThemeChange(type)}
          className={`p-2 rounded-lg transition-colors ${
            currentTheme === type
              ? 'bg-primary text-white'
              : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
          }`}
          title={label}
        >
          <Icon className="w-5 h-5" />
        </button>
      ))}
    </div>
  );
};
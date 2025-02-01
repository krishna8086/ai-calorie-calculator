import React from 'react';
import { Home, Sprout, Cloud, Gamepad2, MoreHorizontal } from 'lucide-react';
import type { NavPage } from '../types';

interface NavigationProps {
  currentPage: NavPage;
  onPageChange: (page: NavPage) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentPage, onPageChange }) => {
  const navItems = [
    { id: 'home' as NavPage, icon: Home, label: 'Home' },
    { id: 'tips' as NavPage, icon: Sprout, label: 'Farming Tips' },
    { id: 'weather' as NavPage, icon: Cloud, label: 'Weather' },
    { id: 'games' as NavPage, icon: Gamepad2, label: 'Games' },
    { id: 'other' as NavPage, icon: MoreHorizontal, label: 'Other' },
  ];

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-8">
            {navItems.map(({ id, icon: Icon, label }) => (
              <button
                key={id}
                onClick={() => onPageChange(id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors
                  ${currentPage === id
                    ? 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
              >
                <Icon className="w-5 h-5" />
                <span className="hidden md:inline">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
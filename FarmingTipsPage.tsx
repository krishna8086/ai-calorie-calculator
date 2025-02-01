import React, { useState } from 'react';
import { Bug, Droplets, Sprout, Info } from 'lucide-react';
import type { FarmingTip } from '../types';

const TIPS: FarmingTip[] = [
  {
    id: '1',
    category: 'pest',
    title: 'Natural Pest Control',
    content: 'Use companion planting with marigolds and basil to naturally repel pests.',
    difficulty: 'beginner'
  },
  {
    id: '2',
    category: 'soil',
    title: 'Soil Health Basics',
    content: 'Maintain soil pH between 6.0-7.0 for most vegetables. Test regularly.',
    difficulty: 'intermediate'
  },
  {
    id: '3',
    category: 'water',
    title: 'Smart Watering',
    content: 'Water deeply but less frequently to encourage deep root growth.',
    difficulty: 'beginner'
  }
];

export const FarmingTipsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<FarmingTip['category'] | 'all'>('all');

  const categories = [
    { id: 'all', icon: Info, label: 'All Tips' },
    { id: 'pest', icon: Bug, label: 'Pest Control' },
    { id: 'soil', icon: Sprout, label: 'Soil Health' },
    { id: 'water', icon: Droplets, label: 'Watering' }
  ];

  const filteredTips = TIPS.filter(
    tip => selectedCategory === 'all' || tip.category === selectedCategory
  );

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Farming Tips</h2>
        
        <div className="flex space-x-4 mb-6 overflow-x-auto pb-2">
          {categories.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => setSelectedCategory(id as any)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors whitespace-nowrap
                ${selectedCategory === id
                  ? 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
            >
              <Icon className="w-5 h-5" />
              <span>{label}</span>
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredTips.map(tip => (
            <div
              key={tip.id}
              className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-green-500 dark:hover:border-green-500 transition-colors"
            >
              <h3 className="text-lg font-semibold mb-2">{tip.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{tip.content}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {tip.difficulty.charAt(0).toUpperCase() + tip.difficulty.slice(1)}
                </span>
                {tip.category === 'pest' && <Bug className="w-5 h-5 text-red-500" />}
                {tip.category === 'soil' && <Sprout className="w-5 h-5 text-green-500" />}
                {tip.category === 'water' && <Droplets className="w-5 h-5 text-blue-500" />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
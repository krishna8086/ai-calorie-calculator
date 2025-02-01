import React, { useState } from 'react';
import { Droplets, Fish, FlaskRound as Flask, Plane as Plant, Info, ArrowRight } from 'lucide-react';

interface SystemType {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  requirements: string[];
  type: 'hydroponic' | 'aquaponic';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

const SYSTEMS: SystemType[] = [
  {
    id: 'nft',
    title: 'Nutrient Film Technique',
    description: 'A hydroponic system where a thin film of nutrient solution flows over plant roots.',
    type: 'hydroponic',
    difficulty: 'intermediate',
    benefits: [
      'Highly water-efficient',
      'Perfect for leafy greens',
      'Compact design',
      'Low maintenance'
    ],
    requirements: [
      'Pump system',
      'Growing channels',
      'Nutrient solution',
      'pH monitoring'
    ]
  },
  {
    id: 'dwc',
    title: 'Deep Water Culture',
    description: 'Plants grow with their roots suspended in nutrient-rich, oxygenated water.',
    type: 'hydroponic',
    difficulty: 'beginner',
    benefits: [
      'Simple to set up',
      'Great for beginners',
      'Fast growth rates',
      'Low maintenance'
    ],
    requirements: [
      'Air pump',
      'Growing container',
      'Net pots',
      'Air stones'
    ]
  },
  {
    id: 'media-bed',
    title: 'Media Bed Aquaponics',
    description: 'Combines fish farming with plant growing using grow media.',
    type: 'aquaponic',
    difficulty: 'intermediate',
    benefits: [
      'Sustainable ecosystem',
      'Produces fish and plants',
      'Natural fertilization',
      'Water efficient'
    ],
    requirements: [
      'Fish tank',
      'Growing media',
      'Fish species selection',
      'Biofilter'
    ]
  }
];

export const AdvancedFarmingPage: React.FC = () => {
  const [selectedType, setSelectedType] = useState<'all' | 'hydroponic' | 'aquaponic'>('all');

  const filteredSystems = SYSTEMS.filter(
    system => selectedType === 'all' || system.type === selectedType
  );

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Advanced Farming Systems</h2>

        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setSelectedType('all')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors
              ${selectedType === 'all'
                ? 'bg-primary text-white'
                : 'hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
          >
            <Info className="w-5 h-5" />
            <span>All Systems</span>
          </button>
          <button
            onClick={() => setSelectedType('hydroponic')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors
              ${selectedType === 'hydroponic'
                ? 'bg-primary text-white'
                : 'hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
          >
            <Flask className="w-5 h-5" />
            <span>Hydroponics</span>
          </button>
          <button
            onClick={() => setSelectedType('aquaponic')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors
              ${selectedType === 'aquaponic'
                ? 'bg-primary text-white'
                : 'hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
          >
            <Fish className="w-5 h-5" />
            <span>Aquaponics</span>
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredSystems.map(system => (
            <div
              key={system.id}
              className="relative p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-primary transition-all"
            >
              <div className="absolute top-4 right-4">
                {system.type === 'hydroponic' ? (
                  <Flask className="w-6 h-6 text-blue-500" />
                ) : (
                  <Fish className="w-6 h-6 text-green-500" />
                )}
              </div>
              <h3 className="text-xl font-semibold mb-3">{system.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{system.description}</p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Plant className="w-4 h-4 mr-2" />
                    Benefits
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    {system.benefits.map((benefit, index) => (
                      <li key={index} className="text-gray-600 dark:text-gray-400">
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Requirements
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    {system.requirements.map((req, index) => (
                      <li key={index} className="text-gray-600 dark:text-gray-400">
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                  {system.difficulty}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Getting Started Guide</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center">
              <Flask className="w-6 h-6 mr-2 text-blue-500" />
              Hydroponics Basics
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Hydroponics is a method of growing plants without soil, using mineral nutrient solutions in water.
              Perfect for urban environments with limited space.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
              <li>No soil needed - plants grow in nutrient solution</li>
              <li>Faster growth rates than traditional farming</li>
              <li>Year-round growing capability</li>
              <li>Efficient water usage</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center">
              <Fish className="w-6 h-6 mr-2 text-green-500" />
              Aquaponics Basics
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Aquaponics combines raising fish with growing plants in a symbiotic environment.
              Fish waste provides nutrients for plants, while plants filter water for fish.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
              <li>Sustainable ecosystem approach</li>
              <li>Produces both plants and fish</li>
              <li>Minimal water usage</li>
              <li>Natural fertilization process</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
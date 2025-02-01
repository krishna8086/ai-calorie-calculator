import React from 'react';
import { Plane as PlantIcon, Droplets, Bug, Sprout } from 'lucide-react';
import type { Plant } from '../types';

interface GardenProps {
  plants: Plant[];
  onWater: (plantId: string) => void;
  onTreatPests: (plantId: string) => void;
  onFertilize: (plantId: string) => void;
}

export const Garden: React.FC<GardenProps> = ({ plants, onWater, onTreatPests, onFertilize }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {plants.map((plant) => (
        <div key={plant.id} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold">{plant.name}</h3>
            <PlantIcon className="w-6 h-6 text-green-500" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Health:</span>
              <div className="w-24 bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-green-500 h-2.5 rounded-full"
                  style={{ width: `${plant.health}%` }}
                ></div>
              </div>
            </div>
            <div className="flex justify-between">
              <span>Water:</span>
              <div className="w-24 bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-500 h-2.5 rounded-full"
                  style={{ width: `${plant.waterLevel}%` }}
                ></div>
              </div>
            </div>
            <div className="flex justify-between">
              <span>Soil:</span>
              <div className="w-24 bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-brown-500 h-2.5 rounded-full"
                  style={{ width: `${plant.soilHealth}%` }}
                ></div>
              </div>
            </div>
          </div>
          <div className="flex justify-around mt-4">
            <button
              onClick={() => onWater(plant.id)}
              className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 dark:bg-blue-900 dark:hover:bg-blue-800"
            >
              <Droplets className="w-4 h-4 text-blue-500" />
            </button>
            <button
              onClick={() => onTreatPests(plant.id)}
              className="p-2 rounded-full bg-red-100 hover:bg-red-200 dark:bg-red-900 dark:hover:bg-red-800"
            >
              <Bug className="w-4 h-4 text-red-500" />
            </button>
            <button
              onClick={() => onFertilize(plant.id)}
              className="p-2 rounded-full bg-green-100 hover:bg-green-200 dark:bg-green-900 dark:hover:bg-green-800"
            >
              <Sprout className="w-4 h-4 text-green-500" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
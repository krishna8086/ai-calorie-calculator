import React from 'react';
import { Garden } from '../components/Garden';
import { ChatBot } from '../components/ChatBot';
import type { GameState } from '../types';
import { Trophy, Star } from 'lucide-react';

interface HomePageProps {
  gameState: GameState;
  onPlantAction: (action: string, plantId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ gameState, onPlantAction }) => {
  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Your Farm Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Progress</h3>
            <div className="flex items-center space-x-2 mb-4">
              <Trophy className="w-6 h-6 text-yellow-500" />
              <span className="text-xl">Level {gameState.level}</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
              <div
                className="bg-green-500 h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${(gameState.experience % 100)}%` }}
              ></div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Recent Achievements</h3>
            <div className="space-y-2">
              {gameState.rewards.slice(-3).map(reward => (
                <div key={reward.id} className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span>{reward.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Your Garden</h2>
          <Garden
            plants={gameState.plants}
            onWater={(id) => onPlantAction('water', id)}
            onTreatPests={(id) => onPlantAction('pest', id)}
            onFertilize={(id) => onPlantAction('fertilize', id)}
          />
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <ChatBot />
        </div>
      </div>
    </div>
  );
};
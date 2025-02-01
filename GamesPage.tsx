import React, { useState } from 'react';
import { Trophy, Star, Gift } from 'lucide-react';

interface Game {
  id: string;
  title: string;
  description: string;
  reward: string;
  xp: number;
  completed: boolean;
}

const GAMES: Game[] = [
  {
    id: '1',
    title: 'Crop Master Challenge',
    description: 'Test your knowledge about different crops and their growing conditions.',
    reward: 'Plant Growth Expert Badge',
    xp: 100,
    completed: false
  },
  {
    id: '2',
    title: 'Pest Defense',
    description: 'Learn to identify and manage common garden pests in this interactive game.',
    reward: 'Pest Control Specialist Badge',
    xp: 150,
    completed: false
  },
  {
    id: '3',
    title: 'Water Wisdom',
    description: 'Master the art of efficient water management in this resource management game.',
    reward: 'Water Conservation Badge',
    xp: 120,
    completed: false
  }
];

export const GamesPage: React.FC = () => {
  const [games, setGames] = useState<Game[]>(GAMES);

  const handleCompleteGame = (gameId: string) => {
    setGames(prev =>
      prev.map(game =>
        game.id === gameId ? { ...game, completed: true } : game
      )
    );
  };

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Learning Games</h2>
          <div className="flex items-center space-x-2">
            <Trophy className="w-6 h-6 text-yellow-500" />
            <span className="text-lg font-semibold">
              {games.filter(g => g.completed).length} / {games.length} Completed
            </span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {games.map(game => (
            <div
              key={game.id}
              className="relative p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-green-500 dark:hover:border-green-500 transition-all"
            >
              {game.completed && (
                <div className="absolute -top-3 -right-3">
                  <Star className="w-6 h-6 text-yellow-500 fill-current" />
                </div>
              )}
              <h3 className="text-xl font-semibold mb-3">{game.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{game.description}</p>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Gift className="w-5 h-5 text-purple-500" />
                  <span className="text-sm">{game.reward}</span>
                </div>
                <span className="text-sm font-medium text-green-500">+{game.xp} XP</span>
              </div>
              <button
                onClick={() => handleCompleteGame(game.id)}
                disabled={game.completed}
                className={`w-full py-2 px-4 rounded-lg transition-colors ${
                  game.completed
                    ? 'bg-gray-300 dark:bg-gray-700 cursor-not-allowed'
                    : 'bg-green-500 hover:bg-green-600 text-white'
                }`}
              >
                {game.completed ? 'Completed' : 'Play Now'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
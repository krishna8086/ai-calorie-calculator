export interface Plant {
  id: string;
  name: string;
  stage: 'seed' | 'sprout' | 'growing' | 'mature';
  health: number;
  waterLevel: number;
  soilHealth: number;
  plantedAt: Date;
  lastWatered?: Date;
  type: 'traditional' | 'hydroponic' | 'aquaponic';
  systemType?: string;
}

export interface Weather {
  temperature: number;
  humidity: number;
  description: string;
  icon: string;
  forecast: WeatherForecast[];
}

export interface WeatherForecast {
  date: string;
  temperature: number;
  humidity: number;
  description: string;
}

export interface GameState {
  plants: Plant[];
  resources: {
    water: number;
    fertilizer: number;
    seeds: number;
    fishFood?: number;
    nutrients?: number;
  };
  experience: number;
  level: number;
  rewards: Reward[];
  theme: ThemeType;
}

export interface Reward {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
}

export interface FarmingTip {
  id: string;
  category: 'pest' | 'soil' | 'water' | 'general' | 'hydroponic' | 'aquaponic';
  title: string;
  content: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  systemType?: 'traditional' | 'hydroponic' | 'aquaponic';
}

export type NavPage = 'home' | 'tips' | 'weather' | 'games' | 'other' | 'advanced';

export type ThemeType = 'light' | 'dark' | 'nature' | 'ocean' | 'sunset';
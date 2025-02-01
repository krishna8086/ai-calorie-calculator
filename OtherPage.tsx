import React from 'react';
import { BookOpen, Video, Users, Award } from 'lucide-react';

interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  enrolled: number;
}

const COURSES: Course[] = [
  {
    id: '1',
    title: 'Sustainable Urban Farming Basics',
    description: 'Learn the fundamentals of sustainable farming in urban environments.',
    duration: '4 weeks',
    level: 'Beginner',
    enrolled: 1234
  },
  {
    id: '2',
    title: 'Hydroponics Masterclass',
    description: 'Master the art of soil-less farming with this comprehensive course.',
    duration: '6 weeks',
    level: 'Intermediate',
    enrolled: 856
  },
  {
    id: '3',
    title: 'Advanced Pest Management',
    description: 'Learn organic pest control methods for your urban farm.',
    duration: '3 weeks',
    level: 'Advanced',
    enrolled: 567
  }
];

export const OtherPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Learning Resources</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
          <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900">
            <Video className="w-8 h-8 text-green-600 dark:text-green-400 mb-2" />
            <h3 className="text-lg font-semibold mb-2">Video Tutorials</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Watch expert-led videos on various farming techniques
            </p>
          </div>
          
          <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900">
            <Users className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-2" />
            <h3 className="text-lg font-semibold mb-2">Community Forums</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Connect with other urban farmers and share experiences
            </p>
          </div>
          
          <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-900">
            <Award className="w-8 h-8 text-purple-600 dark:text-purple-400 mb-2" />
            <h3 className="text-lg font-semibold mb-2">Certifications</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Earn certificates in various farming specializations
            </p>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-4">Available Courses</h3>
        <div className="space-y-4">
          {COURSES.map(course => (
            <div
              key={course.id}
              className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-green-500 transition-colors"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-semibold">{course.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{course.description}</p>
                </div>
                <span className="px-3 py-1 rounded-full text-sm bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                  {course.level}
                </span>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center">
                    <BookOpen className="w-4 h-4 mr-1" />
                    {course.duration}
                  </span>
                  <span className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {course.enrolled} enrolled
                  </span>
                </div>
                <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
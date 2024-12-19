import React from 'react';
import { Lightbulb } from 'lucide-react';

interface HealthTip {
  id: string;
  title: string;
  content: string;
  category: string;
}

export function HealthTips() {
  const healthTips: HealthTip[] = [
    {
      id: '1',
      title: 'Stay Hydrated',
      content: 'Drink at least 8 glasses of water daily to maintain good health and energy levels.',
      category: 'Daily Habits'
    },
    {
      id: '2',
      title: 'Regular Exercise',
      content: 'Aim for at least 30 minutes of moderate physical activity most days of the week.',
      category: 'Fitness'
    },
    // Add more tips as needed
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Health Tips</h2>
      
      <div className="space-y-4">
        {healthTips.map(tip => (
          <div key={tip.id} className="flex items-start p-4 bg-blue-50 rounded-lg">
            <Lightbulb className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-blue-900">{tip.title}</h3>
              <p className="mt-1 text-blue-700">{tip.content}</p>
              <span className="mt-2 inline-block px-2 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded">
                {tip.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
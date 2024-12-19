import React from 'react';
import { Pill, Salad, Activity, Stethoscope } from 'lucide-react';

interface AnalysisCardsProps {
  disease: string;
  medications: string[];
  meals: string[];
  exercises: string[];
}

export function AnalysisCards({ disease, medications, meals, exercises }: AnalysisCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-center mb-4">
          <div className="bg-blue-100 p-3 rounded-full">
            <Stethoscope className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="ml-3 text-lg font-semibold text-gray-900">Predicted Disease</h3>
        </div>
        <p className="text-gray-700">{disease}</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-center mb-4">
          <div className="bg-green-100 p-3 rounded-full">
            <Pill className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="ml-3 text-lg font-semibold text-gray-900">Medications</h3>
        </div>
        <ul className="text-gray-700 list-disc list-inside">
          {medications.map((med, index) => (
            <li key={index}>{med}</li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-center mb-4">
          <div className="bg-yellow-100 p-3 rounded-full">
            <Salad className="h-6 w-6 text-yellow-600" />
          </div>
          <h3 className="ml-3 text-lg font-semibold text-gray-900">Recommended Meals</h3>
        </div>
        <ul className="text-gray-700 list-disc list-inside">
          {meals.map((meal, index) => (
            <li key={index}>{meal}</li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-center mb-4">
          <div className="bg-purple-100 p-3 rounded-full">
            <Activity className="h-6 w-6 text-purple-600" />
          </div>
          <h3 className="ml-3 text-lg font-semibold text-gray-900">Exercise Plan</h3>
        </div>
        <ul className="text-gray-700 list-disc list-inside">
          {exercises.map((exercise, index) => (
            <li key={index}>{exercise}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
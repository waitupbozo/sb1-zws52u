import React from 'react';
import { X } from 'lucide-react';
import type { Symptom } from '../types/symptoms';

interface SelectedSymptomsProps {
  symptoms: Symptom[];
  onRemove: (symptom: Symptom) => void;
}

export function SelectedSymptoms({ symptoms, onRemove }: SelectedSymptomsProps) {
  if (symptoms.length === 0) {
    return null;
  }

  return (
    <div className="mt-4">
      <h3 className="text-sm font-medium text-gray-700 mb-2">Selected Symptoms</h3>
      <div className="flex flex-wrap gap-2">
        {symptoms.map((symptom) => (
          <span
            key={symptom.id}
            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
          >
            {symptom.name}
            <button
              type="button"
              onClick={() => onRemove(symptom)}
              className="ml-2 inline-flex items-center p-0.5 rounded-full hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <X className="h-3 w-3" />
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}
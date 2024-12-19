import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { symptoms } from '../data/symptoms';
import type { Symptom } from '../types/symptoms';

interface SymptomSearchProps {
  selectedSymptoms: Symptom[];
  onSymptomToggle: (symptom: Symptom) => void;
}

export function SymptomSearch({ selectedSymptoms, onSymptomToggle }: SymptomSearchProps) {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredSymptoms = useMemo(() => {
    const query = searchQuery.toLowerCase();
    return symptoms.filter(symptom => 
      symptom.name.toLowerCase().includes(query) ||
      symptom.category.toLowerCase().includes(query) ||
      symptom.description?.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <div className="space-y-4">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search symptoms..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>

      <div className="bg-white rounded-md shadow-sm border border-gray-200">
        <div className="max-h-96 overflow-y-auto">
          {filteredSymptoms.map((symptom) => {
            const isSelected = selectedSymptoms.some(s => s.id === symptom.id);
            return (
              <label
                key={symptom.id}
                className={`flex items-start p-4 hover:bg-gray-50 cursor-pointer ${
                  isSelected ? 'bg-blue-50' : ''
                } ${
                  symptom !== filteredSymptoms[0] ? 'border-t border-gray-200' : ''
                }`}
              >
                <div className="flex h-5 items-center">
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => onSymptomToggle(symptom)}
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <p className="font-medium text-gray-700">{symptom.name}</p>
                  <p className="text-gray-500">{symptom.description}</p>
                  <span className="inline-flex items-center px-2 py-0.5 mt-1 rounded text-xs font-medium bg-gray-100 text-gray-800">
                    {symptom.category}
                  </span>
                </div>
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import { SymptomSearch } from './SymptomSearch';
import { SelectedSymptoms } from './SelectedSymptoms';
import { AnalysisChart } from './analysis/AnalysisChart';
import { AnalysisCards } from './analysis/AnalysisCards';
import type { Symptom } from '../types/symptoms';

export function Dashboard() {
  const [selectedSymptoms, setSelectedSymptoms] = useState<Symptom[]>([]);
  const [analysisResult, setAnalysisResult] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleSymptomToggle = (symptom: Symptom) => {
    setSelectedSymptoms(prev => {
      const exists = prev.some(s => s.id === symptom.id);
      if (exists) {
        return prev.filter(s => s.id !== symptom.id);
      }
      return [...prev, symptom];
    });
  };

  const handleAnalyze = async () => {
    if (selectedSymptoms.length === 0) {
      alert('Please select at least one symptom');
      return;
    }

    setIsAnalyzing(true);
    // Simulated analysis result
    const mockResult = {
      predictions: [
        { name: 'Influenza', probability: 0.85, symptoms: selectedSymptoms.map(s => s.name) },
        { name: 'Common Cold', probability: 0.45, symptoms: selectedSymptoms.map(s => s.name) },
        { name: 'COVID-19', probability: 0.25, symptoms: selectedSymptoms.map(s => s.name) }
      ],
      disease: 'Influenza',
      medications: ['Oseltamivir', 'Zanamivir', 'Peramivir'],
      meals: ['Chicken Soup', 'Citrus Fruits', 'Green Tea', 'Yogurt'],
      exercises: ['Light Walking', 'Gentle Stretching', 'Deep Breathing', 'Rest']
    };

    setTimeout(() => {
      setAnalysisResult(mockResult);
      setIsAnalyzing(false);
    }, 1500);
  };

  return (
    <div className="relative min-h-screen">
      {/* Background Illustration */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <img
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2400&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative space-y-6 max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Symptom Analysis</h2>
          
          <div className="mb-6">
            <SymptomSearch
              selectedSymptoms={selectedSymptoms}
              onSymptomToggle={handleSymptomToggle}
            />
            <SelectedSymptoms
              symptoms={selectedSymptoms}
              onRemove={handleSymptomToggle}
            />
          </div>

          {selectedSymptoms.length > 0 && (
            <div className="mt-6">
              <button
                onClick={handleAnalyze}
                disabled={isAnalyzing}
                className="w-full flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isAnalyzing ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Analyzing Symptoms...
                  </>
                ) : (
                  'Analyze Symptoms'
                )}
              </button>
            </div>
          )}

          {analysisResult && (
            <div className="mt-8 space-y-8">
              <AnalysisCards
                disease={analysisResult.disease}
                medications={analysisResult.medications}
                meals={analysisResult.meals}
                exercises={analysisResult.exercises}
              />
              <AnalysisChart predictions={analysisResult.predictions} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
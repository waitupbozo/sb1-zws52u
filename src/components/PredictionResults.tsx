import React from 'react';
import { AlertCircle, Pill, Salad, Activity } from 'lucide-react';
import type { PredictionResult } from '../types/model';

interface PredictionResultsProps {
  predictions: PredictionResult[];
}

export function PredictionResults({ predictions }: PredictionResultsProps) {
  const primaryPrediction = predictions[0];

  const categorizeRecommendations = (recommendations: string[]) => {
    return {
      medications: recommendations.filter(r => r.startsWith('Consider:')),
      diet: recommendations.filter(r => r.startsWith('Dietary')),
      general: recommendations.filter(r => !r.startsWith('Consider:') && !r.startsWith('Dietary'))
    };
  };

  const { medications, diet, general } = categorizeRecommendations(primaryPrediction.recommendations || []);

  return (
    <div className="mt-8 space-y-6">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Primary Diagnosis: {primaryPrediction.disease}
          </h3>
          <div className="text-gray-600">
            <p className="mb-4">{primaryPrediction.description}</p>
            
            {general.length > 0 && (
              <div className="mb-6">
                <h4 className="text-lg font-medium text-gray-900 mb-2 flex items-center">
                  <AlertCircle className="h-5 w-5 mr-2 text-blue-500" />
                  General Precautions
                </h4>
                <ul className="list-disc list-inside space-y-1">
                  {general.map((rec, idx) => (
                    <li key={idx} className="text-gray-600">{rec}</li>
                  ))}
                </ul>
              </div>
            )}

            {medications.length > 0 && (
              <div className="mb-6">
                <h4 className="text-lg font-medium text-gray-900 mb-2 flex items-center">
                  <Pill className="h-5 w-5 mr-2 text-green-500" />
                  Recommended Medications
                </h4>
                <ul className="list-disc list-inside space-y-1">
                  {medications.map((med, idx) => (
                    <li key={idx} className="text-gray-600">{med.replace('Consider: ', '')}</li>
                  ))}
                </ul>
              </div>
            )}

            {diet.length > 0 && (
              <div className="mb-6">
                <h4 className="text-lg font-medium text-gray-900 mb-2 flex items-center">
                  <Salad className="h-5 w-5 mr-2 text-yellow-500" />
                  Dietary Recommendations
                </h4>
                <ul className="list-disc list-inside space-y-1">
                  {diet.map((item, idx) => (
                    <li key={idx} className="text-gray-600">{item.replace('Dietary recommendation: ', '')}</li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <h4 className="text-lg font-medium text-gray-900 mb-2 flex items-center">
                <Activity className="h-5 w-5 mr-2 text-purple-500" />
                Exercise Recommendations
              </h4>
              <ul className="list-disc list-inside space-y-1">
                <li className="text-gray-600">Start with gentle exercises like walking or stretching</li>
                <li className="text-gray-600">Gradually increase activity as symptoms improve</li>
                <li className="text-gray-600">Listen to your body and avoid overexertion</li>
                <li className="text-gray-600">Consider low-impact activities like yoga or swimming</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {predictions.length > 1 && (
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Other Possible Conditions</h4>
          <div className="space-y-2">
            {predictions.slice(1).map((prediction, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2 bg-white rounded-md"
              >
                <span className="text-sm text-gray-900">{prediction.disease}</span>
                <span className="text-sm text-gray-500">
                  {(prediction.probability * 100).toFixed(1)}% match
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
import React from 'react';
import { Calendar, Activity, Stethoscope } from 'lucide-react';

interface HistoryEntry {
  id: string;
  date: string;
  symptoms: string[];
  prediction: string;
  recommendations: string[];
}

export function HistoryTable() {
  // Mock data - replace with actual data from your backend/context
  const historyEntries: HistoryEntry[] = [
    {
      id: '1',
      date: '2024-03-15',
      symptoms: ['Fever', 'Cough', 'Fatigue'],
      prediction: 'Common Cold',
      recommendations: ['Rest', 'Hydration', 'Over-the-counter medication']
    },
    // Add more mock entries as needed
  ];

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  Date
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center">
                  <Activity className="h-4 w-4 mr-2" />
                  Symptoms
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center">
                  <Stethoscope className="h-4 w-4 mr-2" />
                  Prediction
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Recommendations
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {historyEntries.map((entry) => (
              <tr key={entry.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(entry.date).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  <div className="flex flex-wrap gap-1">
                    {entry.symptoms.map((symptom, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      >
                        {symptom}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {entry.prediction}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  <ul className="list-disc list-inside">
                    {entry.recommendations.map((rec, index) => (
                      <li key={index}>{rec}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
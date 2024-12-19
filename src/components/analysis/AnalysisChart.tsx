import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend
} from 'recharts';

interface Disease {
  name: string;
  probability: number;
  symptoms: string[];
}

interface AnalysisChartProps {
  predictions: Disease[];
}

export function AnalysisChart({ predictions }: AnalysisChartProps) {
  const barChartData = predictions.map(p => ({
    name: p.name,
    probability: (p.probability * 100).toFixed(1)
  }));

  const radarChartData = predictions[0].symptoms.map(symptom => ({
    subject: symptom,
    relevance: Math.random() * 100 // This would be replaced with actual symptom relevance data
  }));

  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Disease Probability Analysis</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis label={{ value: 'Probability (%)', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Bar dataKey="probability" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Symptom Analysis</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={radarChartData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis />
              <Radar
                name="Symptom Relevance"
                dataKey="relevance"
                stroke="#3B82F6"
                fill="#93C5FD"
                fillOpacity={0.6}
              />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
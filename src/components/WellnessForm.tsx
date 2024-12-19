import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import type { WellnessMetric } from '../types/health';

interface WellnessFormProps {
  onSubmit: (metric: Omit<WellnessMetric, 'id'>) => void;
}

export function WellnessForm({ onSubmit }: WellnessFormProps) {
  const [category, setCategory] = useState<WellnessMetric['category']>('sleep');
  const [value, setValue] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      category,
      value: Number(value),
      date: new Date().toISOString(),
      notes: notes.trim() || undefined,
    });
    setValue('');
    setNotes('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Track New Metric</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as WellnessMetric['category'])}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="sleep">Sleep</option>
            <option value="exercise">Exercise</option>
            <option value="nutrition">Nutrition</option>
            <option value="mood">Mood</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Value</label>
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Notes</label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            rows={3}
          />
        </div>
        <button
          type="submit"
          className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add Entry
        </button>
      </div>
    </form>
  );
}
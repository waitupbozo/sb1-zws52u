import React from 'react';
import { Filter, Calendar } from 'lucide-react';

export function HistoryFilters() {
  return (
    <div className="flex flex-wrap gap-4 bg-white p-4 rounded-lg shadow-sm">
      <div className="flex-1 min-w-[200px]">
        <label className="block text-sm font-medium text-gray-700">Date Range</label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Calendar className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="date"
            className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
          />
        </div>
      </div>

      <div className="flex-1 min-w-[200px]">
        <label className="block text-sm font-medium text-gray-700">Condition</label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Filter className="h-5 w-5 text-gray-400" />
          </div>
          <select className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md">
            <option value="">All Conditions</option>
            <option value="cold">Common Cold</option>
            <option value="flu">Influenza</option>
            <option value="allergy">Allergies</option>
          </select>
        </div>
      </div>
    </div>
  );
}
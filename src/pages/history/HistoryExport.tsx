import React from 'react';
import { Download } from 'lucide-react';

export function HistoryExport() {
  const handleExport = (format: 'pdf' | 'csv') => {
    // Implement export functionality
    console.log(`Exporting as ${format}`);
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => handleExport('pdf')}
        className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <Download className="h-4 w-4 mr-2" />
        Export PDF
      </button>
      <button
        onClick={() => handleExport('csv')}
        className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <Download className="h-4 w-4 mr-2" />
        Export CSV
      </button>
    </div>
  );
}
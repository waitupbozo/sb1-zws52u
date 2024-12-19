import React from 'react';
import { HistoryTable } from './history/HistoryTable';
import { HistoryFilters } from './history/HistoryFilters';
import { HistoryExport } from './history/HistoryExport';

export function History() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Medical History</h1>
        <HistoryExport />
      </div>

      <HistoryFilters />
      <HistoryTable />
    </div>
  );
}
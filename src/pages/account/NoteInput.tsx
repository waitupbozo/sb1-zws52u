import React from 'react';
import { PlusCircle } from 'lucide-react';

interface NoteInputProps {
  value: string;
  onChange: (value: string) => void;
  onAdd: () => void;
}

export function NoteInput({ value, onChange, onAdd }: NoteInputProps) {
  return (
    <div className="flex space-x-2 mb-4">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Add a note..."
        className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      />
      <button
        onClick={onAdd}
        className="p-2 text-blue-600 hover:text-blue-700"
      >
        <PlusCircle className="h-5 w-5" />
      </button>
    </div>
  );
}
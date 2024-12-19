import React from 'react';
import { X } from 'lucide-react';
import type { Note } from '../../types/notes';

interface NoteItemProps {
  note: Note;
  onDelete: (id: string) => void;
}

export function NoteItem({ note, onDelete }: NoteItemProps) {
  return (
    <div className="flex items-start space-x-2 p-3 bg-gray-50 rounded-md">
      <p className="flex-1 text-sm text-gray-700">{note.content}</p>
      <button
        onClick={() => onDelete(note.id)}
        className="text-gray-400 hover:text-red-500"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
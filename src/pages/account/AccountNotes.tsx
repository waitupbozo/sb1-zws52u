import React, { useState } from 'react';
import { PlusCircle, X } from 'lucide-react';
import { Note } from '../../types/notes';
import { NoteItem } from './NoteItem';
import { NoteInput } from './NoteInput';

export function AccountNotes() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [newNote, setNewNote] = useState('');

  const addNote = () => {
    if (newNote.trim()) {
      const note: Note = {
        id: crypto.randomUUID(),
        content: newNote.trim(),
        date: new Date().toISOString()
      };
      setNotes(prev => [note, ...prev]);
      setNewNote('');
    }
  };

  const deleteNote = (id: string) => {
    setNotes(prev => prev.filter(note => note.id !== id));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Notes</h2>
      
      <NoteInput
        value={newNote}
        onChange={setNewNote}
        onAdd={addNote}
      />

      <div className="space-y-3">
        {notes.map(note => (
          <NoteItem
            key={note.id}
            note={note}
            onDelete={deleteNote}
          />
        ))}
      </div>
    </div>
  );
}
import React from 'react';
import { AccountProfile } from './account/AccountProfile';
import { AccountNotes } from './account/AccountNotes';

export function Account() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <AccountProfile />
          </div>
          <div className="md:col-span-1">
            <AccountNotes />
          </div>
        </div>
      </div>
    </div>
  );
}
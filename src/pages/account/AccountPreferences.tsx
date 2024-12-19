import React from 'react';
import { useAuth } from '../../context/AuthContext';

export function AccountPreferences() {
  const [preferences, setPreferences] = React.useState({
    notifications: true,
    language: 'en',
    theme: 'light'
  });

  const handlePreferenceChange = (key: string, value: any) => {
    setPreferences(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-medium mb-4">Preferences</h3>
      
      <div className="space-y-4">
        <div>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={preferences.notifications}
              onChange={(e) => handlePreferenceChange('notifications', e.target.checked)}
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span>Enable Notifications</span>
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Language</label>
          <select
            value={preferences.language}
            onChange={(e) => handlePreferenceChange('language', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Theme</label>
          <select
            value={preferences.theme}
            onChange={(e) => handlePreferenceChange('theme', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
      </div>
    </div>
  );
}
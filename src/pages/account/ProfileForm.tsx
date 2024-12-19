import React, { useState } from 'react';
import { UserCircle, Mail, Calendar, Users, Save } from 'lucide-react';
import type { User } from '../../types/auth';

interface ProfileFormProps {
  user: User | null;
  isEditing: boolean;
  onSubmit: (formData: any) => Promise<void>;
}

export function ProfileForm({ user, isEditing, onSubmit }: ProfileFormProps) {
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    age: user?.age || '',
    gender: user?.gender || ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6">
        <div>
          <label className="flex items-center text-sm font-medium text-gray-700">
            <UserCircle className="h-5 w-5 mr-2" />
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            disabled={!isEditing}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 disabled:bg-gray-100"
          />
        </div>

        <div>
          <label className="flex items-center text-sm font-medium text-gray-700">
            <Mail className="h-5 w-5 mr-2" />
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            disabled={!isEditing}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 disabled:bg-gray-100"
          />
        </div>

        <div>
          <label className="flex items-center text-sm font-medium text-gray-700">
            <Calendar className="h-5 w-5 mr-2" />
            Age
          </label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            disabled={!isEditing}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 disabled:bg-gray-100"
          />
        </div>

        <div>
          <label className="flex items-center text-sm font-medium text-gray-700">
            <Users className="h-5 w-5 mr-2" />
            Gender
          </label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            disabled={!isEditing}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 disabled:bg-gray-100"
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            <option value="prefer-not-to-say">Prefer not to say</option>
          </select>
        </div>
      </div>

      {isEditing && (
        <div className="flex justify-end">
          <button
            type="submit"
            className="flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <Save className="h-4 w-4 mr-2" />
            Save Changes
          </button>
        </div>
      )}
    </form>
  );
}
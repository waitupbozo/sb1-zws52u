import React, { useState } from 'react';
import { UserCircle, Mail, Calendar, Users, Save } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { ProfileForm } from './ProfileForm';

export function AccountProfile() {
  const { user, updateUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = async (formData: any) => {
    try {
      await updateUser(formData);
      setIsEditing(false);
    } catch (error) {
      console.error('Failed to update profile:', error);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Profile Information</h2>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="text-blue-600 hover:text-blue-700"
        >
          {isEditing ? 'Cancel' : 'Edit'}
        </button>
      </div>

      <ProfileForm
        user={user}
        isEditing={isEditing}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
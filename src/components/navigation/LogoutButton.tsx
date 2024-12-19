import React, { useState } from 'react';
import { LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { LogoutConfirmDialog } from './LogoutConfirmDialog';

export function LogoutButton() {
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowConfirm(true)}
        className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
      >
        <LogOut className="h-5 w-5" />
        <span className="ml-2">Logout</span>
      </button>
      
      <LogoutConfirmDialog
        isOpen={showConfirm}
        onClose={() => setShowConfirm(false)}
      />
    </>
  );
}
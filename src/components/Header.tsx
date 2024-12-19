import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-6 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Heart className="h-8 w-8" />
          <h1 className="text-2xl font-bold">MediWhiz</h1>
        </Link>
        <nav>
          {user ? (
            <div className="flex items-center space-x-6">
              <ul className="flex space-x-6">
                <li><Link to="/account" className="hover:text-blue-200">Account</Link></li>
                <li><Link to="/history" className="hover:text-blue-200">History</Link></li>
                <li><Link to="/consultant" className="hover:text-blue-200">Consultant</Link></li>
              </ul>
              <button
                onClick={logout}
                className="flex items-center space-x-1 hover:text-blue-200"
              >
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </button>
            </div>
          ) : (
            <ul className="flex space-x-6">
              <li><Link to="/login" className="hover:text-blue-200">Login</Link></li>
              <li><Link to="/signup" className="hover:text-blue-200">Sign Up</Link></li>
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
}
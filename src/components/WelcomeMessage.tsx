import React from 'react';
import { Heart, Activity, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

export function WelcomeMessage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Medwhiz!</h1>
        <h2 className="text-xl text-gray-600 mb-8">Let's keep you healthy and informed!</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-100 p-4 rounded-lg shadow-md">
            <Heart className="h-8 w-8 text-blue-500 mx-auto mb-2" />
            <p className="text-gray-700">Track your symptoms easily.</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg shadow-md">
            <Brain className="h-8 w-8 text-green-500 mx-auto mb-2" />
            <p className="text-gray-700">Receive accurate predictions powered by AI.</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg shadow-md col-span-1 sm:col-span-2">
            <Activity className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
            <p className="text-gray-700">Get health tips and remedies tailored for you.</p>
          </div>
        </div>
        
        <Link
          to="/dashboard"
          className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
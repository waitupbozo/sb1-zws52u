import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { NavBar } from './components/navigation/NavBar';
import { Dashboard } from './components/Dashboard';
import { SignUp } from './pages/SignUp';
import { Login } from './pages/Login';
import { Account } from './pages/Account';
import { History } from './pages/History';
import { Consultant } from './pages/Consultant';
import { WelcomeMessage } from './components/WelcomeMessage';
import { AuthProvider, useAuth } from './context/AuthContext';
import { useIdleTimeout } from './hooks/useIdleTimeout';

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  useIdleTimeout(); // Add idle timeout to private routes
  return user ? <>{children}</> : <Navigate to="/login" />;
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <NavBar />
          <main className="max-w-7xl mx-auto py-8 px-4">
            <Routes>
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/welcome" element={<WelcomeMessage />} />
              <Route
                path="/account"
                element={
                  <PrivateRoute>
                    <Account />
                  </PrivateRoute>
                }
              />
              <Route
                path="/history"
                element={
                  <PrivateRoute>
                    <History />
                  </PrivateRoute>
                }
              />
              <Route
                path="/consultant"
                element={
                  <PrivateRoute>
                    <Consultant />
                  </PrivateRoute>
                }
              />
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}
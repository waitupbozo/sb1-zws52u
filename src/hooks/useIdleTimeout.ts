import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { IDLE_TIMEOUT } from '../utils/constants';

export function useIdleTimeout() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const timeoutRef = useRef<number>();

  const resetTimeout = () => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(() => {
      logout();
      navigate('/login');
    }, IDLE_TIMEOUT);
  };

  useEffect(() => {
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
    
    const handleActivity = () => {
      resetTimeout();
    };

    events.forEach(event => {
      document.addEventListener(event, handleActivity);
    });

    resetTimeout();

    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
      events.forEach(event => {
        document.removeEventListener(event, handleActivity);
      });
    };
  }, [logout, navigate]);
}
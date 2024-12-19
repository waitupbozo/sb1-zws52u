import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { NavLink } from './NavLink';
import { LogoutButton } from './LogoutButton';
import { APP_NAME, NAV_ITEMS } from '../../utils/constants';
import * as Icons from 'lucide-react';

export function NavBar() {
  const { user } = useAuth();
  
  if (!user) return null;

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center px-2 py-2 text-blue-600">
              <Stethoscope className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold">{APP_NAME}</span>
            </Link>
          </div>

          <div className="flex space-x-4">
            {NAV_ITEMS.map(({ path, label, icon }) => {
              const IconComponent = Icons[icon as keyof typeof Icons];
              return (
                <NavLink
                  key={path}
                  to={path}
                  icon={<IconComponent className="h-5 w-5" />}
                  label={label}
                />
              );
            })}
            <LogoutButton />
          </div>
        </div>
      </div>
    </nav>
  );
}
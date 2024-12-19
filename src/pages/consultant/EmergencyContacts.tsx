import React from 'react';
import { Phone, Building2, AlertCircle } from 'lucide-react';

interface EmergencyContact {
  id: string;
  name: string;
  phone: string;
  address?: string;
  type: 'hospital' | 'helpline';
}

export function EmergencyContacts() {
  const emergencyContacts: EmergencyContact[] = [
    {
      id: '1',
      name: 'Emergency Medical Services',
      phone: '911',
      type: 'helpline'
    },
    {
      id: '2',
      name: 'City General Hospital',
      phone: '(555) 123-4567',
      address: '123 Healthcare Ave, Medical District',
      type: 'hospital'
    },
    // Add more contacts as needed
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <AlertCircle className="h-6 w-6 text-red-500 mr-2" />
        <h2 className="text-xl font-semibold">Emergency Contacts</h2>
      </div>

      <div className="space-y-4">
        {emergencyContacts.map(contact => (
          <div
            key={contact.id}
            className="flex items-start p-4 border border-gray-200 rounded-lg hover:border-red-200 hover:bg-red-50 transition-colors"
          >
            {contact.type === 'hospital' ? (
              <Building2 className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
            ) : (
              <Phone className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
            )}
            <div>
              <h3 className="font-medium text-gray-900">{contact.name}</h3>
              <p className="text-red-600 font-medium">{contact.phone}</p>
              {contact.address && (
                <p className="text-gray-500 text-sm mt-1">{contact.address}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
import React from 'react';
import { useAuth } from '../../context/AuthContext';

interface MedicalInfo {
  conditions: string[];
  allergies: string[];
  medications: string[];
}

export function AccountMedical() {
  const { user } = useAuth();
  const [medicalInfo, setMedicalInfo] = React.useState<MedicalInfo>({
    conditions: [],
    allergies: [],
    medications: []
  });

  const handleAddItem = (category: keyof MedicalInfo, item: string) => {
    setMedicalInfo(prev => ({
      ...prev,
      [category]: [...prev[category], item]
    }));
  };

  const handleRemoveItem = (category: keyof MedicalInfo, index: number) => {
    setMedicalInfo(prev => ({
      ...prev,
      [category]: prev[category].filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium mb-4">Medical History</h3>
        {/* Add medical history form fields */}
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium mb-4">Allergies</h3>
        {/* Add allergies form fields */}
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium mb-4">Current Medications</h3>
        {/* Add medications form fields */}
      </div>
    </div>
  );
}
import React from 'react';
import { ConsultationScheduler } from './consultant/ConsultationScheduler';
import { HealthQA } from './consultant/HealthQA';
import { HealthTips } from './consultant/HealthTips';
import { EmergencyContacts } from './consultant/EmergencyContacts';

export function Consultant() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-gray-900">Healthcare Consultation</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ConsultationScheduler />
        <HealthQA />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <HealthTips />
        <EmergencyContacts />
      </div>
    </div>
  );
}
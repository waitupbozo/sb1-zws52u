import React, { useState } from 'react';
import { Calendar, Clock, Video, MessageSquare } from 'lucide-react';

type ConsultationType = 'video' | 'chat';

export function ConsultationScheduler() {
  const [consultationType, setConsultationType] = useState<ConsultationType>('video');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleSchedule = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement scheduling logic
    console.log('Scheduling consultation:', { consultationType, selectedDate, selectedTime });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Schedule Consultation</h2>
      
      <form onSubmit={handleSchedule} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Consultation Type
          </label>
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setConsultationType('video')}
              className={`flex items-center justify-center p-3 rounded-lg border ${
                consultationType === 'video'
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              <Video className="h-5 w-5 mr-2" />
              Video Call
            </button>
            <button
              type="button"
              onClick={() => setConsultationType('chat')}
              className={`flex items-center justify-center p-3 rounded-lg border ${
                consultationType === 'chat'
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              <MessageSquare className="h-5 w-5 mr-2" />
              Chat
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Calendar className="h-4 w-4 inline mr-2" />
            Select Date
          </label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Clock className="h-4 w-4 inline mr-2" />
            Select Time
          </label>
          <select
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          >
            <option value="">Choose a time slot</option>
            <option value="09:00">09:00 AM</option>
            <option value="10:00">10:00 AM</option>
            <option value="11:00">11:00 AM</option>
            <option value="14:00">02:00 PM</option>
            <option value="15:00">03:00 PM</option>
            <option value="16:00">04:00 PM</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Schedule Consultation
        </button>
      </form>
    </div>
  );
}
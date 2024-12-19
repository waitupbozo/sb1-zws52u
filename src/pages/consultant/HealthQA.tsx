import React, { useState } from 'react';
import { Search, MessageCircle } from 'lucide-react';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export function HealthQA() {
  const [searchQuery, setSearchQuery] = useState('');

  const faqs: FAQ[] = [
    {
      id: '1',
      question: 'What are common cold symptoms?',
      answer: 'Common cold symptoms include runny nose, sore throat, cough, congestion, and mild body aches.',
      category: 'General Health'
    },
    {
      id: '2',
      question: 'How can I improve my sleep?',
      answer: 'Maintain a regular sleep schedule, create a relaxing bedtime routine, avoid screens before bed, and ensure your bedroom is dark and cool.',
      category: 'Wellness'
    },
    // Add more FAQs as needed
  ];

  const filteredFAQs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Health Q&A</h2>
      
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="text"
          placeholder="Search health questions..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="space-y-4">
        {filteredFAQs.map(faq => (
          <div key={faq.id} className="border-b border-gray-200 pb-4">
            <div className="flex items-start">
              <MessageCircle className="h-5 w-5 text-blue-500 mt-1 mr-2 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                <p className="mt-1 text-gray-600">{faq.answer}</p>
                <span className="mt-2 inline-block px-2 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded">
                  {faq.category}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
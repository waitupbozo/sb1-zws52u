export interface WellnessMetric {
  id: string;
  category: 'sleep' | 'exercise' | 'nutrition' | 'mood';
  value: number;
  date: string;
  notes?: string;
}

export interface SymptomLog {
  id: string;
  symptom: string;
  severity: 1 | 2 | 3 | 4 | 5;
  date: string;
  notes?: string;
}
export interface Symptom {
  id: string;
  name: string;
  category: string;
  description?: string;
}

export interface SymptomPrediction {
  disease: string;
  probability: number;
  description: string;
  recommendations: string[];
}
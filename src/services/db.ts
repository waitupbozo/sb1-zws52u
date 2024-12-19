import { openDB, DBSchema, IDBPDatabase } from 'idb';
import type { User } from '../types/auth';
import type { WellnessMetric, SymptomLog } from '../types/health';
import type { ModelPrediction } from '../types/model';

interface MedwhizDB extends DBSchema {
  users: {
    key: string;
    value: User;
    indexes: { 'by-email': string };
  };
  metrics: {
    key: string;
    value: WellnessMetric;
    indexes: { 'by-user': string; 'by-category': string };
  };
  symptoms: {
    key: string;
    value: SymptomLog;
    indexes: { 'by-user': string; 'by-date': string };
  };
  predictions: {
    key: string;
    value: ModelPrediction;
    indexes: { 'by-timestamp': string };
  };
}

class DatabaseService {
  private db: Promise<IDBPDatabase<MedwhizDB>>;

  constructor() {
    this.db = this.initDatabase();
  }

  private async initDatabase() {
    return openDB<MedwhizDB>('medwhiz-db', 1, {
      upgrade(db) {
        // Users store
        const userStore = db.createObjectStore('users', { keyPath: 'id' });
        userStore.createIndex('by-email', 'email', { unique: true });

        // Metrics store
        const metricsStore = db.createObjectStore('metrics', { keyPath: 'id' });
        metricsStore.createIndex('by-user', 'userId', { unique: false });
        metricsStore.createIndex('by-category', 'category', { unique: false });

        // Symptoms store
        const symptomsStore = db.createObjectStore('symptoms', { keyPath: 'id' });
        symptomsStore.createIndex('by-user', 'userId', { unique: false });
        symptomsStore.createIndex('by-date', 'date', { unique: false });

        // Predictions store
        const predictionsStore = db.createObjectStore('predictions', { keyPath: 'id' });
        predictionsStore.createIndex('by-timestamp', 'timestamp', { unique: false });
      },
    });
  }

  // Existing methods...

  // Predictions operations
  async addPrediction(prediction: ModelPrediction): Promise<void> {
    const db = await this.db;
    await db.add('predictions', prediction);
  }

  async getPredictions(limit = 10): Promise<ModelPrediction[]> {
    const db = await this.db;
    const predictions = await db.getAllFromIndex('predictions', 'by-timestamp');
    return predictions.sort((a, b) => 
      new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    ).slice(0, limit);
  }
}

export const db = new DatabaseService();
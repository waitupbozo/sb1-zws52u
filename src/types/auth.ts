export interface User {
  id: string;
  email: string;
  name: string;
  age?: number;
  gender?: string;
  role: 'user' | 'consultant';
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string, age?: number, gender?: string) => Promise<void>;
  updateUser: (userData: Partial<User>) => Promise<void>;
  logout: () => void;
}
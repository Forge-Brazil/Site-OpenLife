
export interface Course {
  id: string;
  title: string;
  age: string;
  focus: string;
  description: string;
  highlights: string[];
  image: string;
}

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  date: string;
  image: string;
  slug: string;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  type: 'contact' | 'level-test';
  message?: string;
  level?: string;
  createdAt: string;
}

export interface LevelQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}
export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface BlogPost {
  id: number;
  title: string;
  category: string;
  image: string;
  summary: string;
  subtitle?: string;
  content?: string;
}

export interface Service {
  id: number;
  title: string;
  icon: string;
}

export interface Skill {
  name: string;
  icon: string;
  color: string;
}
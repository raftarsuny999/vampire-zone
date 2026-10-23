export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';

export type CategoryName =
  | 'Price Action'
  | 'Market Structure'
  | 'Liquidity'
  | 'SMT Divergence'
  | 'ICT Concepts';

export interface Material {
  id: string;
  title: string;
  category: CategoryName;
  difficulty: Difficulty;
  content: string;
  tags: string[];
  keyTakeaways: string[];
  relatedConcepts: string[];
  createdAt: number;
  updatedAt: number;
}

export interface CategoryInfo {
  name: CategoryName;
  shortDesc: string;
  description: string;
  gradient: string;
  iconBg: string;
}

export type View = 'dashboard' | 'library' | 'detail';

export interface MaterialFormData {
  title: string;
  category: CategoryName;
  difficulty: Difficulty;
  content: string;
  tags: string[];
  keyTakeaways: string[];
  relatedConcepts: string[];
}

export const DIFFICULTIES: Difficulty[] = ['Beginner', 'Intermediate', 'Advanced'];

export const CATEGORY_NAMES: CategoryName[] = [
  'Price Action',
  'Market Structure',
  'Liquidity',
  'SMT Divergence',
  'ICT Concepts',
];

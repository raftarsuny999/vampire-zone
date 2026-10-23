import { TrendingUp, GitBranch, Droplets, Split, GraduationCap } from 'lucide-react';
import type { CategoryName } from '@/types';

const ICONS: Record<CategoryName, typeof TrendingUp> = {
  'Price Action': TrendingUp,
  'Market Structure': GitBranch,
  Liquidity: Droplets,
  'SMT Divergence': Split,
  'ICT Concepts': GraduationCap,
};

interface CategoryIconProps {
  category: CategoryName;
  className?: string;
}

export function CategoryIcon({ category, className }: CategoryIconProps) {
  const Icon = ICONS[category];
  return <Icon className={className} />;
}

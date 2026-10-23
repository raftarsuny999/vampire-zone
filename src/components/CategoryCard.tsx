import { ArrowRight } from 'lucide-react';
import type { Material, CategoryName } from '@/types';
import { CATEGORIES } from '@/constants';
import { CategoryIcon } from './CategoryIcon';

interface CategoryCardProps {
  name: CategoryName;
  count: number;
  latestMaterial?: Material;
  onClick: () => void;
}

export function CategoryCard({ name, count, latestMaterial, onClick }: CategoryCardProps) {
  const cat = CATEGORIES.find((c) => c.name === name)!;

  return (
    <button
      onClick={onClick}
      className={`group relative overflow-hidden rounded-2xl border border-white/5 p-5 text-left bg-gradient-to-br ${cat.gradient} bg-navy-800 transition-all hover:border-electric-500/20 card-glow animate-slide-up`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${cat.iconBg}`}>
          <CategoryIcon category={name} className="w-6 h-6" />
        </div>
        <span className="text-2xl font-display font-bold text-white/90">{count}</span>
      </div>

      <h3 className="font-display font-semibold text-white text-base mb-1">{name}</h3>
      <p className="text-xs text-gray-400 mb-4 line-clamp-1">{cat.shortDesc}</p>

      {latestMaterial && (
        <div className="pt-3 border-t border-white/5">
          <p className="text-[10px] uppercase tracking-wider text-gray-500 mb-1">Latest note</p>
          <p className="text-xs text-gray-300 line-clamp-1">{latestMaterial.title}</p>
        </div>
      )}

      <div className="flex items-center gap-1 mt-3 text-xs font-medium text-electric-400 group-hover:gap-2 transition-all">
        Explore <ArrowRight className="w-3.5 h-3.5" />
      </div>
    </button>
  );
}

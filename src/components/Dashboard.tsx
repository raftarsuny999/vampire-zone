import { BookOpen, TrendingUp, Award, Layers } from 'lucide-react';
import type { Material, CategoryName } from '@/types';
import { CATEGORIES } from '@/constants';
import { CategoryCard } from './CategoryCard';
import { MaterialCard } from './MaterialCard';

interface DashboardProps {
  materials: Material[];
  onSelectMaterial: (material: Material) => void;
  onDeleteMaterial: (material: Material) => void;
  onCategoryClick: (category: CategoryName) => void;
  onSeeAll: () => void;
}

export function Dashboard({
  materials,
  onSelectMaterial,
  onDeleteMaterial,
  onCategoryClick,
  onSeeAll,
}: DashboardProps) {
  const totalMaterials = materials.length;
  const totalCategories = CATEGORIES.length;
  const totalTakeaways = materials.reduce((sum, m) => sum + m.keyTakeaways.length, 0);
  const avgDifficulty = (() => {
    if (totalMaterials === 0) return '—';
    const scores = { Beginner: 1, Intermediate: 2, Advanced: 3 };
    const avg = materials.reduce((s, m) => s + scores[m.difficulty], 0) / totalMaterials;
    if (avg < 1.67) return 'Beginner';
    if (avg < 2.34) return 'Intermediate';
    return 'Advanced';
  })();

  const recentMaterials = [...materials]
    .sort((a, b) => b.updatedAt - a.updatedAt)
    .slice(0, 6);

  const stats = [
    { label: 'Total Notes', value: totalMaterials, icon: BookOpen, color: 'text-electric-400', bg: 'bg-electric-500/10' },
    { label: 'Categories', value: totalCategories, icon: Layers, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
    { label: 'Key Takeaways', value: totalTakeaways, icon: Award, color: 'text-amber-400', bg: 'bg-amber-500/10' },
    { label: 'Avg Level', value: avgDifficulty, icon: TrendingUp, color: 'text-rose-400', bg: 'bg-rose-500/10' },
  ];

  return (
    <div className="px-4 sm:px-6 py-6 space-y-8 max-w-7xl mx-auto">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-navy-700 via-navy-800 to-navy-900 border border-white/5 p-6 sm:p-8">
        <div className="absolute top-0 right-0 w-64 h-64 bg-electric-500/5 rounded-full blur-3xl -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-1/3 w-48 h-48 bg-electric-600/5 rounded-full blur-3xl" />
        <div className="relative">
          <p className="text-electric-400 text-xs font-semibold tracking-wider uppercase mb-2">Welcome back</p>
          <h1 className="font-display font-bold text-white text-2xl sm:text-3xl mb-2">
            Your Trading Knowledge <span className="text-gradient">Vault</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl leading-relaxed">
            Study, organize, and master trading concepts — from Price Action to ICT methodologies. Your notes are saved and ready whenever you need them.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="bg-navy-800 rounded-2xl border border-white/5 p-4 sm:p-5 animate-slide-up"
            >
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-3 ${stat.bg}`}>
                <Icon className={`w-[18px] h-[18px] ${stat.color}`} />
              </div>
              <p className="font-display font-bold text-white text-xl sm:text-2xl">{stat.value}</p>
              <p className="text-xs text-gray-500 mt-0.5">{stat.label}</p>
            </div>
          );
        })}
      </div>

      {/* Categories */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="font-display font-bold text-white text-lg">Categories</h2>
            <p className="text-xs text-gray-500">Browse notes by topic</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CATEGORIES.map((cat) => {
            const catMaterials = materials.filter((m) => m.category === cat.name);
            const latest = [...catMaterials].sort((a, b) => b.updatedAt - a.updatedAt)[0];
            return (
              <CategoryCard
                key={cat.name}
                name={cat.name}
                count={catMaterials.length}
                latestMaterial={latest}
                onClick={() => onCategoryClick(cat.name)}
              />
            );
          })}
        </div>
      </div>

      {/* Recent materials */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="font-display font-bold text-white text-lg">Recently Updated</h2>
            <p className="text-xs text-gray-500">Your latest study notes</p>
          </div>
          <button
            onClick={onSeeAll}
            className="text-sm font-medium text-electric-400 hover:text-electric-300 transition-colors"
          >
            See all →
          </button>
        </div>
        {recentMaterials.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {recentMaterials.map((m) => (
              <MaterialCard
                key={m.id}
                material={m}
                onClick={() => onSelectMaterial(m)}
                onDelete={() => onDeleteMaterial(m)}
              />
            ))}
          </div>
        ) : (
          <div className="bg-navy-800 rounded-2xl border border-white/5 p-12 text-center">
            <p className="text-gray-500 text-sm">No notes yet. Click "Add New Material" to create your first one.</p>
          </div>
        )}
      </div>
    </div>
  );
}

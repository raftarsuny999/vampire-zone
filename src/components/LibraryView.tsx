import { Library as LibraryIcon, BookOpen } from 'lucide-react';
import type { Material, CategoryName, Difficulty } from '@/types';
import { CATEGORIES } from '@/constants';
import { DIFFICULTIES } from '@/types';
import { MaterialCard } from './MaterialCard';

interface LibraryViewProps {
  materials: Material[];
  search: string;
  activeCategory: CategoryName | 'All';
  activeDifficulty: Difficulty | 'All';
  onCategoryChange: (cat: CategoryName | 'All') => void;
  onDifficultyChange: (d: Difficulty | 'All') => void;
  onSelectMaterial: (material: Material) => void;
  onDeleteMaterial: (material: Material) => void;
}

export function LibraryView({
  materials,
  search,
  activeCategory,
  activeDifficulty,
  onCategoryChange,
  onDifficultyChange,
  onSelectMaterial,
  onDeleteMaterial,
}: LibraryViewProps) {
  const filtered = materials.filter((m) => {
    if (activeCategory !== 'All' && m.category !== activeCategory) return false;
    if (activeDifficulty !== 'All' && m.difficulty !== activeDifficulty) return false;
    if (search.trim()) {
      const q = search.toLowerCase();
      return (
        m.title.toLowerCase().includes(q) ||
        m.content.toLowerCase().includes(q) ||
        m.tags.some((t) => t.toLowerCase().includes(q)) ||
        m.category.toLowerCase().includes(q) ||
        m.keyTakeaways.some((t) => t.toLowerCase().includes(q)) ||
        m.relatedConcepts.some((t) => t.toLowerCase().includes(q))
      );
    }
    return true;
  });

  return (
    <div className="px-4 sm:px-6 py-6 max-w-7xl mx-auto">
      {/* Filters */}
      <div className="space-y-3 mb-6">
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Category</p>
          <div className="flex flex-wrap gap-2">
            <FilterChip
              label="All"
              active={activeCategory === 'All'}
              onClick={() => onCategoryChange('All')}
            />
            {CATEGORIES.map((cat) => (
              <FilterChip
                key={cat.name}
                label={cat.name}
                active={activeCategory === cat.name}
                onClick={() => onCategoryChange(cat.name)}
              />
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Difficulty</p>
          <div className="flex flex-wrap gap-2">
            <FilterChip
              label="All Levels"
              active={activeDifficulty === 'All'}
              onClick={() => onDifficultyChange('All')}
            />
            {DIFFICULTIES.map((d) => (
              <FilterChip
                key={d}
                label={d}
                active={activeDifficulty === d}
                onClick={() => onDifficultyChange(d)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-gray-500">
          {filtered.length} {filtered.length === 1 ? 'note' : 'notes'}
        </p>
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((m) => (
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
          <div className="w-14 h-14 rounded-2xl bg-navy-700 flex items-center justify-center mx-auto mb-4">
            {search.trim() ? (
              <LibraryIcon className="w-7 h-7 text-gray-600" />
            ) : (
              <BookOpen className="w-7 h-7 text-gray-600" />
            )}
          </div>
          <p className="text-gray-400 text-sm font-medium mb-1">
            {search.trim() ? 'No notes found' : 'No notes in this category yet'}
          </p>
          <p className="text-gray-600 text-xs">
            {search.trim()
              ? `No results for "${search.trim()}". Try different keywords or clear the search.`
              : 'Click "Add New Material" to create one for this category.'}
          </p>
        </div>
      )}
    </div>
  );
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all border ${
        active
          ? 'bg-electric-500/15 text-electric-400 border-electric-500/30'
          : 'bg-navy-700/40 text-gray-400 border-white/5 hover:text-white hover:border-white/10'
      }`}
    >
      {label}
    </button>
  );
}

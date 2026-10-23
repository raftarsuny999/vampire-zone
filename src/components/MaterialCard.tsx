import { Clock, ArrowRight, Trash2 } from 'lucide-react';
import type { Material } from '@/types';
import { CATEGORIES } from '@/constants';
import { CategoryIcon } from './CategoryIcon';
import { DifficultyBadge } from './DifficultyBadge';

interface MaterialCardProps {
  material: Material;
  onClick: () => void;
  onDelete: (e: React.MouseEvent) => void;
}

function timeAgo(ts: number): string {
  const diff = Date.now() - ts;
  const days = Math.floor(diff / 86_400_000);
  if (days > 30) return new Date(ts).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  if (days > 0) return `${days}d ago`;
  const hours = Math.floor(diff / 3_600_000);
  if (hours > 0) return `${hours}h ago`;
  const mins = Math.floor(diff / 60_000);
  if (mins > 0) return `${mins}m ago`;
  return 'just now';
}

export function MaterialCard({ material, onClick, onDelete }: MaterialCardProps) {
  const cat = CATEGORIES.find((c) => c.name === material.category);

  return (
    <div
      onClick={onClick}
      className="group relative bg-navy-800 rounded-2xl border border-white/5 p-5 cursor-pointer transition-all hover:border-electric-500/20 card-glow animate-slide-up"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${cat?.iconBg ?? 'bg-electric-500/10 text-electric-400'}`}>
          <CategoryIcon category={material.category} className="w-5 h-5" />
        </div>
        <DifficultyBadge difficulty={material.difficulty} />
      </div>

      <h3 className="font-display font-semibold text-white text-base leading-snug mb-2 line-clamp-2 group-hover:text-electric-400 transition-colors">
        {material.title}
      </h3>

      <p className="text-sm text-gray-500 line-clamp-2 mb-3 leading-relaxed">
        {material.content.replace(/^#.*$/gm, '').replace(/\n{2,}/g, '\n').trim().slice(0, 140)}...
      </p>

      <div className="flex flex-wrap gap-1.5 mb-3">
        {material.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-gray-400 font-medium">
            {tag}
          </span>
        ))}
        {material.tags.length > 3 && (
          <span className="text-[10px] px-2 py-0.5 text-gray-600">+{material.tags.length - 3}</span>
        )}
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-white/5">
        <span className="flex items-center gap-1.5 text-[11px] text-gray-500">
          <Clock className="w-3 h-3" />
          {timeAgo(material.updatedAt)}
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete(e);
            }}
            className="text-gray-600 hover:text-rose-400 transition-colors p-1 rounded"
            aria-label="Delete material"
          >
            <Trash2 className="w-4 h-4" />
          </button>
          <span className="flex items-center gap-1 text-[11px] font-medium text-electric-400 group-hover:gap-2 transition-all">
            Read <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </div>
  );
}

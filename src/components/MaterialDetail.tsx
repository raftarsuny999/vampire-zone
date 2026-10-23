import { useEffect } from 'react';
import { X, Pencil, Trash2, Clock, Tag, Lightbulb, Link2 } from 'lucide-react';
import type { Material } from '@/types';
import { CATEGORIES } from '@/constants';
import { CategoryIcon } from './CategoryIcon';
import { DifficultyBadge } from './DifficultyBadge';

interface MaterialDetailProps {
  material: Material;
  onClose: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

export function MaterialDetail({ material, onClose, onEdit, onDelete }: MaterialDetailProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  const cat = CATEGORIES.find((c) => c.name === material.category);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-0 sm:p-4 animate-fade-in">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-3xl h-full sm:h-auto sm:max-h-[90vh] overflow-y-auto bg-navy-800 sm:rounded-2xl border border-white/10 shadow-2xl animate-scale-in">
        <div className="sticky top-0 flex items-center justify-between px-5 sm:px-7 py-4 bg-navy-800/95 backdrop-blur border-b border-white/5 z-10">
          <div className="flex items-center gap-3 min-w-0">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${cat?.iconBg ?? ''}`}>
              <CategoryIcon category={material.category} className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] text-gray-500 font-medium">{material.category}</p>
              <h2 className="font-display font-bold text-white text-base sm:text-lg truncate">{material.title}</h2>
            </div>
          </div>
          <div className="flex items-center gap-1 flex-shrink-0">
            <button
              onClick={onEdit}
              className="p-2 rounded-lg text-gray-400 hover:text-electric-400 hover:bg-electric-500/10 transition-all"
              aria-label="Edit"
            >
              <Pencil className="w-4 h-4" />
            </button>
            <button
              onClick={onDelete}
              className="p-2 rounded-lg text-gray-400 hover:text-rose-400 hover:bg-rose-500/10 transition-all"
              aria-label="Delete"
            >
              <Trash2 className="w-4 h-4" />
            </button>
            <div className="w-px h-5 bg-white/10 mx-1" />
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-gray-400 hover:text-white transition-all"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="px-5 sm:px-7 py-6 space-y-6">
          <div className="flex items-center gap-3 flex-wrap">
            <DifficultyBadge difficulty={material.difficulty} />
            <span className="flex items-center gap-1.5 text-xs text-gray-500">
              <Clock className="w-3.5 h-3.5" />
              {new Date(material.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Content</h3>
            <div className="prose prose-invert max-w-none">
              <div className="text-sm text-gray-300 leading-relaxed whitespace-pre-wrap font-sans">
                {material.content}
              </div>
            </div>
          </div>

          {material.keyTakeaways.length > 0 && (
            <div>
              <h3 className="flex items-center gap-2 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                <Lightbulb className="w-4 h-4 text-amber-400" /> Key Takeaways
              </h3>
              <ul className="space-y-2">
                {material.keyTakeaways.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-300 bg-navy-700/40 rounded-lg p-3 border border-white/5">
                    <span className="w-5 h-5 rounded-full bg-amber-500/10 text-amber-400 text-[11px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {material.relatedConcepts.length > 0 && (
            <div>
              <h3 className="flex items-center gap-2 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                <Link2 className="w-4 h-4 text-electric-400" /> Related Concepts
              </h3>
              <div className="flex flex-wrap gap-2">
                {material.relatedConcepts.map((concept, i) => (
                  <span key={i} className="text-xs px-3 py-1.5 rounded-lg bg-navy-700/40 text-gray-300 border border-white/5">
                    {concept}
                  </span>
                ))}
              </div>
            </div>
          )}

          {material.tags.length > 0 && (
            <div>
              <h3 className="flex items-center gap-2 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                <Tag className="w-4 h-4 text-gray-500" /> Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {material.tags.map((tag, i) => (
                  <span key={i} className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-400 font-medium">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

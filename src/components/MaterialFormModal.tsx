import { useState, useEffect } from 'react';
import { X, Save, Tag, Plus, Lightbulb, Link2, FileText } from 'lucide-react';
import type { MaterialFormData, Difficulty, CategoryName } from '@/types';
import { DIFFICULTIES, CATEGORY_NAMES } from '@/types';

interface MaterialFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: MaterialFormData) => void;
  initial?: MaterialFormData | null;
  mode: 'add' | 'edit';
}

function parseListField(text: string): string[] {
  return text
    .split('\n')
    .map((s) => s.trim())
    .filter(Boolean)
    .map((s) => s.replace(/^\s*[-•]\s*/, ''));
}

const EMPTY: MaterialFormData = {
  title: '',
  category: 'Price Action',
  difficulty: 'Beginner',
  content: '',
  tags: [],
  keyTakeaways: [],
  relatedConcepts: [],
};

export function MaterialFormModal({ isOpen, onClose, onSubmit, initial, mode }: MaterialFormModalProps) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<CategoryName>('Price Action');
  const [difficulty, setDifficulty] = useState<Difficulty>('Beginner');
  const [content, setContent] = useState('');
  const [tagsText, setTagsText] = useState('');
  const [takeawaysText, setTakeawaysText] = useState('');
  const [relatedText, setRelatedText] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (isOpen) {
      if (initial) {
        setTitle(initial.title);
        setCategory(initial.category);
        setDifficulty(initial.difficulty);
        setContent(initial.content);
        setTagsText(initial.tags.join('\n'));
        setTakeawaysText(initial.keyTakeaways.join('\n'));
        setRelatedText(initial.relatedConcepts.join('\n'));
      } else {
        setTitle('');
        setCategory('Price Action');
        setDifficulty('Beginner');
        setContent('');
        setTagsText('');
        setTakeawaysText('');
        setRelatedText('');
      }
      setError('');
    }
  }, [isOpen, initial]);

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!title.trim()) {
      setError('Please enter a title for your note.');
      return;
    }
    if (!content.trim()) {
      setError('Please enter some content for your note.');
      return;
    }

    onSubmit({
      title: title.trim(),
      category,
      difficulty,
      content: content.trim(),
      tags: parseListField(tagsText),
      keyTakeaways: parseListField(takeawaysText),
      relatedConcepts: parseListField(relatedText),
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-navy-800 rounded-2xl border border-white/10 shadow-2xl animate-scale-in">
        <div className="sticky top-0 flex items-center justify-between px-6 py-4 bg-navy-800/95 backdrop-blur border-b border-white/5 z-10">
          <h2 className="font-display font-bold text-white text-lg">
            {mode === 'add' ? 'Add New Material' : 'Edit Material'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-6 py-5 space-y-5">
          <div>
            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Understanding Candlestick Patterns"
              className="w-full px-4 py-2.5 rounded-lg bg-navy-700/60 border border-white/5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-electric-500/40 focus:ring-1 focus:ring-electric-500/30 transition-all"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as CategoryName)}
                className="w-full px-4 py-2.5 rounded-lg bg-navy-700/60 border border-white/5 text-sm text-white focus:outline-none focus:border-electric-500/40 focus:ring-1 focus:ring-electric-500/30 transition-all"
              >
                {CATEGORY_NAMES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Difficulty</label>
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value as Difficulty)}
                className="w-full px-4 py-2.5 rounded-lg bg-navy-700/60 border border-white/5 text-sm text-white focus:outline-none focus:border-electric-500/40 focus:ring-1 focus:ring-electric-500/30 transition-all"
              >
                {DIFFICULTIES.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
              <FileText className="w-3.5 h-3.5" /> Content
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your educational notes here..."
              rows={8}
              className="w-full px-4 py-2.5 rounded-lg bg-navy-700/60 border border-white/5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-electric-500/40 focus:ring-1 focus:ring-electric-500/30 transition-all resize-y leading-relaxed"
            />
          </div>

          <div>
            <label className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
              <Tag className="w-3.5 h-3.5" /> Tags <span className="text-gray-600 normal-case font-normal">(one per line or comma-separated)</span>
            </label>
            <textarea
              value={tagsText}
              onChange={(e) => setTagsText(e.target.value)}
              placeholder="candlesticks&#10;basics&#10;reversal"
              rows={3}
              className="w-full px-4 py-2.5 rounded-lg bg-navy-700/60 border border-white/5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-electric-500/40 focus:ring-1 focus:ring-electric-500/30 transition-all resize-y"
            />
          </div>

          <div>
            <label className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
              <Lightbulb className="w-3.5 h-3.5" /> Key Takeaways <span className="text-gray-600 normal-case font-normal">(one per line)</span>
            </label>
            <textarea
              value={takeawaysText}
              onChange={(e) => setTakeawaysText(e.target.value)}
              placeholder="The body shows open-to-close range&#10;Wicks show the full high-to-low range"
              rows={3}
              className="w-full px-4 py-2.5 rounded-lg bg-navy-700/60 border border-white/5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-electric-500/40 focus:ring-1 focus:ring-electric-500/30 transition-all resize-y"
            />
          </div>

          <div>
            <label className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
              <Link2 className="w-3.5 h-3.5" /> Related Concepts <span className="text-gray-600 normal-case font-normal">(one per line)</span>
            </label>
            <textarea
              value={relatedText}
              onChange={(e) => setRelatedText(e.target.value)}
              placeholder="Support and Resistance&#10;Market Structure"
              rows={3}
              className="w-full px-4 py-2.5 rounded-lg bg-navy-700/60 border border-white/5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-electric-500/40 focus:ring-1 focus:ring-electric-500/30 transition-all resize-y"
            />
          </div>

          {error && (
            <div className="px-4 py-3 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm">
              {error}
            </div>
          )}
        </div>

        <div className="sticky bottom-0 flex items-center justify-end gap-3 px-6 py-4 bg-navy-800/95 backdrop-blur border-t border-white/5">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-electric-500 to-electric-600 text-navy-900 font-semibold text-sm hover:from-electric-400 hover:to-electric-500 transition-all shadow-lg shadow-electric-500/20"
          >
            {mode === 'add' ? <Plus className="w-4 h-4" strokeWidth={2.5} /> : <Save className="w-4 h-4" strokeWidth={2.5} />}
            {mode === 'add' ? 'Add Material' : 'Save Changes'}
          </button>
        </div>
      </div>
    </div>
  );
}

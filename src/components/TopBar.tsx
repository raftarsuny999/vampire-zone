import { Menu, Search } from 'lucide-react';

interface TopBarProps {
  onMenuClick: () => void;
  search: string;
  onSearchChange: (value: string) => void;
  title: string;
  subtitle: string;
}

export function TopBar({ onMenuClick, search, onSearchChange, title, subtitle }: TopBarProps) {
  return (
    <header className="sticky top-0 z-20 glass border-b border-white/5">
      <div className="flex items-center gap-3 px-4 sm:px-6 py-4">
        <button
          onClick={onMenuClick}
          className="lg:hidden text-gray-400 hover:text-white transition-colors flex-shrink-0"
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>
        <div className="flex-1 min-w-0">
          <h2 className="font-display font-bold text-white text-lg sm:text-xl truncate">{title}</h2>
          <p className="text-xs sm:text-sm text-gray-500 truncate">{subtitle}</p>
        </div>
        <div className="relative flex-shrink-0 w-40 sm:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search notes..."
            className="w-full pl-9 pr-3 py-2 rounded-lg bg-navy-700/60 border border-white/5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-electric-500/40 focus:ring-1 focus:ring-electric-500/30 transition-all"
          />
        </div>
      </div>
    </header>
  );
}

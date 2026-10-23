import { GraduationCap, LayoutDashboard, Library, Plus, X } from 'lucide-react';
import type { View } from '@/types';

interface SidebarProps {
  currentView: View;
  onNavigate: (view: View) => void;
  onAddMaterial: () => void;
  isOpen: boolean;
  onClose: () => void;
  totalCount: number;
}

export function Sidebar({ currentView, onNavigate, onAddMaterial, isOpen, onClose, totalCount }: SidebarProps) {
  const navItems: { label: string; icon: typeof LayoutDashboard; view: View }[] = [
    { label: 'Dashboard', icon: LayoutDashboard, view: 'dashboard' },
    { label: 'Study Library', icon: Library, view: 'library' },
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-30 lg:hidden animate-fade-in"
          onClick={onClose}
        />
      )}
      <aside
        className={`fixed lg:static top-0 left-0 h-full w-72 z-40 bg-navy-800 border-r border-white/5 flex flex-col transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-electric-400 to-electric-600 flex items-center justify-center shadow-lg shadow-electric-500/20">
              <GraduationCap className="w-6 h-6 text-navy-900" />
            </div>
            <div>
              <h1 className="font-display font-bold text-white text-lg leading-none">TradeVault</h1>
              <p className="text-electric-400 text-xs font-medium tracking-wide">ACADEMY</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden text-gray-400 hover:text-white transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-4 mt-2">
          <button
            onClick={() => {
              onAddMaterial();
              onClose();
            }}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-electric-500 to-electric-600 text-navy-900 font-semibold text-sm hover:from-electric-400 hover:to-electric-500 transition-all shadow-lg shadow-electric-500/20 hover:shadow-electric-500/30"
          >
            <Plus className="w-4 h-4" strokeWidth={2.5} />
            Add New Material
          </button>
        </div>

        <nav className="flex-1 px-4 mt-6 space-y-1">
          <p className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Navigation</p>
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = currentView === item.view;
            return (
              <button
                key={item.view}
                onClick={() => {
                  onNavigate(item.view);
                  onClose();
                }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  active
                    ? 'bg-electric-500/10 text-electric-400'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className="w-[18px] h-[18px]" />
                {item.label}
                {item.view === 'library' && (
                  <span className={`ml-auto text-xs px-2 py-0.5 rounded-full ${
                    active ? 'bg-electric-500/20 text-electric-300' : 'bg-white/5 text-gray-500'
                  }`}>
                    {totalCount}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        <div className="px-6 py-6 border-t border-white/5">
          <div className="rounded-xl bg-navy-700/50 p-4 border border-white/5">
            <p className="text-xs font-semibold text-gray-300 mb-1">Your progress</p>
            <p className="text-2xl font-display font-bold text-white">{totalCount} <span className="text-sm font-normal text-gray-500">notes</span></p>
            <div className="mt-3 h-1.5 rounded-full bg-navy-600 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-electric-400 to-electric-600 transition-all duration-500"
                style={{ width: `${Math.min(100, totalCount * 8)}%` }}
              />
            </div>
            <p className="mt-2 text-[11px] text-gray-500">
              {totalCount >= 12 ? 'Excellent library depth!' : `${Math.max(0, 12 - totalCount)} more for a full library`}
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}

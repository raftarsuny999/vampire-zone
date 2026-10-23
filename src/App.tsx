import { useMemo, useState } from 'react';
import type { Material, CategoryName, Difficulty, View, MaterialFormData } from '@/types';
import { useMaterials } from '@/hooks/useMaterials';
import { Sidebar } from '@/components/Sidebar';
import { TopBar } from '@/components/TopBar';
import { Dashboard } from '@/components/Dashboard';
import { LibraryView } from '@/components/LibraryView';
import { MaterialFormModal } from '@/components/MaterialFormModal';
import { MaterialDetail } from '@/components/MaterialDetail';
import { ConfirmDialog } from '@/components/ConfirmDialog';

export default function App() {
  const { materials, addMaterial, updateMaterial, deleteMaterial } = useMaterials();

  const [view, setView] = useState<View>('dashboard');
  const [search, setSearch] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [activeCategory, setActiveCategory] = useState<CategoryName | 'All'>('All');
  const [activeDifficulty, setActiveDifficulty] = useState<Difficulty | 'All'>('All');

  const [selectedMaterial, setSelectedMaterial] = useState<Material | null>(null);
  const [formOpen, setFormOpen] = useState(false);
  const [formMode, setFormMode] = useState<'add' | 'edit'>('add');
  const [formInitial, setFormInitial] = useState<MaterialFormData | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<Material | null>(null);

  const headerInfo = useMemo(() => {
    if (view === 'dashboard') {
      return { title: 'Dashboard', subtitle: 'Your trading education overview' };
    }
    return { title: 'Study Library', subtitle: 'Browse, search, and manage your notes' };
  }, [view]);

  const handleAddMaterial = () => {
    setFormMode('add');
    setFormInitial(null);
    setFormOpen(true);
  };

  const handleEditMaterial = (material: Material) => {
    setFormMode('edit');
    setFormInitial({
      title: material.title,
      category: material.category,
      difficulty: material.difficulty,
      content: material.content,
      tags: material.tags,
      keyTakeaways: material.keyTakeaways,
      relatedConcepts: material.relatedConcepts,
    });
    setSelectedMaterial(null);
    setFormOpen(true);
  };

  const handleFormSubmit = (data: MaterialFormData) => {
    if (formMode === 'add') {
      addMaterial(data);
    } else if (selectedMaterial) {
      updateMaterial(selectedMaterial.id, data);
    }
  };

  const handleDeleteRequest = (material: Material) => {
    setDeleteTarget(material);
  };

  const handleDeleteConfirm = () => {
    if (deleteTarget) {
      deleteMaterial(deleteTarget.id);
      if (selectedMaterial?.id === deleteTarget.id) {
        setSelectedMaterial(null);
      }
    }
    setDeleteTarget(null);
  };

  const handleCategoryClick = (category: CategoryName) => {
    setActiveCategory(category);
    setView('library');
  };

  const handleSearchChange = (value: string) => {
    setSearch(value);
    if (value.trim() && view === 'dashboard') {
      setView('library');
    }
  };

  const handleNavigate = (newView: View) => {
    setView(newView);
    if (newView === 'dashboard') {
      setActiveCategory('All');
      setSearch('');
    }
  };

  return (
    <div className="flex min-h-screen bg-navy-900">
      <Sidebar
        currentView={view}
        onNavigate={handleNavigate}
        onAddMaterial={handleAddMaterial}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        totalCount={materials.length}
      />

      <main className="flex-1 min-w-0 flex flex-col">
        <TopBar
          onMenuClick={() => setSidebarOpen(true)}
          search={search}
          onSearchChange={handleSearchChange}
          title={headerInfo.title}
          subtitle={headerInfo.subtitle}
        />

        <div className="flex-1 overflow-y-auto">
          {view === 'dashboard' && (
            <Dashboard
              materials={materials}
              onSelectMaterial={setSelectedMaterial}
              onDeleteMaterial={handleDeleteRequest}
              onCategoryClick={handleCategoryClick}
              onSeeAll={() => setView('library')}
            />
          )}
          {view === 'library' && (
            <LibraryView
              materials={materials}
              search={search}
              activeCategory={activeCategory}
              activeDifficulty={activeDifficulty}
              onCategoryChange={setActiveCategory}
              onDifficultyChange={setActiveDifficulty}
              onSelectMaterial={setSelectedMaterial}
              onDeleteMaterial={handleDeleteRequest}
            />
          )}
        </div>
      </main>

      {selectedMaterial && (
        <MaterialDetail
          material={selectedMaterial}
          onClose={() => setSelectedMaterial(null)}
          onEdit={() => handleEditMaterial(selectedMaterial)}
          onDelete={() => handleDeleteRequest(selectedMaterial)}
        />
      )}

      <MaterialFormModal
        isOpen={formOpen}
        onClose={() => setFormOpen(false)}
        onSubmit={handleFormSubmit}
        initial={formInitial}
        mode={formMode}
      />

      <ConfirmDialog
        isOpen={deleteTarget !== null}
        title="Delete Material"
        message={`Are you sure you want to delete "${deleteTarget?.title}"? This action cannot be undone.`}
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeleteTarget(null)}
      />
    </div>
  );
}

import { useCallback, useEffect, useState } from 'react';
import type { Material, MaterialFormData } from '@/types';
import { SAMPLE_MATERIALS } from '@/sampleData';

const STORAGE_KEY = 'tradevault_materials';

function loadFromStorage(): Material[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch {
    // fall through to seed
  }
  return SAMPLE_MATERIALS.map((m, i) => ({
    ...m,
    id: `sample-${i + 1}`,
  }));
}

export function useMaterials() {
  const [materials, setMaterials] = useState<Material[]>(() => loadFromStorage());

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(materials));
    } catch {
      // storage full or unavailable — silently ignore
    }
  }, [materials]);

  const addMaterial = useCallback((data: MaterialFormData) => {
    const now = Date.now();
    const newMaterial: Material = {
      ...data,
      id: `m-${now}-${Math.random().toString(36).slice(2, 8)}`,
      createdAt: now,
      updatedAt: now,
    };
    setMaterials((prev) => [newMaterial, ...prev]);
  }, []);

  const updateMaterial = useCallback((id: string, data: MaterialFormData) => {
    const now = Date.now();
    setMaterials((prev) =>
      prev.map((m) => (m.id === id ? { ...m, ...data, updatedAt: now } : m))
    );
  }, []);

  const deleteMaterial = useCallback((id: string) => {
    setMaterials((prev) => prev.filter((m) => m.id !== id));
  }, []);

  return { materials, addMaterial, updateMaterial, deleteMaterial };
}

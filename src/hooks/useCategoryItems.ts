import { useEffect, useMemo, useState } from 'react';
import type { Category } from '../models/Category';
import type { GridItem } from '../models/GridItem';
import { fetchCategoryItems } from '../services/categoryItemsService';

interface LoadedItems {
  file: string;
  items: GridItem[];
}

export const useCategoryItems = (mode: string, categories: Category[]) => {
  const [loaded, setLoaded] = useState<LoadedItems | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const category = useMemo(
    () =>
      categories.find((candidate) =>
        [candidate.name, ...(candidate.aliases ?? [])].some(
          (name) => name.toLowerCase() === mode.toLowerCase()
        )
      ),
    [categories, mode]
  );

  const isCurrent = Boolean(category) && loaded?.file === category?.file;
  const items = category && loaded?.file === category.file ? loaded.items : [];
  const loading = Boolean(category) && !isCurrent;

  useEffect(() => {
    if (!category) {
      return;
    }

    let cancelled = false;

    const loadItems = async () => {
      try {
        const data = await fetchCategoryItems(category.file);
        if (!cancelled) {
          setLoaded({ file: category.file, items: data });
          setError(null);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err : new Error(`Failed to fetch ${category.file}`));
        }
      }
    };

    loadItems();
    return () => {
      cancelled = true;
    };
  }, [category]);

  return { items, loading, error };
};

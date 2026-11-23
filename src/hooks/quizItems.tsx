import { useCallback, useMemo, useState } from 'react';
import { shuffle } from '../utils/shuffle';
import { useCategories } from './useCategories';
import { useCategoryItems } from './useCategoryItems';

interface Group {
  count: number;
  version: number;
}

export const useQuizItems = (mode: string) => {
  const [group, setGroup] = useState<Group>({ count: 4, version: 0 });
  const { categories } = useCategories();
  const { items: categoryItems } = useCategoryItems(mode, categories);

  const allItems = useMemo(() => shuffle(categoryItems), [categoryItems]);

  const nextGroup = useCallback((count: number) => {
    setGroup((current) => ({ count, version: current.version + 1 }));
  }, []);

  const items = useMemo(() => shuffle(allItems).slice(0, group.count), [allItems, group]);

  return { items, nextGroup };
};

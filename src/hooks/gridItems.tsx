import { useMemo } from 'react';
import { shuffle } from '../utils/shuffle';
import { useCategories } from './useCategories';
import { useCategoryItems } from './useCategoryItems';

const useGridItems = (mode: string) => {
  const { categories } = useCategories();
  const { items } = useCategoryItems(mode, categories);

  return useMemo(() => shuffle(items), [items]);
};

export default useGridItems;

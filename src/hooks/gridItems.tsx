import { useMemo, useState } from 'react';
import { vehicles } from '../constants/vehicles.const';
import type { GridItem } from '../models/GridItem';
import { shuffle } from '../utils/shuffle';

const useGridItems = (mode: string) => {
  const [items, setItems] = useState<GridItem[]>([]);

  useMemo(() => {
    switch (mode) {
      case 'Trucks':
        setItems(shuffle(vehicles));
        return;
      case 'Shapes':
        return [];
      default:
        return [];
    }
  }, [mode]);

  return items;
};

export default useGridItems;

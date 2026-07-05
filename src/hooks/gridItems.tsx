import { useMemo, useState } from 'react';
import { colors } from '../constants/colors.const';
import { vehicles } from '../constants/vehicles.const';
import type { GridItem } from '../models/GridItem';
import { shuffle } from '../utils/shuffle';

const useGridItems = (mode: string) => {
  const [items, setItems] = useState<GridItem[]>([]);

  useMemo(() => {
    switch (mode.toLocaleLowerCase()) {
      case 'trucks':
        setItems(shuffle(vehicles));
        return;
      case 'colors':
        setItems(shuffle(colors));
        return;
      default:
        return [];
    }
  }, [mode]);

  return items;
};

export default useGridItems;

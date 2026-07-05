import { useMemo, useState } from 'react';
import { animals } from '../constants/animals.const';
import { colors } from '../constants/colors.const';
import { vehicles } from '../constants/vehicles.const';
import type { GridItem } from '../models/GridItem';
import { shuffle } from '../utils/shuffle';

const useGridItems = (mode: string) => {
  const [items, setItems] = useState<GridItem[]>([]);

  useMemo(() => {
    switch (mode.toLocaleLowerCase()) {
      case 'trucks':
      case 'cars':
      case 'vehicles':
        setItems(shuffle(vehicles));
        return;
      case 'colors':
        setItems(shuffle(colors));
        return;
      case 'animals':
        setItems(shuffle(animals));
        return;
      default:
        return [];
    }
  }, [mode]);

  return items;
};

export default useGridItems;

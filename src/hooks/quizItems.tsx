import { useCallback, useEffect, useState } from 'react';
import type { GridItem } from '../models/GridItem';
import { shuffle } from '../utils/shuffle';
import { useAnimals } from './useAnimals';
import { useColors } from './useColors';
import { useVehicles } from './useVehicles';

export const useQuizItems = (mode: string) => {
  const [allItems, setAllItems] = useState<GridItem[]>([]);
  const [items, setItems] = useState<GridItem[]>([]);
  const { animals } = useAnimals();
  const { colors } = useColors();
  const { vehicles } = useVehicles();

  // get 4 random at a time from allItems and return them as items
  const nextGroup = useCallback(
    (count: number) => {
      if (allItems.length === 0) {
        setItems([]);
        return;
      }
      const nextItems = shuffle(allItems).slice(0, count);
      setItems(nextItems);
    },
    [allItems]
  );

  useEffect(() => {
    let data: GridItem[] = [];

    switch (mode.toLocaleLowerCase()) {
      case 'trucks':
      case 'cars':
      case 'vehicles':
        data = vehicles;
        break;
      case 'colors':
        data = colors;
        break;
      case 'animals':
        data = animals;
        break;
      default:
        setAllItems([]);
        return;
    }

    setAllItems(shuffle(data));
  }, [mode, animals, colors, vehicles]);

  // Automatically get first 4 items when allItems changes
  useEffect(() => {
    nextGroup(4);
  }, [allItems, nextGroup]);

  return { items, nextGroup };
};

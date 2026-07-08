import { useEffect, useState } from 'react';
import type { GridItem } from '../models/GridItem';
import { fetchAnimals } from '../services/animalsService';

export const useAnimals = () => {
  const [animals, setAnimals] = useState<GridItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadAnimals = async () => {
      try {
        setLoading(true);
        const data = await fetchAnimals();
        setAnimals(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch animals'));
      } finally {
        setLoading(false);
      }
    };

    loadAnimals();
  }, []);

  return { animals, loading, error };
};

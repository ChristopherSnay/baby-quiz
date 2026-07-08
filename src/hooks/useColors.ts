import { useEffect, useState } from 'react';
import type { GridItem } from '../models/GridItem';
import { fetchColors } from '../services/colorsService';

export const useColors = () => {
  const [colors, setColors] = useState<GridItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadColors = async () => {
      try {
        setLoading(true);
        const data = await fetchColors();
        setColors(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch colors'));
      } finally {
        setLoading(false);
      }
    };

    loadColors();
  }, []);

  return { colors, loading, error };
};

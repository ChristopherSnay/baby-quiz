import { useEffect, useState } from 'react';
import type { GridItem } from '../models/GridItem';
import { fetchVehicles } from '../services/vehiclesService';

export const useVehicles = () => {
  const [vehicles, setVehicles] = useState<GridItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadVehicles = async () => {
      try {
        setLoading(true);
        const data = await fetchVehicles();
        setVehicles(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch vehicles'));
      } finally {
        setLoading(false);
      }
    };

    loadVehicles();
  }, []);

  return { vehicles, loading, error };
};

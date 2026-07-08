import type { GridItem } from '../models/GridItem';
import { getAssetPath } from '../utils/getAssetPath';

interface VehicleData {
  id: number;
  name: string;
  image: string;
}

let cachedVehicles: GridItem[] | null = null;

export const fetchVehicles = async (): Promise<GridItem[]> => {
  if (cachedVehicles) {
    return cachedVehicles;
  }

  const response = await fetch(getAssetPath('vehicles.json'));
  const data: VehicleData[] = await response.json();

  cachedVehicles = data.map((vehicle) => ({
    id: vehicle.id,
    name: vehicle.name,
    image: vehicle.image
  }));

  return cachedVehicles;
};

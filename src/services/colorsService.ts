import type { GridItem } from '../models/GridItem';
import { getAssetPath } from '../utils/getAssetPath';

interface ColorData {
  id: number;
  name: string;
  colorHex: string;
  colorCode: string;
}

let cachedColors: GridItem[] | null = null;

export const fetchColors = async (): Promise<GridItem[]> => {
  if (cachedColors) {
    return cachedColors;
  }

  const response = await fetch(getAssetPath('colors.json'));
  const data: ColorData[] = await response.json();

  cachedColors = data.map((color) => ({
    id: color.id,
    name: color.name,
    image: color.colorHex
  }));

  return cachedColors;
};

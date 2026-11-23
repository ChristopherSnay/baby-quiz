import type { GridItem } from '../models/GridItem';
import { getAssetPath } from '../utils/getAssetPath';

interface RawItemData {
  id: number;
  name: string;
  image?: string;
  colorHex?: string;
  sound?: string | null;
}

const cache = new Map<string, GridItem[]>();

const getFileName = (categoryName: string): string =>
  `${categoryName.toLowerCase().replace(/\s+/g, '-')}.json`;

export const fetchCategoryItems = async (categoryName: string): Promise<GridItem[]> => {
  const fileName = getFileName(categoryName);
  const cachedItems = cache.get(fileName);
  if (cachedItems) {
    return cachedItems;
  }

  const response = await fetch(getAssetPath(fileName));
  if (!response.ok) {
    throw new Error(`Failed to fetch ${fileName} (${response.status})`);
  }

  const data: RawItemData[] = await response.json();
  const items: GridItem[] = data.map((item) => ({
    id: item.id,
    name: item.name,
    image: item.image ?? item.colorHex ?? '',
    sound: item.sound ?? null
  }));

  cache.set(fileName, items);
  return items;
};

import type { Category } from '../models/Category';
import { getAssetPath } from '../utils/getAssetPath';

interface RawCategoryData {
  id: number;
  name: string;
  image: string;
  aliases?: string[];
  sound?: string | null;
}

let cachedCategories: Category[] | null = null;

export const fetchCategories = async (): Promise<Category[]> => {
  if (cachedCategories) {
    return cachedCategories;
  }

  const response = await fetch(getAssetPath('categories.json'));
  if (!response.ok) {
    throw new Error(`Failed to fetch categories (${response.status})`);
  }

  const data: RawCategoryData[] = await response.json();
  cachedCategories = data.map((category) => ({
    id: category.id,
    name: category.name,
    image: category.image,
    aliases: category.aliases,
    sound: category.sound ?? null
  }));

  return cachedCategories;
};

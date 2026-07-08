import type { GridItem } from '../models/GridItem';

interface AnimalData {
  id: number;
  name: string;
  image: string;
}

let cachedAnimals: GridItem[] | null = null;

export const fetchAnimals = async (): Promise<GridItem[]> => {
  if (cachedAnimals) {
    return cachedAnimals;
  }

  const response = await fetch('/animals.json');
  const data: AnimalData[] = await response.json();

  cachedAnimals = data.map((animal) => ({
    id: animal.id,
    name: animal.name,
    image: animal.image
  }));

  return cachedAnimals;
};

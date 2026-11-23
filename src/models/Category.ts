import type { GridItem } from './GridItem';

export interface Category extends GridItem {
  file: string;
  aliases?: string[];
}

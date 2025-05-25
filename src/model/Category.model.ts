import type { Gif } from './Gifs.model';

export interface Category {
  name: string;
  name_encoded: string;
  subcategories: Subcategory[];
  gif: Gif;
}

interface Subcategory {
  name: string;
  name_encoded: string;
}

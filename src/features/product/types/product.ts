export enum ProductTag {
  'RARE' = 'ptag_01JWR8D5SJHAVJV9091DY0GRKK',
  'NEW' = 'ptag_01JWRN6WK8X3YSH2C0Q8Z7M4G0',
  'BEST_SELLER' = 'ptag_01JYGNE0CZ2ZKJC669AYTE7JHD',
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
  creationAt: string;
  updatedAt: string;
}

export interface Product {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
  creationAt: string;
  updatedAt: string;
}

export type Category = {
  id: number;
  name: string;
  slug: string;
  image: string;
  creationAt: string;
  updatedAt: string;
};

export type Product = {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
  creationAt: string;
  updatedAt: string;
};

export type CartItem = {
  product: Product;
  quantity: number;
  unit_price: number;
  total_price: number;
};

export type Cart = {
  id: number;
  total: number;
  subtotal: number;
  tax_total: number;
  discount_total: number;
  discount_subtotal: number;
  discount_tax_total: number;
  original_total: number;
  original_tax_total: number;
  items: CartItem[];
  promotions: any[];
};

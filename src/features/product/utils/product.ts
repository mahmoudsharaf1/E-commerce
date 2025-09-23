import { colors } from "@theme";
import { Product, ProductTag } from "../types/product";

export const products: Product[] = [
  {
    id: 111,
    title: "Classic Heather Gray Hoodie",
    slug: "classic-heather-gray-hoodie",
    price: 69,
    description: "Stay cozy and stylish with our Classic Heather Gray Hoodie...",
    category: {
      id: 12,
      name: "Clothes",
      slug: "clothes",
      image: "https://i.imgur.com/QkIa5tT.jpeg",
      creationAt: "2025-09-21T15:30:55.000Z",
      updatedAt: "2025-09-21T15:30:55.000Z"
    },
    images: [
      "https://i.imgur.com/cHddUCu.jpeg",
      "https://i.imgur.com/CFOjAgK.jpeg",
      "https://i.imgur.com/wbIMMme.jpeg"
    ],
    creationAt: "2025-09-21T15:30:59.000Z",
    updatedAt: "2025-09-21T15:30:59.000Z"
  },
  {
    id: 112,
    title: "Leather Office Chair",
    slug: "leather-office-chair",
    price: 199,
    description: "Premium leather office chair with ergonomic design.",
    category: {
      id: 18,
      name: "Furniture",
      slug: "furniture",
      image: "https://i.imgur.com/Qphac99.jpeg",
      creationAt: "2025-09-21T15:35:20.000Z",
      updatedAt: "2025-09-21T15:35:20.000Z"
    },
    images: [
      "https://i.imgur.com/ZKGofuB.jpeg",
      "https://i.imgur.com/KcT6BE0.jpeg"
    ],
    creationAt: "2025-09-21T15:35:25.000Z",
    updatedAt: "2025-09-21T15:35:25.000Z"
  },
  {
    id: 113,
    title: "Wireless Noise-Canceling Headphones",
    slug: "wireless-noise-canceling-headphones",
    price: 149,
    description: "Immerse yourself in music with top-notch sound quality.",
    category: {
      id: 20,
      name: "Electronics",
      slug: "electronics",
      image: "https://i.imgur.com/YaSqa06.jpeg",
      creationAt: "2025-09-21T15:40:10.000Z",
      updatedAt: "2025-09-21T15:40:10.000Z"
    },
    images: [
      "https://i.imgur.com/76nZ9kW.jpeg",
      "https://i.imgur.com/sJv4XzU.jpeg"
    ],
    creationAt: "2025-09-21T15:40:15.000Z",
    updatedAt: "2025-09-21T15:40:15.000Z"
  },
  {
    id: 114,
    title: "Wooden Coffee Table",
    slug: "wooden-coffee-table",
    price: 120,
    description: "Solid wood coffee table with modern design.",
    category: {
      id: 18,
      name: "Furniture",
      slug: "furniture",
      image: "https://i.imgur.com/Qphac99.jpeg",
      creationAt: "2025-09-21T15:45:55.000Z",
      updatedAt: "2025-09-21T15:45:55.000Z"
    },
    images: [
      "https://i.imgur.com/pHQ3xgB.jpeg",
      "https://i.imgur.com/xGQ3xgD.jpeg"
    ],
    creationAt: "2025-09-21T15:46:00.000Z",
    updatedAt: "2025-09-21T15:46:00.000Z"
  },
  {
    id: 115,
    title: "Men’s Running Shoes",
    slug: "mens-running-shoes",
    price: 89,
    description: "Lightweight and comfortable running shoes.",
    category: {
      id: 12,
      name: "Clothes",
      slug: "clothes",
      image: "https://i.imgur.com/QkIa5tT.jpeg",
      creationAt: "2025-09-21T15:50:05.000Z",
      updatedAt: "2025-09-21T15:50:05.000Z"
    },
    images: [
      "https://i.imgur.com/FLq0Ebl.jpeg",
      "https://i.imgur.com/zQ5uM9E.jpeg"
    ],
    creationAt: "2025-09-21T15:50:10.000Z",
    updatedAt: "2025-09-21T15:50:10.000Z"
  },
  {
    id: 116,
    title: "Gaming Laptop Backpack",
    slug: "gaming-laptop-backpack",
    price: 75,
    description: "Spacious and durable backpack with multiple compartments.",
    category: {
      id: 22,
      name: "Accessories",
      slug: "accessories",
      image: "https://i.imgur.com/Qphac99.jpeg",
      creationAt: "2025-09-21T15:55:30.000Z",
      updatedAt: "2025-09-21T15:55:30.000Z"
    },
    images: [
      "https://i.imgur.com/1twoaDy.jpeg",
      "https://i.imgur.com/rqvLd4j.jpeg"
    ],
    creationAt: "2025-09-21T15:55:35.000Z",
    updatedAt: "2025-09-21T15:55:35.000Z"
  },
  {
    id: 117,
    title: "Smartwatch Pro X",
    slug: "smartwatch-pro-x",
    price: 199,
    description: "Track your fitness and stay connected with style.",
    category: {
      id: 20,
      name: "Electronics",
      slug: "electronics",
      image: "https://i.imgur.com/YaSqa06.jpeg",
      creationAt: "2025-09-21T16:00:00.000Z",
      updatedAt: "2025-09-21T16:00:00.000Z"
    },
    images: [
      "https://i.imgur.com/hUfp0n2.jpeg",
      "https://i.imgur.com/s9kFz2k.jpeg"
    ],
    creationAt: "2025-09-21T16:00:05.000Z",
    updatedAt: "2025-09-21T16:00:05.000Z"
  },
  {
    id: 118,
    title: "Minimalist Desk Lamp",
    slug: "minimalist-desk-lamp",
    price: 55,
    description: "LED desk lamp with adjustable brightness levels.",
    category: {
      id: 18,
      name: "Furniture",
      slug: "furniture",
      image: "https://i.imgur.com/Qphac99.jpeg",
      creationAt: "2025-09-21T16:05:25.000Z",
      updatedAt: "2025-09-21T16:05:25.000Z"
    },
    images: [
      "https://i.imgur.com/jxWqIBf.jpeg",
      "https://i.imgur.com/k3sVqtF.jpeg"
    ],
    creationAt: "2025-09-21T16:05:30.000Z",
    updatedAt: "2025-09-21T16:05:30.000Z"
  },
  {
    id: 120,
    title: "4K Ultra HD Smart TV",
    slug: "4k-ultra-hd-smart-tv",
    price: 799,
    description: "Stunning 4K display with smart features and streaming apps.",
    category: {
      id: 20,
      name: "Electronics",
      slug: "electronics",
      image: "https://i.imgur.com/YaSqa06.jpeg",
      creationAt: "2025-09-21T16:15:55.000Z",
      updatedAt: "2025-09-21T16:15:55.000Z"
    },
    images: [
      "https://i.imgur.com/uDpzwEk.jpeg",
      "https://i.imgur.com/xnMlG5q.jpeg"
    ],
    creationAt: "2025-09-21T16:16:00.000Z",
    updatedAt: "2025-09-21T16:16:00.000Z"
  }
];


export const getProductTag = (status: string) => {
  switch (status) {
    case ProductTag.RARE:
      return {
        backgroundColor: colors.paletteV2.steelBlue,
        textColor: colors.paletteV2.white,
        text: 'Rare',
      };
    case ProductTag.NEW:
      return {
        backgroundColor: colors.paletteV2.yellow400,
        textColor: colors.paletteV2.yellow500,
        text: 'New',
      };
    case ProductTag.BEST_SELLER:
      return {
        backgroundColor: colors.paletteV2.green100,
        textColor: colors.paletteV2.green,
        text: 'Best Seller',
      };

    default:
      return {
        backgroundColor: colors.paletteV2.steelBlue,
        textColor: colors.paletteV2.white,
        text: '',
      };
  }
};

export type Item = {
  id: number;
  category: string;
  name: string;
  qty: string;
  price: number;
  image: string;
  rating: number;
  discountAmount: number;
  totalOrder: number;
  deliveryTime: string;
  trending: boolean;
  description: string;
};

export const items: Array<Item> = [
  {
    id: 1,
    category: 'vegetables',
    name: 'Tomato',
    qty: '1kg',
    price: 20,
    image:
      'https://res.cloudinary.com/saif-freelance2/image/upload/v1645870737/Grostore/items/istockphoto-171589415-170667a_dsdtap.jpg',
    rating: 4,
    discountAmount: 3,
    totalOrder: 5,
    deliveryTime: '5 minutes',
    trending: true,
    description: 'Fresh tomato from the farms',
  },
  {
    id: 2,
    category: 'vegetables',
    name: 'Carrot',
    qty: '1kg',
    price: 20,
    image:
      'https://res.cloudinary.com/saif-freelance2/image/upload/v1645870673/Grostore/items/carrots-story_647_111915085532_gzhinq.jpg',
    rating: 4,
    discountAmount: 3,
    totalOrder: 5,
    deliveryTime: '5 minutes',
    trending: true,
    description: 'Fresh Carrot from the farms',
  },
  {
    id: 3,
    category: 'vegetables',
    name: 'Brinjal',
    qty: '1kg',
    price: 20,
    image:
      'https://res.cloudinary.com/saif-freelance2/image/upload/v1645870602/Grostore/items/eggplant_fbaubb.png',
    rating: 4,
    discountAmount: 3,
    totalOrder: 5,
    deliveryTime: '5 minutes',
    trending: true,
    description: 'Fresh Brinjal from the farms',
  },
  {
    id: 4,
    category: 'fruits',
    name: 'Apple',
    qty: '1kg',
    price: 20,
    image:
      'https://res.cloudinary.com/saif-freelance2/image/upload/v1645870905/Grostore/items/apples-at-farmers-market-royalty-free-image-1627321463_vhnw21.jpg',
    rating: 4,
    discountAmount: 3,
    totalOrder: 5,
    deliveryTime: '5 minutes',
    trending: true,
    description: 'Fresh Apple from the farms',
  },
  {
    id: 5,
    category: 'fruits',
    name: 'orange',
    qty: '1kg',
    price: 20,
    image:
      'https://res.cloudinary.com/saif-freelance2/image/upload/v1645870939/Grostore/items/Oranges_yqxins.jpg',
    rating: 4,
    discountAmount: 3,
    totalOrder: 5,
    deliveryTime: '5 minutes',
    trending: false,
    description: 'Fresh Orange from the farms',
  },
];

export type CategoryType = {
  id: number;
  name: string;
  image: string;
  catId: string;
  description: string;
};

export const Categories: Array<CategoryType> = [
  {
    id: 1,
    name: 'Vegetables',
    image:
      'https://res.cloudinary.com/saif-freelance2/image/upload/v1645878951/Grostore/items/vegetables_k7t5eq.jpg',
    catId: 'veg-1',
    description:
      'Get your vegetables directly from farms fresh and green, with best prices',
  },
  {
    id: 2,
    name: 'Fruits',
    image:
      'https://res.cloudinary.com/saif-freelance2/image/upload/v1645879395/Grostore/items/2-2-2-3foodgroups_fruits_detailfeature_qak5mn.jpg',
    catId: 'fruits-1',
    description:
      'Get your vegetables directly from farms fresh and green, with best prices',
  },
  {
    id: 3,
    name: 'Daily Essentials',
    image:
      'https://res.cloudinary.com/saif-freelance2/image/upload/v1645879464/Grostore/items/download_neghwq.jpg',
    catId: 'essential-1',
    description:
      'Get your vegetables directly from farms fresh and green, with best prices',
  },
  {
    id: 4,
    name: 'Dairy Items',
    image:
      'https://res.cloudinary.com/saif-freelance2/image/upload/v1645879527/Grostore/items/product-jpeg-500x500_zqdksa.jpg',
    catId: 'dairy-1',
    description:
      'Get your vegetables directly from farms fresh and green, with best prices',
  },
  {
    id: 5,
    name: 'Snacks',
    image:
      'https://res.cloudinary.com/saif-freelance2/image/upload/v1645879527/Grostore/items/product-jpeg-500x500_zqdksa.jpg',
    catId: 'snack-1',
    description:
      'Get your vegetables directly from farms fresh and green, with best prices',
  },
  {
    id: 6,
    name: 'Drinks',
    image:
      'https://res.cloudinary.com/saif-freelance2/image/upload/v1645875488/Grostore/items/depositphotos_139336858-stock-photo-bottles-of-assorted-global-soft_jvm18r.jpg',
    catId: 'drink-1',
    description:
      'Get your vegetables directly from farms fresh and green, with best prices',
  },
];

export interface IProduct {
  id: number;
  title: string;
  price: string;
  image: string;
  rating: IRating;
  category: string;
  description: string;
}

interface IRating {
  count: number;
  rate: number;
}

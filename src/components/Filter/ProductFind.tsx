import React, { FC } from 'react';
import Input from '../UI/Input';
import { IProduct } from '../../types/product';

interface Props {
  products: IProduct[];
  findProducts: string;
  setFindProducts: (value: string) => void;
  setFilteringProducts: (products: IProduct[]) => void;
}

const ProductFind: FC<Props> = ({
  products,
  setFilteringProducts,
  findProducts,
  setFindProducts,
}) => {
  const find = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFindProducts(e.currentTarget.value);
    setFilteringProducts(
      products.filter((p) =>
        p.title.toLowerCase().includes(findProducts.toLowerCase()),
      ),
    );
  };

  return (
    <Input
      className="product_find input"
      placeholder="Найти..."
      value={findProducts}
      onChange={(e) => find(e)}
    />
  );
};

export default ProductFind;

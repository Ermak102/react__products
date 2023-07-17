import React, { FC, useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import { IProduct } from '../../types/product';

import '../../styles/product.css';
import PaginationForm from './PaginationForm';

interface Props {
  products: IProduct[];
}

const ProductList: FC<Props> = ({ products }) => {
  return (
    <section className="products">
      <div className="product_list">
        {[...products].map((item) => (
          <ProductItem key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;

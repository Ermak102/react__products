import React, { FC, useEffect, useState } from 'react';
import ProductFilter from '../Filter/ProductFilter';

import { Select } from '../UI/Select';
import { IProduct } from '../../types/product';
import { ProductService } from '../../services/ProductService';

interface Props {
  products: IProduct[];
  findProducts: string;
  filteringProducts: IProduct[];
  setFindProducts: (value: string) => void;
  setFilteringProducts: (products: IProduct[]) => void;
}

const ProductForm: FC<Props> = ({
  products,
  findProducts,
  setFindProducts,
  filteringProducts,
  setFilteringProducts,
}) => {
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    setSelectedCategory('');
  }, [findProducts]);

  const fetchCategories = async () => {
    setCategories(await ProductService.getAllCategories());
  };

  const filteringFromCategories = (category: string) => {
    setFindProducts('');
    setSelectedCategory(category);
    setFilteringProducts(products.filter((p) => p.category === category));
  };

  return (
    <aside className="product_form">
      <div className="product_wrapper">
        <Select
          defaultName="Выберите категорию"
          options={categories}
          onChange={filteringFromCategories}
          selected={selectedCategory}
        />
        <ProductFilter
          category={selectedCategory}
          filteringProducts={filteringProducts}
          setFilteringProducts={setFilteringProducts}
        />
      </div>
    </aside>
  );
};

export default ProductForm;

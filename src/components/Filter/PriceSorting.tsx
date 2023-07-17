import React, { FC, useEffect, useState } from 'react';
import { Select } from '../UI/Select';
import { IProduct } from '../../types/product';

interface Props {
  category: string;
  updateSaveFilter: () => void;
  filteringProducts: IProduct[];
  setFilteringProducts: (products: IProduct[]) => void;
}

const CategorySorting: FC<Props> = ({
  category,
  updateSaveFilter,
  filteringProducts,
  setFilteringProducts,
}) => {
  const [selected, setSelected] = useState('');
  const options = [
    'По полулярности',
    'По количеству отзывов',
    'По возрастанию цены',
    'По убыванию цены',
  ];

  useEffect(() => {
    setSelected('');
  }, [category]);

  useEffect(() => {
    updateSaveFilter();
  }, [selected]);

  const sortedPrice = (selected: string) => {
    setSelected(selected);

    if (selected === options[0]) {
      setFilteringProducts(sortedRate(filteringProducts));
    }

    if (selected === options[1]) {
      setFilteringProducts(sortedReviews(filteringProducts));
    }

    if (selected === options[2]) {
      setFilteringProducts(ascendingOrder(filteringProducts));
    }

    if (selected === options[3]) {
      setFilteringProducts(descendingOrder(filteringProducts));
    }
  };

  const sortedRate = (products: IProduct[]) => {
    return [...products].sort((a, b) => b.rating.rate - a.rating.rate);
  };

  const sortedReviews = (products: IProduct[]) => {
    return [...products].sort((a, b) => b.rating.count - a.rating.count);
  };

  const ascendingOrder = (products: IProduct[]) => {
    return [...products].sort((a, b) => parseInt(a.price) - parseInt(b.price));
  };

  const descendingOrder = (products: IProduct[]) => {
    return [...products].sort((a, b) => parseInt(b.price) - parseInt(a.price));
  };

  return (
    <Select
      defaultName="отсортировать"
      options={options}
      selected={selected}
      onChange={sortedPrice}
    />
  );
};

export default CategorySorting;

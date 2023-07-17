import { FC, useEffect, useState } from 'react';
import PriceSorting from './PriceSorting';
import PriceRange from './PriceRange';

import { IProduct } from '../../types/product';

import '../../styles/filter.css';

interface Props {
  filteringProducts: IProduct[];
  setFilteringProducts: (products: IProduct[]) => void;
  category: string;
}

const ProductFiltering: FC<Props> = ({
  filteringProducts,
  setFilteringProducts,
  category,
}) => {
  const [saveFilter, setSaveFilter] = useState<IProduct[]>([]);

  useEffect(() => {
    updateSaveFilter();
  }, [category]);

  const updateSaveFilter = () => {
    setSaveFilter(filteringProducts);
  };

  return (
    <div className="price_filtering">
      <div className="price_fields">
        <PriceSorting
          category={category}
          updateSaveFilter={updateSaveFilter}
          filteringProducts={filteringProducts}
          setFilteringProducts={setFilteringProducts}
        />
        <label className="price_title">Цена:</label>
        <PriceRange
          category={category}
          saveFilter={saveFilter}
          setSaveFilter={setSaveFilter}
          filteringProducts={filteringProducts}
          setFilteringProducts={setFilteringProducts}
        />
      </div>
    </div>
  );
};

export default ProductFiltering;

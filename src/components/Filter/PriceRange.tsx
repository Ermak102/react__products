import React, { FC, useEffect, useState } from 'react';
import { IProduct } from '../../types/product';
import Input from '../UI/Input';

interface Props {
  category: string;
  saveFilter: IProduct[];
  filteringProducts: IProduct[];
  setSaveFilter: (product: IProduct[]) => void;
  setFilteringProducts: (products: IProduct[]) => void;
}

const PriceFilter: FC<Props> = ({
  category,
  saveFilter,
  setSaveFilter,
  filteringProducts,
  setFilteringProducts,
}) => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  useEffect(() => {
    setTo('');
    setFrom('');
  }, [category]);

  const validateInput = (price: string, f: Function) => {
    if (!price.match(/^\d+$/) && price) return;

    f(price);
  };

  const rangedPrice = () => {
    const sourceData = saveFilter?.length ? saveFilter : filteringProducts;

    setSaveFilter(sourceData);

    const minPrice = Math.min.apply(
      null,
      sourceData.map((p) => parseFloat(p.price)),
    );

    const maxPrice = Math.max.apply(
      null,
      sourceData.map((p) => parseFloat(p.price)),
    );

    const minValue = currentValue(minPrice.toString(), from);
    const maxValue = currentValue(maxPrice.toString(), to);

    const filtered = [...sourceData].filter(
      (p) => p.price >= minValue && p.price <= maxValue,
    );

    setFilteringProducts(filtered);
  };

  const currentValue = (defaultValue: string, currentValue: string): string => {
    return currentValue === '' ? defaultValue : currentValue;
  };

  return (
    <div className="price_range">
      <Input
        value={from}
        onChange={(e) => validateInput(e.currentTarget.value, setFrom)}
        onBlur={() => rangedPrice()}
        className="price_input input"
        placeholder="от"
      ></Input>
      <Input
        value={to}
        onChange={(e) => validateInput(e.currentTarget.value, setTo)}
        onBlur={() => rangedPrice()}
        className="price_input input"
        placeholder="до"
      ></Input>
    </div>
  );
};

export default PriceFilter;

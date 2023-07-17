import React, { FC, useState } from 'react';
import { IProduct } from '../../types/product';

interface Props {
  product: IProduct;
}

const ProductItem: FC<Props> = ({ product }) => {
  const [isEnter, setIsEnter] = useState(false);

  return (
    <div
      className={'product' + (isEnter ? ' active' : '')}
      onMouseEnter={() => {
        setIsEnter(!isEnter);
      }}
      onMouseLeave={() => setIsEnter(!isEnter)}
    >
      <div className="product_wrapper">
        <div className="product_image">
          <img className="image" src={product.image} alt="img" />
        </div>
        <div className="product_price">{product.price}$</div>
        <div className="product_rating">
          <div className="product_rating_image">
            <img className="image" src="img/star.png" alt="img" />
          </div>
          <div className="product_rate">{product.rating.rate}</div>
          <div className="product_point"></div>
          <div className="product_count">{product.rating.count} оценок</div>
        </div>
        <div className="product_title">{product.title}</div>
        <button className="product_btn btn">В корзину</button>
      </div>
    </div>
  );
};

export default ProductItem;

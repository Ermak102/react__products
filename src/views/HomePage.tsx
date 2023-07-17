import React, { useEffect, useState } from 'react';
import ProductForm from '../components/Product/ProductForm';
import ProductList from '../components/Product/ProductList';
import ProductFind from '../components/Filter/ProductFind';

import { IProduct } from '../types/product';
import { ProductService } from '../services/ProductService';

import '../styles/product.css';
import PaginationForm from '../components/Product/PaginationForm';

const HomePage = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [filteringProducts, setFilteringProducts] = useState<IProduct[]>([]);

  const [findProducts, setFindProducts] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const [sliceProducts, setSliceProducts] = useState(filteringProducts);
  const limitProductsInPage = 6;

  useEffect(() => {
    fetchProducts();
    changePage(currentPage);
  }, []);

  useEffect(() => {
    changePage(currentPage);
  }, [filteringProducts]);

  const fetchProducts = async () => {
    const dataProducts = await ProductService.getAllProducts();

    setProducts(dataProducts);
    setFilteringProducts(dataProducts);
  };

  const changePage = (page: number) => {
    const sliceProducts = [...filteringProducts].slice(
      page * limitProductsInPage - limitProductsInPage,
      page * limitProductsInPage,
    );

    setCurrentPage(page);
    setSliceProducts(sliceProducts);
  };

  return (
    <section className="home">
      <ProductForm
        products={products}
        findProducts={findProducts}
        setFindProducts={setFindProducts}
        filteringProducts={filteringProducts}
        setFilteringProducts={setFilteringProducts}
      />
      <div className="home_wrapper">
        <ProductFind
          findProducts={findProducts}
          setFindProducts={setFindProducts}
          products={products}
          setFilteringProducts={setFilteringProducts}
        />
        <ProductList products={sliceProducts} />
        <PaginationForm
          limit={limitProductsInPage}
          length={filteringProducts.length}
          currentPage={currentPage}
          changePage={changePage}
        />
      </div>
    </section>
  );
};

export default HomePage;

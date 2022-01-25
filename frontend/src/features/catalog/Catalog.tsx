import { useEffect } from 'react';
import LoadingComponent from '../../app/layout/LoadingComponent';
import { useAppSelector, useAppDispatch } from '../../app/store/configureStore';
import {
  fetchFilters,
  fetchProductsAsync,
  productSelectors,
} from './catalogSlice';
import ProductList from './ProductList';

export default function Catalog() {
  const products = useAppSelector(productSelectors.selectAll);
  const { filtersLoaded, productsLoaded, status } = useAppSelector(
    state => state.catalog
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!productsLoaded) dispatch(fetchProductsAsync());
  }, [dispatch, productsLoaded]);

  useEffect(() => {
    if (!filtersLoaded) dispatch(fetchFilters());
  }, [dispatch, filtersLoaded]);

  if (status.includes('pending'))
    return <LoadingComponent message="Loading products..." />;

  return (
    <>
      <ProductList products={products} />
    </>
  );
}

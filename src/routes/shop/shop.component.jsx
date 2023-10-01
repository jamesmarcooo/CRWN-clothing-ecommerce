import { Routes, Route } from 'react';

import CategoryPreview from '../../components/category-preview/category-preview.components';
import Category from '../category/category.component';

import './shop.styles.scss';

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoryPreview />}></Route>
      <Route path=":category" element={<Category />}></Route>
    </Routes>
  );
};

export default Shop;

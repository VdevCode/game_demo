import { ILanguage } from '@src/shared/interfaces';
import React, { useState } from 'react';
import Header from './components/Header';
import List from './components/List';

interface CategoryListProps {
  title?: ILanguage;
  sub?: ILanguage;
  to?: string;
  data?: any[];
  loading: boolean;
}
function CategoryList({
  title,
  sub,
  to,
  data,
  loading = true,
}: CategoryListProps) {
  const [renders, setRenders] = useState<any[]>(data ? data : [0, 1, 2, 3, 4]);

  return (
    <div className='mb-5'>
      <Header title={title} sub={sub} to={to} />
      <List data={renders} />
    </div>
  );
}

export default CategoryList;

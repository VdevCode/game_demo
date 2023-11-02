import React from 'react';
import Loader from './components/Loader';
import Render from './components/Render';

interface ItemProps {
  item: any;
  loading: boolean;
}
function Item({ item, loading }: ItemProps) {
  return (
    <div className="w-full h-fit">
      {loading ? <Loader /> : <Render />}
    </div>
  );
}

export default Item;

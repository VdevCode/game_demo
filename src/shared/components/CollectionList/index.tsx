import React from 'react';
import Item from './components/Item';

interface CollectionList {
  data?: [];
  loading?: boolean;
}
function CollectionList({ data, loading = true }: CollectionList) {
  const renders = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="grid grid-cols-4 gap-5">
      {renders.map((item, idx) => (
        <Item item={item} key={idx} loading={loading} />
      ))}
    </div>
  );
}

export default CollectionList;

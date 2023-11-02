import React from 'react';
import Skelecton from '@shared/components/Skeleton';

function Loader() {
  const items = [0, 1, 2, 3];
  return (
    <div>
      <main className="h-fit grid grid-cols-3 grid-rows-3 gap-2">
        {items.map((image, idx) => (
          <div
            className={
              idx === 0
                ? 'col-span-2 row-span-3 h-full w-full object-cover rounded-lg overflow-hidden'
                : 'w-full h-16 object-cover rounded-lg overflow-hidden'
            }
          >
            <Skelecton />
          </div>
        ))}
      </main>
      <footer className="my-2 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <Skelecton />
          </div>
          <div className="flex-1 w-full">
            <div className="h-4 w-16">
              <Skelecton />
            </div>
            <div className="my-1 h-4 w-16">
              <Skelecton />
            </div>
          </div>
        </div>
        <div className="my-1 h-8 w-16">
          <Skelecton />
        </div>
      </footer>
    </div>
  );
}

export default Loader;

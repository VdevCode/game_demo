import React from 'react';
import Skelecton from '@shared/components/Skeleton';
import Button from '@shared/components/Button';
import { Link } from 'react-router-dom';

interface ItemProps {
  item: any;
  loading: boolean;
}
function Item({ item, loading }: ItemProps) {
  return (
    <div className="w-full h-44 rounded-2xl overflow-hidden">
      {loading ? (
        <Skelecton />
      ) : (
        <div className="relative w-full h-full group">
          <img
            className="w-full h-full object-cover"
            src="https://cdn.dribbble.com/userupload/6448178/file/original-718011f5e886d454c71659fa3702c99f.jpg?resize=1200x1299"
            alt=""
          />
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/50 to-black/0 opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer">
            <Link
              to={''}
              className="absolute z-10 right-2 top-2 flex items-center justify-center w-10 h-10 rounded-full bg-white"
            >
              <i className="fa-light fa-arrow-up-right"></i>
            </Link>
            <p className="absolute z-20 left-2 bottom-2 text-white">Art</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Item;

import React from 'react';

function Render() {
  const itemRender = [
    'https://cdn.dribbble.com/userupload/3358977/file/original-d78ea6f39966acfc6a201993eae0047b.png?resize=1200x900',
    'https://cdn.dribbble.com/userupload/9752361/file/original-6fb41aff241286b455f094b4db9283fe.png?resize=1024x1024',
    'https://cdn.dribbble.com/userupload/6448178/file/original-718011f5e886d454c71659fa3702c99f.jpg?resize=1200x1299',
    'https://cdn.dribbble.com/userupload/10747485/file/original-5b0f4ed595acea786fc9cf693d3df3b1.jpg?resize=1024x1024&vertical=center',
  ];
  return (
    <div>
      <main className="h-fit grid grid-cols-3 grid-rows-3 gap-2">
        {itemRender.map((image, idx) => (
          <img
            src={image}
            alt=""
            className={
              idx === 0
                ? 'col-span-2 row-span-3 h-full w-full object-cover rounded-lg'
                : 'w-full h-16 object-cover rounded-lg'
            }
          />
        ))}
      </main>
      <footer className="my-2 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img
            className="w-8 h-8 rounded-full"
            src="https://cdn.dribbble.com/userupload/10747485/file/original-5b0f4ed595acea786fc9cf693d3df3b1.jpg?resize=1024x1024&vertical=center"
            alt=""
          />
          <div className="w-full">
            <h3 className="line-clamp-1 text-sm dark:text-white">Anna conda</h3>
            <p className='text-xs text-gray-500'>23 item</p>
          </div>
        </div>
        <div className="flex gap-1 text-sm text-gray-500">
          <p>
            <i className="fa-duotone fa-eye"></i>
          </p>
          <p>234</p>
        </div>
      </footer>
    </div>
  );
}

export default Render;

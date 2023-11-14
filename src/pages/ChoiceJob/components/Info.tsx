import { useEffect, useRef } from 'react';
function Info({ item }: { item: any }) {
  const imgRef = useRef<any>();
  useEffect(() => {
    if (imgRef.current) {
      imgRef.current.classList.add('newMajor');
    }
    const timer = setTimeout(() => {
      if (imgRef.current) {
        imgRef.current.classList.remove('newMajor');
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [item]);
  return (
    <div className="px-2 flex flex-col items-center justify-center w-44 h-full border-r-2 border-black">
      <div
        ref={imgRef}
        className="p-1 w-full h-24 bg-white rounded-lg rotate-[-10deg] shadow-lg"
      >
        <img
          className="w-full h-full object-cover rounded-lg"
          src={item.img}
          alt=""
        />
      </div>
      <main className="my-4 flex-1">
        <h1 className="px-2 bg-red-500/60 w-fit text-white text-sm">
          {item.name}
        </h1>
        <p className="my-3 text-gray-600 text-xs line-clamp-3">
          {item.description}
        </p>
        <div className="flex items-center justify-between text-sm">
          <p>Thời gian học</p>
          <p>{item.duration} năm</p>
        </div>
        <div className="flex items-center justify-between text-sm">
          <p>Tổng môn</p>
          <p>{item.project} môn</p>
        </div>
      </main>
    </div>
  );
}

export default Info;

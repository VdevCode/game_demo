import { IBirdDefault } from '@shared/interfaces';
import images from '@shared/assets/images';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import configs from '@configs/index';

function Info({ item }: { item: IBirdDefault }) {
  const parameters = [
    {
      icon: <i className="fa-light fa-sword"></i>,
      lable: 'Chống chịu',
      value: '242',
    },
    {
      icon: <i className="fa-light fa-sword"></i>,
      lable: 'Tốc độ bay',
      value: '242',
    },
  ];
  const navigate = useNavigate();
  const imgRef = useRef<any>();
  useEffect(() => {
    if (imgRef.current) {
      imgRef.current.classList.add('newCharactor');
    }
    const timer = setTimeout(() => {
      if (imgRef.current) {
        imgRef.current.classList.remove('newCharactor');
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [item]);

  const handelNext = () => {
    navigate(configs.routes.play);
  };

  return (
    <div className="relative flex-1 p-2 flex flex-col items-start justify-center h-full border-l-2 border-black">
      <div
        ref={imgRef}
        className="absolute z-0 top-0 right-0 p-2 w-24 h-28 bg-white rotate-12"
      >
        <img
          className="w-full h-full bg-[#3A877C]"
          src={item.imgAvatar}
          alt=""
        />
      </div>
      <header className="w-full h-fit">
        <div className="z-10 w-3/4">
          <p>{!item.role ? 'Sinh viên' : 'Giảng viên'}</p>
          <h1 className="text-2xl font-bold">{item.name}</h1>
          <p>Giới thiệu: {item.introl}</p>
        </div>
      </header>
      <main>
        <div className="my-5 flex items-center">
          <img className="z-10 w-6 scale-150" src={images.help_hp} alt="" />
          <div className="translate-x-[-5%] text-white flex-1 flex items-center justify-center h-5 border-2 shadow-md border-black bg-gradient-to-r from-[#69D190] to-[#B3D9C8]">
            340/340
          </div>
        </div>
        <div className="w-full grid grid-cols-2 gap-2">
          {parameters.map((item, idx) => (
            <div key={idx} className="w-full flex items-center">
              <p className="w-8 text-2xl">{item.icon}</p>
              <div className="flex-1">
                <p className="uppercase text-sm">{item.lable}</p>
                <p className="px-1 text-lg font-bold h-fit w-full">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <button onClick={handelNext}>Vào game</button>
    </div>
  );
}

export default Info;

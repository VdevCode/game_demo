import images from '@shared/assets/images';
import LoadingScreen from '@shared/components/LoadingScreen';
import { useEffect, useState } from 'react';
import Info from './Info';
import { useDispatch } from 'react-redux';
import { gameChangeMajor } from '@redux/gameSlice';
import { useNavigate } from 'react-router-dom';
import configs from '@configs/index';

interface Major {
  code: string;
  img: string;
  name: string;
  description: string;
  duration: number;
  project: number;
}
function Carousel() {
  const majors: Major[] = [
    {
      code: 'it',
      img: images.majorIt,
      name: 'Công nghệ thông tin',
      description: 'Bạn thích máy tính và có thể ngồi hằng giờ,...',
      duration: 2,
      project: 78,
    },
    {
      code: 'elec',
      img: images.majorGame,
      name: 'Điện máy',
      description: 'Bạn thích máy tính và có thể ngồi hằng giờ,...',
      duration: 2,
      project: 78,
    },
    {
      code: 'game',
      img: images.majorGrafic,
      name: 'CHăm sóc sức',
      description: 'Bạn thích máy tính và có thể ngồi hằng giờ,...',
      duration: 2,
      project: 78,
    },
    {
      code: 'travel',
      img: images.majorTravel,
      name: 'Kichana',
      description: 'Bạn thích máy tính và có thể ngồi hằng giờ,...',
      duration: 2,
      project: 78,
    },
    {
      code: 'elec',
      img: images.majorElectric,
      name: 'Kichana',
      description: 'Bạn thích máy tính và có thể ngồi hằng giờ,...',
      duration: 2,
      project: 78,
    },
  ];

  const navigate = useNavigate();
  const dispath = useDispatch();
  const [loading, setLoading] = useState<boolean>(true);
  const [selected, setSelected] = useState<number>(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handelChangeMajor = (idx: number) => {
    setSelected(idx);
    dispath(gameChangeMajor(idx));
  };

  const handelNext = () => {
    navigate(configs.routes.choiceCharactor);
  };

  const handPrev = () => {
    navigate(configs.routes.home);
  };
  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className="aprrearance my-2 p-2 w-3/4 h-1/2 sm:flex-1 bg-[#3A3D5F] rounded-2xl">
          <div className="w-full h-full flex items-center justify-between bg-[#F0E7DD] rounded-xl">
            <Info item={majors[selected]} />
            <div className="py-2 px-2 flex-1 h-full flex flex-col items-center justify-center">
              <header className="relative w-full h-fit">
                <h1 className="text-xl font-bold">CHỌN NGÀNH HỌC</h1>
                <p className="text-gray-500 text-xs">
                  Đây là những ngành học hot nhất tại FPT Polytechnic
                </p>
                <button
                  onClick={handPrev}
                  className="absolute top-0 right-0 translate-x-6 translate-y-[-50%] w-10 h-10 rounded-full border-4 border-white bg-red-500 text-white shadow-md"
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </header>
              <main className="relative my-1 flex-1 w-full">
                <div className="w-full grid grid-cols-3 gap-2">
                  {majors.map((item, idx) => (
                    <div
                      key={idx}
                      onClick={() => handelChangeMajor(idx)}
                      className={`w-full h-fit ${
                        selected === idx ? 'opacity-100' : `opacity-50`
                      }`}
                    >
                      <div className="relative p-1 w-full h-[85px] bg-white">
                        <img src={item.img} className="w-full h-full" alt="" />
                      </div>
                      <p className="h-fit line-clamp-2 text-sm">{item.name}</p>
                    </div>
                  ))}
                </div>
                <button
                  onClick={handelNext}
                  className="absolute bottom-0 right-2 bg-yellow-400 w-36 h-8 border-2 border-black rounded-lg"
                >
                  Tiếp tục
                </button>
              </main>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Carousel;

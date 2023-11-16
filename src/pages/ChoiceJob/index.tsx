import configs from '@configs/index';
import { gameChangeMajor } from '@redux/gameSlice';
import images from '@shared/assets/images';
import Button from '@shared/components/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

interface Major {
  img: string;
  name: string;
  description: string;
}

function ChoiceJob() {
  const majors: Major[] = [
    {
      img: images.majorIt,
      name: 'CNTT',
      description: 'Bạn thích máy tính và có thể ngồi hằng giờ,...',
    },
    {
      img: images.majorGame,
      name: 'GAME',
      description: 'Bạn thích máy tính và có thể ngồi hằng giờ,...',
    },
    {
      img: images.majorGrafic,
      name: 'ĐỒ HỌA',
      description: 'Bạn thích máy tính và có thể ngồi hằng giờ,...',
    },
    {
      img: images.majorTravel,
      name: 'DL NHKS',
      description: 'Bạn thích máy tính và có thể ngồi hằng giờ,...',
    },
    {
      img: images.majorElectric,
      name: 'ĐIỆN CK',
      description: 'Bạn thích máy tính và có thể ngồi hằng giờ,...',
    },
  ];
  const navigate = useNavigate();
  const dispath = useDispatch();
  const [selected, setSelected] = useState<number>(0);
  const handelChangeMajor = (idx: number) => {
    setSelected(idx);
    dispath(gameChangeMajor(idx));
  };
  const handelNext = () => {
    navigate(configs.routes.choiceCharactor);
  };
  return (
    <div className="appearance pt-2 h-full w-full flex flex-col items-center justify-between">
      <div className="relative flex flex-col items-center justify-center portrait:h-full portrait:w-full landscape:w-full landscape:h-full">
        <img
          className="absolute z-10 portrait:hidden landscape:w-1/5 landscape:bottom-5 landscape:left-5 landscape:translate-x-10"
          src={images.bee8}
          alt=""
        />
        <img
          className="absolute z-10 portrait:w-1/3 portrait:bottom-0 portrait:right-0 portrait:-translate-y-1/3 landscape:hidden"
          src={images.bee7}
          alt=""
        />
        <div className="aprrearance relative portrait:h-fit portrait:w-full landscape:h-[90%] landscape:w-[55%] flex flex-col items-center justify-center">
          <header className="relative z-10 portrait:w-[90%] portrait:h-1/6 landscape:w-1/2 landscape:h-1/5 landscape:scale-125">
            <img
              className="w-full object-contain"
              src={images.text_bee}
              alt=""
            />
          </header>
          <main className="relative flex-1 portrait:w-[90%] landscape:w-[100%] landscape:translate-y-[-5%] landscape:scale-90 landscape:p-2 ">
            <img
              className="absolute z-0 w-full h-full"
              src={images.more_box}
              alt=""
            />
            <div className="relative z-10 landscape:my-2 p-1 flex flex-col w-full h-full items-center justify-center">
              <header className="portrait:h-[20%] landscape:h-[10%] landscape:mb-5 flex items-center justify-center font-bold text-lg">
                CHỌN NGÀNH NGHỀ
              </header>
              <main className="px-[5%] flex-1 w-full landscape:flex">
                <div className="p-2 landscape:w-2/5 portrait:w-full h-fit portrait:flex portrait:gap-3 portrait:items-center ">
                  <img
                    className="landscape:w-full portrait:w-1/2 portrait:scale-90"
                    src={majors[selected].img}
                    alt=""
                  />
                  <main className="landscape:my-2 landscape:text-center">
                    <h1 className="text-xl font-semibold">
                      {majors[selected].name}
                    </h1>
                    <p className="line-clamp-3 text-sm">
                      {majors[selected].description}
                    </p>
                  </main>
                </div>
                <div className="flex-1 p-2">
                  <div className="w-full landscape:grid landscape:grid-cols-3 landscape:gap-3 portrait:flex portrait:flex-wrap portrait:gap-3">
                    {majors.map((item, idx) => (
                      <div
                        key={idx}
                        className="relative landscape:w-full landscape:h-fit portrait:w-16"
                        onClick={() => handelChangeMajor(idx)}
                      >
                        <img
                          src={
                            idx === selected
                              ? images.majorSelected
                              : images.majorBox
                          }
                          className="w-full"
                          alt=""
                        />
                        <div className="absolute z-10 inset-0 w-full h-3/4 flex items-center justify-center p-3">
                          <p className="text-white text-xs">{item.name}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-center portrait:h-10">
                    <Button onClick={handelNext}>Tiếp tục</Button>
                  </div>
                </div>
              </main>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default ChoiceJob;

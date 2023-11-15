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
      <div className="flex flex-col items-center justify-center w-full h-full relative">
        <img
          className="absolute z-10 w-1/5 bottom-5 left-5 translate-x-10"
          src={images.bee8}
          alt=""
        />
        <div className="aprrearance relative h-[98%] w-[55%] flex flex-col items-center justify-center">
          <header className="relative z-10 w-[65%] h-1/5 -translate-y-1/4">
            <img
              className="w-full object-contain"
              src={images.text_name}
              alt=""
            />
            <img
              className="absolute bottom-0 left-0 w-12 translate-y-3/4 -translate-x-1/4"
              src={images.bee3}
              alt=""
            />
            <img
              className="absolute bottom-1 right-0 w-14 translate-y-full translate-x-1/3"
              src={images.bee1}
              alt=""
            />
          </header>
          <main className="relative flex-1 w-[100%] translate-y-[-5%] scale-90">
            <img
              className="absolute z-0 w-full h-full"
              src={images.more_box}
              alt=""
            />
            <div className="relative z-10 p-1 flex flex-col w-full h-full items-center justify-center">
              <header className="h-[18%] flex items-center justify-center">
                CHỌN NGÀNH NGHỀ
              </header>
              <main className="py-[2%] px-[5%] flex-1 w-full flex">
                <div className="p-2 w-2/5 h-fit ">
                  <img className="w-full" src={majors[selected].img} alt="" />
                  <main className="my-2 text-center">
                    <h1 className="text-xl font-semibold">
                      {majors[selected].name}
                    </h1>
                    <p className="line-clamp-3 text-sm">
                      {majors[selected].description}
                    </p>
                  </main>
                </div>
                <div className="flex-1 ">
                  <div className="grid grid-cols-3 gap-3">
                    {majors.map((item, idx) => (
                      <div
                        key={idx}
                        className="relative w-full h-fit"
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
                  <div className="flex items-center justify-center">
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

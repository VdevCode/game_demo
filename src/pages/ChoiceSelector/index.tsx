import images from '@shared/assets/images';
import Button from '@shared/components/Button';
import { CHARACTORS } from '@shared/constant';
import { IBirdDefault } from '@shared/interfaces';
import { gameChangeBee } from '@redux/gameSlice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import configs from '@configs/index';

function ChoiceCharactor() {
  const dispath = useDispatch();
  const navigate = useNavigate();
  const charactors: IBirdDefault[] = CHARACTORS;
  const [selected, setSelected] = useState<number>(0);
  const handelChangeBee = (idx: number) => {
    setSelected(idx);
    dispath(gameChangeBee(idx));
  };
  const handelNext = () => {
    navigate(configs.routes.play);
  };
  return (
    <div className="h-full w-full flex flex-col items-center justify-between">
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
                CHỌN NHÂN VẬT
              </header>
              <main className="py-[2%] px-[5%] flex-1 w-full flex">
                <div className="p-2 w-2/5 h-fit ">
                  <div className="flex flex-col">
                    {charactors.map((item, idx) => (
                      <div
                        className="flex items-center gap-2"
                        key={idx}
                        onClick={() => handelChangeBee(idx)}
                      >
                        <img className="w-14" src={item.imgAvatar} alt="" />
                        <p>{item.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-1 px-2">
                  <div>
                    <h1 className="font-bold text-xl">
                      <span className="font-normal text-base">Nhân vật: </span>
                      {charactors[selected].name}
                    </h1>
                    <p>{charactors[selected].introl}</p>
                    <div className="my-1 flex items-center gap-2">
                      <p>Máu tối đa:</p>
                      <p className="font-bold">{charactors[selected].hp}</p>
                    </div>
                    <div className="my-1 flex items-center gap-2">
                      <p>Tốc độ bay:</p>
                      <p className="font-bold">{charactors[selected].speed}</p>
                    </div>
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

export default ChoiceCharactor;

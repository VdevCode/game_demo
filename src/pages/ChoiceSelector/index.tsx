import images from '@shared/assets/images';
import Button from '@shared/components/Button';
import { CHARACTORS } from '@shared/constant';
import { IBirdDefault } from '@shared/interfaces';
import { gameChangeBee } from '@redux/gameSlice';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import configs from '@configs/index';

function ChoiceCharactor() {
  const dispath = useDispatch();
  const navigate = useNavigate();
  const userStore = useSelector((state: any) => state.user);
  const charactors: IBirdDefault[] = CHARACTORS;
  const [selected, setSelected] = useState<number>(0);

  useEffect(() => {
    if (JSON.stringify(userStore.user) === '{}') {
      navigate(configs.routes.home);
    }
  }, [userStore]);
  const handelChangeBee = (idx: number) => {
    setSelected(idx);
    dispath(gameChangeBee(idx));
  };
  const handelNext = () => {
    navigate(configs.routes.play);
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
                CHỌN NHÂN VẬT
              </header>
              <main className="py-2 px-[10%] min-h-[40vh] flex-1 w-full landscape:flex">
                <div className="landscape:flex-1 flex landscape:flex-col portrait:justify-between landscape:gap-4">
                  {charactors.map((item, idx) => (
                    <div
                      onClick={() => handelChangeBee(idx)}
                      className={`flex items-center gap-3 portrait:flex-col ${
                        idx === selected ? 'font-bold' : ''
                      }`}
                      key={idx}
                    >
                      <div className="w-14 h-14 overflow-hidden">
                        <img
                          className={idx === 0 ? 'h-14 scale-150' : 'h-14'}
                          src={item.imgAvatar}
                          alt=""
                        />
                      </div>
                      <p>{item.name}</p>
                    </div>
                  ))}
                </div>
                <div className="relative landscape:flex-1 portrait:my-2">
                  <p className="uppercase font-bold">Thông tin nhân vật</p>
                  <p className="my-1">{charactors[selected].introl}</p>
                  <div className="mb-1 flex gap-2">
                    <p className="font-semibold">Tên nhân vật:</p>
                    <p>{charactors[selected].name}</p>
                  </div>
                  <div className="mb-1 flex gap-2">
                    <p className="font-semibold">Máu tối đa:</p>
                    <p>{charactors[selected].hp}</p>
                  </div>
                  <div className="mb-1 flex gap-2">
                    <p className="font-semibold">Tốc độ bay:</p>
                    <p>{charactors[selected].speed}</p>
                  </div>
                  <div className="absolute portrait:my-5 landscape:bottom-0 landscape:right-0 last:translate-x-1/2 landscape:translate-y-1/2">
                    <Button onClick={handelNext}>Xác nhận</Button>
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

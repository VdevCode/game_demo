import configs from '@configs/index';
import images from '@shared/assets/images';
import Button from '@shared/components/Button';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UpdateGift() {
  const navigate = useNavigate();
  const [gifts, setGift] = useState<any[]>([]);
  const [loader, setLoader] = useState(true);
  const [updated, setUpdated] = useState(0);

  useEffect(() => {
    const getData = async () => {
      setLoader(true);
      const res = await axios.get(configs.api.getGiftUpdate);
      setGift(res.data.data);
      setLoader(false);
    };
    getData();
  }, [updated]);

  const handelChange = (idx: number, value: string) => {
    const updateGift = [...gifts];
    updateGift[idx].total = isNaN(Number(value)) ? 0 : Number(value);
    setGift(updateGift);
  };

  const handleSave = async () => {
    setLoader(true);
    const res = await axios.patch(configs.api.updateGift, { gifts });
    console.log(res);
    setUpdated((prev) => prev + 1);
  };
  return (
    <div className="appearance pt-2 h-full w-full flex flex-col items-center justify-between">
      <div className="relative flex flex-col items-center justify-center portrait:h-full portrait:w-full landscape:w-full landscape:h-full">
        <img
          className="absolute z-10 portrait:hidden landscape:w-1/5 landscape:bottom-5 landscape:left-5 landscape:translate-x-10"
          src={images.bee8}
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
                CẬP NHẬT SỐ LƯỢNG QUÀ
              </header>
              <main className="mb-10 py-2 px-[10%] min-h-[40vh] flex-1 w-full">
                <div className="w-full flex items-center gap-2 font-bold">
                  <p className="flex-1">Tên phần thưởng</p>
                  <p className="w-fit">Số lượng hiện tại</p>
                </div>
                {!loader ? (
                  <div className="flex flex-col gap-3">
                    {gifts.map((item, idx) => (
                      <div key={idx} className="flex items-center">
                        <p className="flex-1">{item.name}</p>
                        <div className="w-32 flex justify-center">
                          <input
                            type="string"
                            className="w-8 h-8 text-center bg-[#FFF694] rounded-lg"
                            value={item.total}
                            onChange={(e) => handelChange(idx, e.target.value)}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    Đang tải
                  </div>
                )}
              </main>
              {!loader && (
                <footer className="absolute z-10 bottom-0 right-0 left-0 flex justify-between">
                  <Button onClick={() => navigate(configs.routes.home)}>
                    Thoát
                  </Button>
                  <Button onClick={handleSave}>Lưu</Button>
                </footer>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default UpdateGift;

import configs from '@configs/index';
import { userLoginSucess } from '@redux/userSlice';
import images from '@shared/assets/images';
import Button from '@shared/components/Button';
import { IUser } from '@src/shared/interfaces';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Ranking() {
  const dispath = useDispatch();
  const navigate = useNavigate();
  const gameStore = useSelector((state: any) => state.game);
  const userStore = useSelector((state: any) => state.user);
  const [loading, setLoading] = useState<boolean>(true);
  const [ranking, setRanking] = useState<IUser[]>([]);
  const [myRank, setMyRank] = useState<any>(null);

  useEffect(() => {
    setLoading(true);
    if (JSON.stringify(userStore.user) != '{}') {
      saveResult();
      getMyRank();
    }
    getData();
    setLoading(false);
  }, []);
  const saveResult = async () => {
    const response = await axios.post(
      configs.api.saveGame + userStore.user.phone,
      {
        ...gameStore,
      },
    );
    dispath(userLoginSucess(response.data.data));
  };
  const getData = async () => {
    const res = await axios.get(configs.api.ranking);
    setRanking(res.data.data);
  };
  const getMyRank = async () => {
    const res = await axios.get(configs.api.myRanking + userStore.user.phone);
    console.log(res);
    setMyRank(res.data);
  };
  const handelGift = () => {
    navigate(configs.routes.randomGift);
  };
  const handelPlayAgain = () => {
    if (userStore.status) navigate(configs.routes.choiceJob);
    else navigate(configs.routes.register);
  };
  const handelExist = () => {
    navigate(configs.routes.home);
  };

  return (
    <div className="appearance pt-2 h-full w-full flex flex-col items-center justify-between">
      {loading ? (
        'Đang tải'
      ) : (
        <div className="relative flex flex-col items-center justify-center portrait:h-full portrait:w-full landscape:w-full landscape:h-full">
          <img
            className="absolute z-10 portrait:hidden landscape:w-1/5 landscape:bottom-5 landscape:left-5 landscape:translate-x-10"
            src={images.bee8}
            alt=""
          />
          <div className="aprrearance relative portrait:h-fit portrait:w-full landscape:h-[100%] landscape:w-[55%] flex flex-col items-center justify-center">
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
                  BẢNG XẾP HẠNG
                </header>
                <main className="relative pb-5 px-[10%] min-h-[40vh] flex-1 w-full flex flex-col items-center justify-center">
                  <div className="w-full flex-1 landscape:max-h-[40vh] overflow-y-auto">
                    {ranking.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between gap-10"
                      >
                        <p className="text-2xl">#{idx + 1}</p>
                        <p className="flex-1 line-clamp-1 font-bold text-lg">
                          {item.name}
                        </p>
                        <p className="text-2xl">{item.highestScore}</p>
                      </div>
                    ))}
                  </div>
                  <div className="w-full my-5 portrait:h-fit landscape:h-fit">
                    {myRank && (
                      <div className="w-full h-fit">
                        <p className="font-bold uppercase">Xếp hạng của bạn</p>
                        <div className="w-full flex items-center justify-between gap-10">
                          <p className="text-2xl">{myRank.userRank}</p>
                          <p className="flex-1 line-clamp-1 font-bold text-lg">
                            {myRank.userData.name}
                          </p>
                          <p className="text-2xl">
                            {myRank.userData.highestScore}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  <footer className="absolute bottom-0 right-0 left-0 portrait:translate-y-1/3 landscape:translate-y-1/2 h-fit w-full flex justify-between">
                    <Button onClick={handelExist}>Thoát</Button>
                    {gameStore.coins >= 50 &&
                    gameStore.win &&
                    userStore.user.gift === false ? (
                      <Button onClick={handelGift}>Nhận quà</Button>
                    ) : (
                      <Button onClick={handelPlayAgain}>Chơi lại</Button>
                    )}
                  </footer>
                </main>
              </div>
            </main>
          </div>
        </div>
      )}
    </div>
  );
}

export default Ranking;

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

  useEffect(() => {
    if (userStore.status) {
      saveResult();
    }
    setLoading(true);
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

  const handelPlayAgain = () => {
    if (userStore.status) navigate(configs.routes.choiceJob);
    else navigate(configs.routes.register);
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
                BẢNG XẾP HẠNG
              </header>
              <main className="relative py-[2%] px-[10%] flex-1 w-full flex flex-col">
                {loading ? (
                  'Đang tải'
                ) : (
                  <>
                    <div className="h-fit grid grid-cols-2 gap-5 max-h-[45vh] overflow-y-auto">
                      {ranking.map((item, idx) => (
                        <div
                          className="flex gap-4 lg:gap-10 h-fit lg:text-xl "
                          key={idx}
                        >
                          <p>
                            <i className="fa-sharp fa-solid fa-circle"></i>
                          </p>
                          <p className="flex-1 line-clamp-1">{item.name}</p>
                          <p>{item.highestScore}</p>
                        </div>
                      ))}
                    </div>
                    <footer className="absolute z-10 bottom-0 right-0 left-0 flex w-full items-center justify-between">
                      <Button onClick={() => navigate(configs.routes.home)}>
                        Thoát
                      </Button>
                      {userStore && (
                        <Button onClick={handelPlayAgain}>Chơi lại</Button>
                      )}
                    </footer>
                  </>
                )}
              </main>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Ranking;

// import configs from '@configs/index';
// import LoadingScreen from '@shared/components/LoadingScreen';
// import { IGameStore, IUser } from '@shared/interfaces';
// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import MainScreen from './components/MainScreen';
// import { userLoginSucess } from '@redux/userSlice';

// function Caculate() {
//   const game: IGameStore = useSelector((state: any) => state.game);
//   const user: IUser = useSelector((state: any) => state.user.user);
//   const dispath = useDispatch();
//   const [loader, setLoader] = useState<boolean>(false);
//   const [ranking, setRanking] = useState<IUser[]>([]);
//   useEffect(() => {
//     getRanking();
//     if (user) {
//       if (user.history.length < 3) {
//         saveData();
//       } else {
//         setLoader(false);
//       }
//     } else {
//     }
//   }, []);
//   const saveData = async () => {
//     setLoader(true);
//     await handelSaveResult();
//     setLoader(false);
//   };
//   const getRanking = async () => {
//     const res = await axios.get(configs.api.ranking);
//     setRanking(res.data.data);
//   };
//   const handelSaveResult = async () => {
//     try {
//       const response = await axios.post(
//         configs.api.saveGame + user.email,
//         game,
//       );
//       dispath(userLoginSucess(response.data.data));
//     } catch (error) {}
//   };
//   return <>{loader ? <LoadingScreen /> : <MainScreen ranking={ranking} />}</>;
// }

// export default Caculate;

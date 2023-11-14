import configs from '@configs/index';
import LoadingScreen from '@shared/components/LoadingScreen';
import { IGameStore, IUser } from '@shared/interfaces';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainScreen from './components/MainScreen';
import { userLoginSucess } from '@redux/userSlice';

function Caculate() {
  const game: IGameStore = useSelector((state: any) => state.game);
  const user: IUser = useSelector((state: any) => state.user.user);
  const dispath = useDispatch();
  const [loader, setLoader] = useState<boolean>(true);
  useEffect(() => {
    const saveData = async () => {
      setLoader(true);
      await handelSaveResult();
      setLoader(false);
    };
    if (user.history.length < 3) {
      saveData();
    } else {
      setLoader(false);
    }
  }, []);
  const handelSaveResult = async () => {
    try {
      const response = await axios.post(
        configs.api.saveGame + user.email,
        game,
      );
      dispath(userLoginSucess(response.data.data));
    } catch (error) {}
  };
  return <>{loader ? <LoadingScreen /> : <MainScreen />}</>;
}

export default Caculate;

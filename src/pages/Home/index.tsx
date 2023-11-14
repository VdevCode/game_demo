import images from '@shared/assets/images';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import configs from '@configs/index';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { IUserLogin } from '@src/shared/interfaces';
import { userLoginSucess } from '@redux/userSlice';

function Home() {
  const navigate = useNavigate();
  const dispath = useDispatch();
  const handelSignIn = async () => {
    const res = await signInWithPopup(
      configs.firebase.auth,
      configs.firebase.provider,
    );
    const data = {
      email: res.user.email,
      avatar: res.user.photoURL,
    };
    const response = await axios.post(configs.api.signin, data);
    const dataResponse: IUserLogin = response.data;
    dispath(userLoginSucess(dataResponse.data));
    if (!dataResponse.data.isValidAccount) navigate(configs.routes.addData);
    else navigate(configs.routes.choiceJob);
  };
  return (
    <div className="sm:py-5 py-[20%] flex flex-col h-full items-center justify-between">
      <img className="w-4/5 sm:w-1/2" src={images.text_name} alt="" />
      <div className="flex-1 flex flex-col items-center justify-center">
        <button onClick={handelSignIn}>Click any where to play</button>
      </div>
    </div>
  );
}

export default Home;

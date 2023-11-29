import configs from '@configs/index';
import { userLoginSucess } from '@redux/userSlice';
import images from '@shared/assets/images';
import Button from '@shared/components/Button';
import getRamdom from '@shared/utils/getRamdom';
import axios from 'axios';
import { useState } from 'react';
import OtpInput from 'react-otp-input';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

interface IDataUser {
  name: string;
  phone: string;
  email: string;
  school: string;
  code: string;
}

function OPT({
  data,
  handelSendCode,
  setOTP,
}: {
  data: IDataUser;
  handelSendCode: any;
  setOTP: any;
}) {
  const dispath = useDispatch();
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');
  const [code, setCode] = useState<string>(data.code);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handelSignUp = async () => {
    setLoading(true);
    if (code == otp) {
      const { code, ...passProps } = data;
      const res = await axios.post(configs.api.register, passProps);
      dispath(userLoginSucess(res.data.data));
      navigate(configs.routes.choiceJob);
    } else {
      setError(true);
      setOtp('');
    }
    setLoading(false);
  };
  const handelReSendCode = async () => {
    setError(false);
    setLoading(true);
    const resendCode = getRamdom(100000, 999999).toString();
    const dataSend = {
      name: data.name,
      phone: data.phone,
      code: resendCode,
    };
    setCode(resendCode);
    handelSendCode(dataSend);
    setLoading(false);
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
                XÁC THỰC TÀI KHOẢN
              </header>
              <main className="relative py-2 px-[10%] min-h-[40vh] flex-1 w-full landscape:flex landscape:flex-col">
                <div className="flex-1">
                  <h1>
                    Chúng mình đã gửi mã xác thực qua số điện thoại
                    <span className="mx-1 font-bold">+{data.phone}</span>. Hãy
                    nhập chúng ở đây nhé!
                  </h1>
                  <p className="my-1 font-bold uppercase ">Mã xác thực:</p>
                  <div className="flex flex-col items-center justify-center">
                    <OtpInput
                      inputStyle={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '10px',
                      }}
                      containerStyle={'flex w-fit gap-2'}
                      value={otp}
                      onChange={setOtp}
                      numInputs={6}
                      renderInput={(props) => <input {...props} />}
                    />
                  </div>
                  {error && (
                    <p className="my-3 text-red-500 font-bold">
                      Lỗi: Sai mã xác nhận
                    </p>
                  )}
                </div>
                <div className="absolute bottom-0 right-0 left-0 w-full px-[5%] flex justify-between landscape:translate-y-1/2 portrait:translate-y-1/3">
                  <Button onClick={() => setOTP(false)}>Trở lại</Button>
                  {loading ? (
                    <Button>Đang tải</Button>
                  ) : (
                    <>
                      {error ? (
                        <Button onClick={handelReSendCode}>Gửi lại mã</Button>
                      ) : (
                        <Button onClick={handelSignUp}>Xác thực</Button>
                      )}
                    </>
                  )}
                </div>
              </main>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default OPT;

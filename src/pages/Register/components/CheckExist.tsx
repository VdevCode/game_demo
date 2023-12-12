import images from '@shared/assets/images';
import configs from '@configs/index';
import Button from '@shared/components/Button';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLoginSucess } from '@redux/userSlice';

interface Props {
  setStep: Function;
  setData: Function;
}
function CheckExist({ setStep, setData }: Props) {
  const [error, setError] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispath = useDispatch();

  const handelChangeInput = (e: any) => {
    let value: string = e.target.value.trim();
    if (value.startsWith(' ')) value = '';
    setPhone(value);
  };

  const handelChecking = async () => {
    setError('');
    setLoading(true);
    // Validate
    if (phone.length === 0) {
      setError('Vui lòng nhập số điện thoại');
      setLoading(false);
      return;
    }
    const phoneRegex = /^(0[1-9])+([0-9]{8})\b/;
    if (!phoneRegex.test(phone)) {
      setError('Số điện thoại của bạn không hợp lệ');
      setLoading(false);
      return;
    }
    // Send
    try {
      const res = await axios.get(configs.api.checkExist + '/' + phone);
      dispath(userLoginSucess(res.data.data));
      navigate(configs.routes.choiceJob);
    } catch (error) {
      setStep(1);
      setData({
        phone,
      });
    } finally {
      setLoading(false);
    }
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
                ĐĂNG NHẬP TÀI KHOẢN
              </header>
              <main className="relative py-2 px-[10%] min-h-[40vh] flex-1 w-full landscape:flex landscape:flex-col">
                <div className="flex-1">
                  <p className="my-1 font-bold uppercase ">Mã xác thực:</p>
                  <div className="flex flex-col items-center justify-center">
                    <input
                      type="text"
                      className="px-2 w-full h-8 bg-[#FFF694] rounded-lg"
                      placeholder="Số điện thoại"
                      onChange={(e) => handelChangeInput(e)}
                    />
                  </div>
                  {error.length > 0 && (
                    <p className="my-3 text-red-500 font-bold">Lỗi: {error}</p>
                  )}
                  <p className="my-2">
                    Lưu ý: Bằng cách nhập vào số điện thoại đã đăng kí. Chúng
                    mình có thể giúp bạn đăng nhập vào tài khoản cũ nhanh chóng
                    hơn.
                  </p>
                </div>
                <div className="absolute bottom-0 right-0 left-0 w-full px-[5%] flex justify-between landscape:translate-y-1/2 portrait:translate-y-1/3">
                  <Button onClick={() => navigate(configs.routes.home)}>
                    Trở lại
                  </Button>
                  {loading ? (
                    <Button>Đang tải</Button>
                  ) : (
                    <Button onClick={handelChecking}>Xác thực</Button>
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

export default CheckExist;

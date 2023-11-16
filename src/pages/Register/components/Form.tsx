import configs from '@configs/index';
import images from '@shared/assets/images';
import { IUser } from '@shared/interfaces';
import { userLoginSucess } from '@redux/userSlice';
import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '@shared/components/Button';

function Form({ setError, setErrorMsg }: { setError: any; setErrorMsg: any }) {
  const dispath = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [school, setSchool] = useState<string>('');
  const forms = [
    {
      placeholder: 'Số điện thoại',
      img: images.form_input,
      handelChange: (e: any) => {
        const value = checkInput(e);
        setPhone(value);
      },
    },
    {
      placeholder: 'Tên của bạn',
      img: images.form_input,
      handelChange: (e: any) => {
        const value = checkInput(e);
        setName(value);
      },
    },
    {
      placeholder: 'Địa chỉ email',
      img: images.form_input,
      handelChange: (e: any) => {
        const value = checkInput(e);
        setEmail(value);
      },
    },

    {
      placeholder: 'Trường THPT',
      img: images.form_input,
      handelChange: (e: any) => {
        const value = checkInput(e);
        setSchool(value);
      },
    },
  ];
  const checkInput = (e: any) => {
    let value: string = e.target.value;
    if (value.startsWith(' ')) value = '';
    return value;
  };
  const handelRegister = async () => {
    try {
      const data = {
        email,
        phone,
        name,
        school,
      };
      const error: boolean = validateData(data);
      if (!error) {
        const response = await axios.post(configs.api.register, data);
        console.log(response);
        const user: IUser = response.data.data;
        dispath(userLoginSucess(user));
        navigate(configs.routes.choiceJob);
      }
    } catch (error) {
      setError(true);
      setErrorMsg('Số điện thoại hoặc email đã được sử dụng. Vui lòng thử lại');
    }
  };
  function validateData(data: any): boolean {
    let error = false;
    const phoneRegex = /^(0[1-9])+([0-9]{8})\b/;
    if (data.name.length === 0) {
      error = true;
      setError(true);
      setErrorMsg('Tên của bạn không được để trống');
    }
    if (!phoneRegex.test(data.phone)) {
      error = true;
      setError(true);
      setErrorMsg('Số điện thoại không hợp lệ');
    }
    return error;
  }

  return (
    <div className="relative landscape:w-1/2 landscape:h-[90%] portrait:h-fit portrait:w-3/4">
      <div className="relative z-10 landscape:w-full landscape:h-20 portrait:h-24 portrait:scale-125">
        <img className="w-full" src={images.text_name} alt="" />
      </div>
      <header className="relative w-full">
        <img
          className="w-full landscape:h-20 portrait:h-16"
          src={images.form_header}
          alt=""
        />
      </header>
      <main className="landscape:grid landscape:grid-cols-2">
        {forms.map((item, idx) => (
          <div key={idx} className={`relative landscape:h-full portrait:h-16`}>
            <img src={images.form_input} alt="" />
            <div className="absolute z-10 inset-0 w-full h-full flex items-center justify-center">
              <input
                type="text"
                className="px-3 text-sm bg-transparent w-3/4 text-white"
                placeholder={item.placeholder}
                onChange={(e) => item.handelChange(e)}
              />
            </div>
          </div>
        ))}
      </main>
      <footer className="relative flex items-center justify-center w-full">
        <img
          src={images.form_header}
          className="h-20 lg:h-full w-full rotate-180 object-cover"
          alt=""
        />
        <div className="absolute bottom-0 right-0 left-0 flex items-center justify-center scale-125">
          <Button onClick={handelRegister}>Đăng nhập</Button>
        </div>
      </footer>
      {/* Decord */}
      <img
        className="absolute z-10 top-0 w-14 translate-y-full"
        src={images.bee}
        alt=""
      />
      <img
        className="absolute z-10 top-1/2 left-0 -translate-x-3/4 w-14"
        src={images.bee6}
        alt=""
      />
      <img
        className="absolute z-10 top-1/4 left-0 -translate-x-full w-12"
        src={images.bee4}
        alt=""
      />
      <img
        className="absolute z-10 top-3/4 left-0 -translate-x-3/4 w-16"
        src={images.bee2}
        alt=""
      />
      <img
        className="absolute z-10 top-1/4 right-0 translate-x-3/4 w-20"
        src={images.bee1}
        alt=""
      />
      <img
        className="absolute z-10 bottom-0 right-0 translate-x-3/4 w-20"
        src={images.bee3}
        alt=""
      />
    </div>
  );
}

export default Form;

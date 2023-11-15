import configs from '@configs/index';
import images from '@shared/assets/images';
import { IUser } from '@shared/interfaces';
import { userLoginSucess } from '@redux/userSlice';
import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Form({ setError, setErrorMsg }: { setError: any; setErrorMsg: any }) {
  const dispath = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [school, setSchool] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const forms = [
    {
      placeholder: 'Địa chỉ email',
      img: images.form_input,
      handelChange: (e: any) => {
        const value = checkInput(e);
        setEmail(value);
      },
    },
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
      placeholder: 'Trường THPT',
      img: images.form_input,
      handelChange: (e: any) => {
        const value = checkInput(e);
        setSchool(value);
      },
    },
    {
      placeholder: 'Địa chỉ',
      img: images.form_input,
      handelChange: (e: any) => {
        const value = checkInput(e);
        setAddress(value);
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
        address,
      };
      const error: boolean = validateData(data);
      if (!error) {
        const response = await axios.post(configs.api.register, data);
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
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (data.address.length === 0) {
      error = true;
      setError(true);
      setErrorMsg('Địa chỉ không được để trống');
    }
    if (data.school.length === 0) {
      error = true;
      setError(true);
      setErrorMsg('Tên trường học không được để trống');
    }
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
    if (!emailRegex.test(data.email)) {
      error = true;
      setError(true);
      setErrorMsg('Địa chỉ email không hợp lệ');
    }
    return error;
  }

  return (
    // w-[25%]
    <div className="w-[25%] flex flex-col items-center justify-center aprrearance">
      <header className="relative w-full">
        <img
          className="w-full object-contain"
          src={images.form_header}
          alt=""
        />
        <img
          className="absolute top-0 right-0 left-0 translate-y-[-50%] scale-125"
          src={images.text_name}
          alt=""
        />
      </header>
      {/* flex flex-col items-center justify-center */}
      <main className="w-full flex-1 flex flex-col items-center justify-center">
        {forms.map((item, idx) => (
          <div key={idx} className="relative w-full flex-1 object-contain">
            <img className="h-full object-contain" src={item.img} alt="" />
            <div className="absolute inset-0 w-full h-full flex items-center justify-center">
              <input
                type="text"
                className="px-2 w-3/4 bg-transparent text-sm text-white"
                placeholder={item.placeholder}
                onChange={(e) => item.handelChange(e)}
              />
            </div>
          </div>
        ))}
      </main>
      <footer className="relative" onClick={handelRegister}>
        <img src={images.form_footer} alt="" />
      </footer>
    </div>
  );
}

export default Form;

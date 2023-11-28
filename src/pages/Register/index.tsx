import { useState } from 'react';
import Form from './components/Form';
import OPT from './components/OPT';
import axios from 'axios';
import configs from '@configs/index';

interface IDataUser {
  name: string;
  phone: string;
  email: string;
  school: string;
  code: string;
}
interface ISendCode {
  phone: string;
  name: string;
  code: string;
}
function Register() {
  const [opt, setOpt] = useState<boolean>(false);
  const [data, setData] = useState<IDataUser>();
  const handelSendCode = async (data: ISendCode) => {
    const response = await axios.post(configs.api.sendOTP, data);
    console.log(response);
  };
  return (
    <>
      {opt && !!data ? (
        <OPT setOTP={setOpt} data={data} handelSendCode={handelSendCode} />
      ) : (
        <Form
          setOTP={setOpt}
          setData={setData}
          handelSendCode={handelSendCode}
        />
      )}
    </>
  );
}

export default Register;

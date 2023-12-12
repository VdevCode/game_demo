import { useState } from 'react';
import Form from './components/Form';
import OPT from './components/OPT';
import axios from 'axios';
import configs from '@configs/index';
import CheckExist from './components/CheckExist';

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
  const [step, setStep] = useState<number>(0);
  const [data, setData] = useState<IDataUser>();
  const handelSendCode = async (data: ISendCode) => {
    const response = await axios.post(configs.api.sendOTP, data);
    console.log(response);
  };
  return (
    <>
      {step === 0 ? (
        <CheckExist setStep={setStep} setData={setData} />
      ) : step === 1 ? (
        <Form
          setData={setData}
          handelSendCode={handelSendCode}
          setStep={setStep}
        />
      ) : (
        <>
          {data && (
            <OPT
              data={data}
              handelSendCode={handelSendCode}
              setStep={setStep}
            />
          )}
        </>
      )}
    </>
  );
}

export default Register;

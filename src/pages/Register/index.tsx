import { useState } from 'react';
import Form from './components/Form';
import OPT from './components/OPT';

function Register() {
  const [opt, setOpt] = useState<boolean>(false);
  const [data, setData] = useState<{}>({});
  return (
    <>
      {opt ? (
        <OPT setOPT={setOpt} data={data} />
      ) : (
        <Form setOPT={setOpt} setData={setData} />
      )}
    </>
  );
}

export default Register;

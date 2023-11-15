import { useEffect, useState } from 'react';
import Error from './components/Error';
import Form from './components/Form';

function Register() {
  const [error, setError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');
  useEffect(() => {
    console.log('Status', error);
  }, [error]);
  return (
    <>
      {error ? (
        <Error errorMsg={errorMsg} setError={setError} />
      ) : (
        <Form setErrorMsg={setErrorMsg} setError={setError} />
      )}
    </>
  );
}

export default Register;

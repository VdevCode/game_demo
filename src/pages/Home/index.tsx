import Button from '@shared/components/Button';
import { useForm } from 'react-hook-form';

function Home() {
  const { register, handleSubmit } = useForm();

  const data = [
    {
      lable: 'Họ và Tên',
      register: register('name', { required: true, min: '1' }),
    },
    {
      lable: 'Email',
      register: register('email', { required: true, min: '1' }),
    },
    {
      lable: 'Số điện thoại',
      register: register('phone', { required: true, min: '1' }),
    },
    {
      lable: 'Tên trường',
      register: register('school', { required: true, min: '1' }),
    },
    {
      lable: 'Tỉnh',
      register: register('province', { required: true, min: '1' }),
    },
  ];

  return (
    <div>
      <div className="mb-3 flex items-center justify-centers flex-col">
        {data.map((item, idx) => (
          <input className="px-1 my-1 h-10" placeholder={item.lable} />
        ))}
      </div>
      <Button />
    </div>
  );
}

export default Home;

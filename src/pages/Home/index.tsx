import images from '@shared/assets/images';
import Button from '@shared/components/Button';
import configs from '@configs/index';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <div className="sm:py-5 py-[20%] flex flex-col h-full items-center justify-between">
      <img className="w-4/5 sm:w-1/2" src={images.text_name} alt="" />
      <div className="flex-1 flex flex-col items-center justify-center">
        <Button onClick={() => navigate(configs.routes.register)}>
          Đăng nhập
        </Button>
        <Button onClick={() => navigate(configs.routes.rank)}>Xếp hạng</Button>
        <Button onClick={() => {}}>Thoát</Button>
      </div>
    </div>
  );
}

export default Home;

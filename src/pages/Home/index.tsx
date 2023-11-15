import images from '@shared/assets/images';
import Button from '@shared/components/Button';
import configs from '@configs/index';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <div className="sm:py-5 py-[20%] flex flex-col h-[80%] items-center justify-center">
      <img className="h-[40%]" src={images.text_bee} alt="" />
      <div className="flex-1 w-1/2 flex items-center justify-center gap-5 translate-y-[-5%]">
        <div className="w-fit flex flex-col justify-center items-center">
          <Button onClick={() => navigate(configs.routes.register)}>
            Đăng nhập
          </Button>
          <Button onClick={() => navigate(configs.routes.ranking)}>
            Xếp hạng
          </Button>
          <Button>Thoát</Button>
        </div>
        <img className="w-1/3 lg:w-1/4 scale-110" src={images.bee7} alt="" />
      </div>
    </div>
  );
}

export default Home;

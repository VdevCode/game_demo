import images from '@shared/assets/images';
import Button from '@shared/components/Button';
import configs from '@configs/index';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';

function Home() {
  const navigate = useNavigate();
  const screenRef = useRef<any>();
  const handelExistFullScreen = () => {
    if (screenRef.current) {
      if (document.fullscreenEnabled) {
        if (!document.fullscreenElement) {
        } else {
          document.exitFullscreen();
        }
      } else {
        console.error('Fullscreen API is not supported in this browser.');
      }
    }
  };
  return (
    <div
      ref={screenRef}
      className="sm:py-5 py-[20%] flex flex-col h-[80%] items-center justify-center"
    >
      <img className="h-[45%] scale-150" src={images.text_bee} alt="" />
      <div className="flex-1 w-1/2 flex items-center justify-center gap-5 translate-y-[-5%]">
        <div className="w-fit flex flex-col justify-center items-center">
          <Button onClick={() => navigate(configs.routes.register)}>
            Đăng nhập
          </Button>
          <Button onClick={() => navigate(configs.routes.ranking)}>
            Xếp hạng
          </Button>
          <Button onClick={handelExistFullScreen}>Thoát</Button>
        </div>
        <img className="w-1/3 lg:w-1/4 scale-110" src={images.bee7} alt="" />
      </div>
    </div>
  );
}

export default Home;

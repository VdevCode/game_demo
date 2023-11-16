import Button from '@shared/components/Button';
import configs from '@configs/index';
import { useNavigate } from 'react-router-dom';

function GiftNotion({ name }: { name: string }) {
  const navigate = useNavigate();
  return (
    <div className="relative w-full h-full">
      <h1 className="text-xl font-bold text-[#F1541F] uppercase">
        Chúc mừng bạn nhận được một phần quà từ Cao đẳng FPT Polytechnic !!!
      </h1>
      <div className="my-2 flex items-center gap-2">
        <p>Phần quà của bạn là: </p>
        <p className="text-lg font-bold">1 {name}</p>
      </div>
      <div className="absolute bottom-0 right-0 left-0 flex items-center justify-center">
        <Button onClick={() => navigate(configs.routes.choiceJob)}>
          Trở lại
        </Button>
      </div>
    </div>
  );
}

export default GiftNotion;

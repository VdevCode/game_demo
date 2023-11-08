import Button from '@shared/components/Button';
import Charactors from './components/Charactors';
import { useNavigate } from 'react-router-dom';
import configs from '@configs/index';

function ChoiceCharactor() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(configs.routes.play);
  };
  return (
    <div className="w-full h-full flex flex-col gap-10 items-center justify-center">
      <p className="text-xl uppercase">Chọn một bạn ong để bắt đầu</p>
      <Charactors />
      <Button onClick={handleClick} />
    </div>
  );
}

export default ChoiceCharactor;

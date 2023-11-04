import Button from '@shared/components/Button';
import Charactors from './components/Charactors';

function ChoiceCharactor() {
  return (
    <div className="w-full h-full flex flex-col gap-3 items-center justify-center">
      <Charactors />
      <Button />
    </div>
  );
}

export default ChoiceCharactor;

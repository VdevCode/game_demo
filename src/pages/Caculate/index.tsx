import { useState, useEffect } from 'react';
import images from '@shared/assets/images';
import Win from './components/Win';
import Lose from './components/Lose';

function Caculate() {
  const [isWin, setWin] = useState<boolean>(true);
  useEffect(() => {
    setWin(false);
  }, []);
  return (
    <div className="pt-12 flex flex-col h-screen w-screen items-center justify-center">
      <header className="relative h-[25vh] w-full flex items-center justify-center">
        <img
          className="relative z-10 h-[60%] object-contain"
          src={images.nameImage}
          alt=""
        />
        <img
          className="absolute z-0 right-10 bottom-0 w-16 object-contain"
          src={images.BEE_1}
          alt=""
        />
        <img
          className="absolute z-0 left-3 bottom-0 w-[72px] object-contain"
          src={images.BEE_2}
          alt=""
        />
      </header>
      <main className="flex-1">{isWin ? <Win /> : <Lose />}</main>
    </div>
  );
}

export default Caculate;

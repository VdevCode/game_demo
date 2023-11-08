import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import images from '@shared/assets/images';
import { gameChangeBee } from '../../../redux/gameSlice';

interface IChoice {
  default: string;
  choiced: string;
}

function Charactors() {
  const ongs: IChoice[] = [
    {
      default: images.charactor1,
      choiced: images.charactor1_choiced,
    },
    {
      default: images.charactor2,
      choiced: images.charactor2_choiced,
    },
    {
      default: images.charactor3,
      choiced: images.charactor3_choiced,
    },
  ];
  const [selected, setSelected] = useState<number>(0);
  const dispath = useDispatch();
  useEffect(() => {
    dispath(gameChangeBee(selected));
  }, [selected]);
  return (
    <div className="flex gap-4 items-center">
      {ongs.map((item, idx) => (
        <div
          key={idx}
          className="relative w-20 h-24 group"
          onClick={() => setSelected(idx)}
        >
          <img className="w-full h-full" src={images.charactor_box} alt="" />
          <img
            className="absolute bottom-7 w-20 h-20 object-contain group-hover:translate-y-[-10%] transition-all"
            src={selected === idx ? item.choiced : item.default}
            alt=""
          />
        </div>
      ))}
    </div>
  );
}

export default Charactors;

import { useState } from 'react';
import Info from './components/Info';
import Selecters from './components/Selecters';
import { IBirdDefault } from '@shared/interfaces';
import { CHARACTORS } from '@shared/constant';

function ChoiceCharactor() {
  const charactors: IBirdDefault[] = CHARACTORS;
  const [selected, setSelected] = useState<number>(0);
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="aprrearance p-2 w-3/4 h-[90%] bg-[#3A3D5F] rounded-lg">
        <div className="w-full h-full flex items-center justify-center bg-[#F0E7DD] rounded-lg">
          <Selecters
            data={charactors}
            selected={selected}
            setSelected={setSelected}
          />
          <Info item={charactors[selected]} />
        </div>
      </div>
    </div>
  );
}

export default ChoiceCharactor;

import { gameChangeBee } from '@redux/gameSlice';
import { IBirdDefault } from '@src/shared/interfaces';
import { useDispatch } from 'react-redux';

interface SelectersProps {
  data: IBirdDefault[];
  selected: number;
  setSelected: any;
}
function Selecters({ data, selected, setSelected }: SelectersProps) {
  const dispath = useDispatch();
  const handelChangeCharactor = (idx: number) => {
    setSelected(idx);
    dispath(gameChangeBee(idx));
  };
  return (
    <div className="flex-1 h-full p-2">
      <header>
        <h1 className="text-xl font-bold">CHỌN NHÂN VẬT</h1>
        <p className="text-gray-500 text-sm w-full">
          Đây nhân vật sẽ đồng hành cùng bạn trong suốt chuyến đi
        </p>
      </header>
      <main className="my-2 w-full grid grid-cols-3 gap-3">
        {data.map((item, idx) => (
          <div
            key={idx}
            onClick={() => handelChangeCharactor(idx)}
            className={`relative w-full h-20 bg-gray-100 p-2 transition-all duration-300 ${
              selected === idx ? 'opacity-100' : 'opacity-50'
            }`}
          >
            <img
              src={item.imgAvatar}
              className="w-full h-full object-cover bg-[#267b6f] opacity-90"
              alt=""
            />
            <div className="absolute bottom-0 right-0 left-0 w-full flex justify-center">
              <p className="w-3/4 h-fit bg-gray-100 text-center translate-y-1/3">
                {item.name}
              </p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default Selecters;

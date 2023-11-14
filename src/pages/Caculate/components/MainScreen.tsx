import images from '@shared/assets/images';

interface IParameter {
  img: string;
  lable: string;
  value: string | number;
}
function MainScreen() {
  const parameters: IParameter[] = [
    {
      img: images.play_hp,
      lable: 'Số máu còn lại',
      value: 234,
    },
    {
      img: images.play_coins,
      lable: 'Kiến thức thu thập',
      value: 234,
    },
    {
      img: images.play_process,
      lable: 'Kẻ địch đã chạm',
      value: 234,
    },
  ];
  return (
    <div className="h-full w-full flex flex-col gap-5 items-center justify-center bg-black/50">
      <header className="w-full flex flex-col items-center justify-center">
        <p className="text-lg font-medium text-gray-400">TRÒ CHƠI KẾT THÚC</p>
        <div className="flex items-end gap-3 h-fit text-white">
          <p className="text-5xl">340</p>
          <p>/345m</p>
        </div>
      </header>
      <main className="relative p-2 w-[40%] h-fit border-2 border-white/20 rounded-lg">
        <header className="absolute top-0 left-0 right-0 translate-y-[-50%] flex justify-center">
          <h1 className="px-2 w-fit h-12 flex items-center justify-center text-white text-lg">
            THÔNG SỐ
          </h1>
        </header>
        <main className="my-2 flex flex-col gap-3">
          {parameters.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between text-white"
            >
              <p className="text-gray-200">{item.lable} :</p>
              <div className="flex items-center w-fit gap-1">
                <p className="flex-1 font-bold">{item.value}</p>
                <img className="w-8 h-5 object-contain" src={item.img} alt="" />
              </div>
            </div>
          ))}
        </main>
      </main>
      <footer className="flex items-center justify-between w-[40%]">
        <button className="w-fit px-2 h-10 bg-black">CHƠI LẠI</button>
        <button>TIẾP TỤC</button>
      </footer>
    </div>
  );
}

export default MainScreen;

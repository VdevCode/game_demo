import images from '@shared/assets/images';
import SpinWheel from './components/SpinWheel';

function RandomGift() {
  return (
    <div className="appearance pt-2 h-full w-full flex flex-col items-center justify-between">
      <div className="relative flex flex-col items-center justify-center portrait:h-full portrait:w-full landscape:w-full landscape:h-full">
        <img
          className="absolute z-10 portrait:hidden landscape:w-1/5 landscape:bottom-5 landscape:left-5 landscape:translate-x-10"
          src={images.bee8}
          alt=""
        />
        <img
          className="absolute z-10 portrait:w-1/3 portrait:bottom-0 portrait:right-0 portrait:-translate-y-1/3 landscape:hidden"
          src={images.bee7}
          alt=""
        />
        <div className="aprrearance relative portrait:h-fit portrait:w-full landscape:h-[90%] landscape:w-[55%] flex flex-col items-center justify-center">
          <header className="relative z-10 portrait:w-[90%] portrait:h-1/6 landscape:w-1/2 landscape:h-1/5 landscape:scale-125">
            <img
              className="w-full object-contain"
              src={images.text_bee}
              alt=""
            />
          </header>
          <main className="relative flex-1 portrait:w-[90%] landscape:w-[100%] landscape:translate-y-[-5%] landscape:scale-90 landscape:p-2 ">
            <img
              className="absolute z-0 w-full h-full"
              src={images.more_box}
              alt=""
            />
            <div className="relative z-10 landscape:my-2 p-1 flex flex-col w-full h-full items-center justify-center">
              <header className="portrait:h-[20%] landscape:h-[10%] landscape:mb-5 flex items-center justify-center font-bold text-lg">
                VÒNG QUAY MAY MẮN
              </header>
              <main className="py-2 px-[10%] min-h-[40vh] flex-1 w-full landscape:flex landscape:flex-col landscape:items-center landscape:justify-center">
                <SpinWheel />
              </main>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default RandomGift;

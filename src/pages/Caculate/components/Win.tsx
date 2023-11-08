import images from '@shared/assets/images';
import Button from '@shared/components/Button';

function Win() {
  return (
    <div className="flex gap-8 flex-col items-center justify-center">
      <img className="w-4/5" src={images.LOGGER_WIN} alt="" />
      <div className="w-3/5">
        <div className="flex items-center justify-center">
          <div className="relative z-10 w-14">
            <img src={images.hpIcon} className="w-full scale-150" alt="" />
          </div>
          <div className="relative flex-1 translate-x-[-5%]">
            <img src={images.boxIcon} className="relative z-0 w-full" alt="" />
            <div className="absolute z-10 inset-0 py-[7px] w-full h-full">
              <div className="w-1/2 h-full bg-hpColor"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-3/5">
        <div className="flex items-center justify-center">
          <div className="relative z-10 w-14">
            <img src={images.processIcon} className="w-full scale-150" alt="" />
          </div>
          <div className="relative flex-1 translate-x-[-5%]">
            <img src={images.boxIcon} className="relative z-0 w-full" alt="" />
            <div className="absolute z-10 inset-0 py-[7px] w-full h-full">
              <div className="w-1/2 h-full bg-processColor"></div>
            </div>
          </div>
        </div>
      </div>
      <Button type="next" />
    </div>
  );
}

export default Win;

import images from '@shared/assets/images';
import Button from '@shared/components/Button';

function Lose() {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <div className="px-5 flex items-center justify-center">
        <div className="flex flex-col items-center flex-1 gap-3">
          <img className="w-3/4" src={images.LOGGER_OVER} alt="" />
          <img className="w-3/4" src={images.LOGGER_LOSE} alt="" />
          <Button type="playback" />
        </div>
        <img src={images.BEE_7} className="w-1/3" alt="" />
      </div>
    </div>
  );
}

export default Lose;

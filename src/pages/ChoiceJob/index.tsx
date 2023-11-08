import images from '@shared/assets/images';
import { Major } from '@shared/interfaces/enum';
import { useDispatch } from 'react-redux';
import { gameChangeMajor } from '../../redux/gameSlice.js';
import { useNavigate } from 'react-router-dom';
import configs from '@configs/index.js';

function ChoiceJob() {
  const jobs: any[] = [
    { value: Major.IT, img: images.JOBIT },
    { value: Major.GRAPHIC, img: images.JOBGRA },
    { value: Major.GAME, img: images.JOBGAME },
    { value: Major.TRAVEL, img: images.JOBTRAVEL },
    { value: Major.ELECTRIC, img: images.JOBELEC },
  ];

  const dispath = useDispatch();
  const navigate = useNavigate();
  const handleClickMajor = (value: Major) => {
    dispath(gameChangeMajor(value));
    navigate(configs.routes.choiceCharactor);
  };
  return (
    <div className="flex flex-col gap-10 w-3/4 items-center justify-center">
      <img src={images.nameImage} alt="" />
      <div className="flex flex-col justify-center items-center h-[60vh]">
        {jobs.map((item, idx) => (
          <img
            key={idx}
            className="w-3/4"
            src={item.img}
            onClick={() => handleClickMajor(item.value)}
          />
        ))}
      </div>
    </div>
  );
}

export default ChoiceJob;

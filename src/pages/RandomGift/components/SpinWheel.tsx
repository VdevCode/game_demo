import configs from '@configs/index';
import { userLoginSucess } from '@redux/userSlice';
import Button from '@shared/components/Button';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Wheel } from 'react-custom-roulette';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import GiftNotion from './GiftNotion';

interface WheelData {
  option?: string;
  style?: any;
  optionSize?: number;
}
function SpinWheel() {
  const [giftDefault, setGiftDefault] = useState<any[]>([]);
  const [gifts, setGifts] = useState<WheelData[]>([
    { option: 'Quà 1' },
    { option: 'Quà 2', style: { backgroundColor: 'white' } },
    { option: 'Quà 3' },
  ]);
  const colors = ['#ED463E', '#F6AA32', '#4CA450', '#3DA6E0'];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userStore = useSelector((state: any) => state.user);
  const [mustSpin, setMustSpin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isActived, setActived] = useState<boolean>(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [stopped, setStopped] = useState(false);

  useEffect(() => {
    if (JSON.stringify(userStore.user) === '{}') {
      navigate(configs.routes.home);
    }
  }, [userStore]);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const res = await axios.get(configs.api.gift);
      const updateGifts: WheelData[] = [];
      res.data.data.map((item: any, idx: number) => {
        const data: WheelData = {
          option: item.name,
          style: {
            backgroundColor: colors[idx] ? colors[idx] : colors[0],
            textColor: 'white',
          },
        };
        updateGifts.push(data);
      });
      setGifts(updateGifts);
      setGiftDefault(res.data.data);
      setLoading(false);
    };
    getData();
  }, []);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * gifts.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
      setStopped(false);
    }
  };

  useEffect(() => {
    const saveGift = async () => {
      const res = await axios.patch(
        configs.api.addOwnerGift + '/' + giftDefault[prizeNumber]._id,
        {
          phone: userStore.user.phone,
          name: userStore.user.name,
        },
      );
      console.log(res);
      dispatch(userLoginSucess(res.data.data));
      setActived(true);
    };
    if (!isActived && stopped) {
      saveGift();
    }
  }, [isActived, mustSpin]);

  return (
    <>
      {isActived ? (
        <GiftNotion name={giftDefault[prizeNumber].name} />
      ) : (
        <>
          {loading === false && (
            <div className="portrait:h-full portrait:w-full flex flex-col items-center">
              <p className="landscape:absolute landscape:top-[17%]">
                Chúc mừng bạn nhận được một lượt quay
              </p>
              <div className="portrait:scale-75 landscape:h-[50px] landscape:scale-[35%] landscape:-translate-y-[150%]">
                <Wheel
                  radiusLineWidth={1}
                  mustStartSpinning={mustSpin}
                  prizeNumber={prizeNumber}
                  data={gifts}
                  fontSize={25}
                  onStopSpinning={() => {
                    setMustSpin(false);
                    setStopped(true);
                  }}
                />
              </div>
              <div className="absolute bottom-0 right-0 left-0 flex items-center justify-center translate-y-1/2">
                {!isActived && (
                  <Button onClick={handleSpinClick}>Quay ngay</Button>
                )}
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default SpinWheel;

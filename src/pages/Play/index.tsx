import configs from '@configs/index';
import { gameChangeOver } from '@redux/gameSlice';
import images from '@shared/assets/images';
import { BARRIES, CHARACTORS, GIFTS } from '@shared/constant';
import getRamdom from '@shared/utils/getRamdom';
import Button from '@shared/components/Button';
import {
  IBarries,
  IBarryDefalt,
  IBird,
  IBirdDefault,
  IGameStore,
  IGift,
  IGiftDefalt,
  IHelp,
} from '@src/shared/interfaces';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const SCREEN_W = window.innerWidth;
const SCREEN_H = window.screen.availHeight;
const GRAVITY = 0.2;

function Play() {
  const [running, setRunning] = useState<boolean>(false);
  const [started, setStated] = useState<boolean>(false);
  const gameStore: IGameStore = useSelector((state: any) => state.game);
  const navigate = useNavigate();
  const dispath = useDispatch();
  const canvas = useRef<HTMLCanvasElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const startRef = useRef<HTMLDivElement>(null);
  const scoreRef = useRef<HTMLParagraphElement>(null);
  const overRef = useRef<HTMLDivElement>(null);
  const damageRef = useRef<HTMLDivElement>(null);
  const goalRef = useRef<HTMLParagraphElement>(null);

  let score: number = 0;
  let gameOver: boolean = false;
  let gameWin: boolean = false;
  let goal: number = 0;
  let readyStart: boolean = false;

  // BIRD
  const birdSelected: IBirdDefault = CHARACTORS[gameStore.bee];
  const GOAL_TARGET: number = 35;
  let birdDamage: number = 0;
  let verticalX = -3;
  let verticalY = 0;
  const bird: IBird = Object.assign(
    {
      x: -(SCREEN_W / 7),
      y: SCREEN_H / 2,
      isUpping: false,
    },
    birdSelected,
  );
  const spaceBottomWithBird = SCREEN_H - bird.h;

  // BARRIER
  let totalBarries: number = 0;
  const barryDefaults: IBarryDefalt[] = BARRIES;
  const barries: IBarries[] = [];
  let speedBarry: number = -3;

  // GIFT
  const giftDefaults: IGiftDefalt[] = GIFTS[gameStore.major];
  const gifts: IGift[] = [];

  // Draw Canvas
  const draw = (context: CanvasRenderingContext2D) => {
    context.clearRect(0, 0, SCREEN_W, SCREEN_H);

    // Vẽ barries
    for (let i = 0; i < barries.length; i++) {
      let barry: IBarries = barries[i];
      if (barry.ellipsed) {
        barry.x += verticalX;
        barry.y =
          barry.y + 4 < SCREEN_H - barry.h ? barry.y + 4 : SCREEN_H - barry.h;
        barry.img =
          barry.isDetroying && barry.ellipsed
            ? images.ENEMY_EXPLOSION
            : barry.imgDie;
        const timer = setTimeout(() => {
          barries[i].isDetroying = false;
          clearTimeout(timer);
        }, 500);
        const deleted = setTimeout(() => {
          barries.slice(i, 1);
          clearTimeout(deleted);
        }, 1000);
      } else {
        barry.x += speedBarry;
      }
      context.drawImage(barry.img, barry.x, barry.y, barry.w, barry.h);
      if (detectCollision(bird, barry)) {
        birdDamage =
          birdDamage + barry.damage >= bird.hp
            ? bird.hp
            : birdDamage + barry.damage;
        barries[i].damage = 0;
        barries[i].ellipsed = true;
        barries[i].isDetroying = true;
        if (birdDamage >= bird.hp) gameOver = true;
      }
    }
    // Vẽ quà
    for (let i = 0; i < gifts.length; i++) {
      let gift: IGift = gifts[i];
      gift.x += verticalX;
      gift.y = gift.active ? gift.y - 4 : gift.y;
      const giftImage = gift.active ? images.ITEM_ACTIVE : gift.img;
      context.drawImage(giftImage, gift.x, gift.y, gift.w, gift.h);
      if (detectCollision(bird, gift)) {
        score += gift.mark;
        gifts[i].mark = 0;
        gifts[i].active = true;
        const timer = setTimeout(() => {
          gifts.slice(i, 1);
          clearTimeout(timer);
        }, 1000);
      }
    }
    // Vẽ chim
    let imgBird: any = bird.imgDefault;
    if (!gameOver && !gameWin) {
      if (bird.isUpping) imgBird = bird.imgUpping;
      else imgBird = bird.imgDown;
    } else if (gameOver && !gameWin) {
      imgBird = bird.imgDie;
    }
    if (gameWin) imgBird = bird.imgWin;
    context.drawImage(imgBird, bird.x, bird.y, bird.w, bird.h);
  };

  // Create
  const moveBird = () => {
    if (bird.x <= SCREEN_W / 6) {
      bird.x += 2;
      return;
    }
    // Đã thắng
    if (gameWin) {
      bird.x += 5;
      if (bird.x > SCREEN_W + 10) {
        handleEndGame();
        navigate(configs.routes.ranking);
      }
    }
    // Đang chơi
    else {
      if (!gameOver) {
        verticalY =
          bird.isUpping && !gameOver
            ? verticalY - bird.speed
            : verticalY + GRAVITY;
        bird.y += verticalY;
        if (bird.y < 0) {
          bird.y = 0;
          verticalY = 0;
        }
        if (bird.y > spaceBottomWithBird) {
          bird.y = spaceBottomWithBird;
          verticalY = 0;
        }
      } else {
        verticalY += GRAVITY;
        bird.y += verticalY;
        if (bird.y >= SCREEN_H + SCREEN_H * 0.5) {
          handleEndGame();
          navigate(configs.routes.ranking);
        }
      }
    }
  };
  const createBarries = () => {
    if (gameOver || gameWin) return;
    const target: IBarryDefalt =
      barryDefaults[getRamdom(barryDefaults.length - 1)];
    const barry: IBarries = {
      ...target,
      x: SCREEN_W + getRamdom(100),
      y: Math.random() * (SCREEN_H - target.h),
    };
    barries.push(barry);
    totalBarries += 1;
    if (barries[0].x < 0) {
      barries.shift();
    }
  };
  const createGifts = () => {
    if (gameOver || gameWin) return;
    const target: IGiftDefalt =
      giftDefaults[getRamdom(giftDefaults.length - 1)];
    const gift: IGift = {
      ...target,
      x: SCREEN_W,
      y: Math.random() * (SCREEN_H - target.h),
    };
    gifts.push(gift);
    if (gifts[0].x < 0) {
      gifts.shift();
    }
  };
  const createSometingElse = () => {
    if (running) {
      if (scoreRef.current) {
        scoreRef.current.innerHTML = score.toString();
      }
      if (gameOver) {
        if (overRef.current) {
          overRef.current.style.visibility = 'visible';
        }
      }
      if (damageRef.current) {
        damageRef.current.innerHTML = (bird.hp - birdDamage).toString();
      }
      if (goalRef.current) {
        goalRef.current.innerText = goal.toString();
      }
    }
  };

  // Handle
  const handleFlyingStart = () => {
    if (gameOver && !gameWin) return;
    bird.isUpping = true;
    handleInteraction();
  };
  const handleFlyingEnd = () => {
    if (gameOver && !gameWin) return;
    bird.isUpping = false;
  };
  const handleEndGame = () => {
    dispath(
      gameChangeOver({
        win: gameWin,
        hp: bird.hp - birdDamage,
        defaultHp: bird.hp,
        barriesDefault: totalBarries,
        coins: score,
        timer: goal,
      }),
    );
  };

  const handleStart = () => {
    if (!readyStart) {
      readyStart = true;
      if (headerRef.current) {
        headerRef.current.style.display = 'flex';
      }
      setStated(true);
    } else return;
  };

  // Check collision
  function detectCollision(a: IBird, b: IGift | IBarries | IHelp) {
    return (
      a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y
    );
  }

  // Run game
  const gameLoop = () => {
    if (canvas.current) {
      const context: CanvasRenderingContext2D | null =
        canvas.current.getContext('2d');
      if (context) {
        draw(context);
        moveBird();
        createSometingElse();
      }
      requestAnimationFrame(gameLoop);
    }
  };

  // Kích hoạt màn hình
  let audioContext = new (window.AudioContext || window.AudioContext)();
  let gainNode = audioContext.createGain();

  function handleInteraction() {
    // Cập nhật thời gian tương tác
    let lastInteractionTime = performance.now();
    console.log(lastInteractionTime);

    // Phát ra một âm thanh ngắn (có thể là âm thanh không nghe thấy)
    var oscillator = audioContext.createOscillator();
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.001);
  }

  useEffect(() => {
    if (started) {
      gameLoop();
      setRunning(true);
      if (running) {
        setInterval(() => {
          createBarries();
          createGifts();
          speedBarry = speedBarry - 0.2 === -10 ? -10 : speedBarry - 0.2;
          if (gameOver || gameWin) return;
          goal += 2;
          if (goal >= GOAL_TARGET) {
            gameWin = true;
          }
          verticalX = verticalX < -8 ? -8 : verticalX - 0.05;
        }, 2000);
      }
    }
  }, [running, canvas, started]);

  return (
    <div className="relative w-full h-full">
      {/* Header */}
      <div
        ref={headerRef}
        className="absolute z-10 top-1 left-0 right-0 hidden h-fit items-center justify-end"
      >
        <img src={images.text_bee} className="w-28 mx-5" alt="" />
        <div className="relative w-fit h-10">
          <img src={images.play_bar} className="h-full" alt="" />
          <div className="absolute inset-0 w-full h-full flex items-center justify-between px-5 gap-1">
            <div className="flex items-center gap-2">
              <img className="h-5" src={images.play_hp} alt="" />
              <div className="flex items-end">
                <p ref={damageRef} className="text-lg font-bold">
                  0
                </p>
                <p className="text-xs">/{bird.hp}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <img className="h-5" src={images.play_process} alt="" />
              <div className="flex items-end">
                <p ref={goalRef} className="text-lg font-bold">
                  345
                </p>
                <p className="text-xs">/{GOAL_TARGET}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <img className="h-5" src={images.play_coins} alt="" />
              <div className="flex items-end">
                <p ref={scoreRef} className="text-lg font-bold">
                  345
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Welcome */}
      <div
        className="absolute inset-0 z-50 flex flex-col items-center justify-center w-full h-full text-white"
        ref={startRef}
        style={{
          visibility: started ? 'hidden' : 'visible',
        }}
      >
        <p
          id="logger"
          className="mt-2 text-lg lg:text-4xl flex flex-col items-center font-bold"
        >
          <h1 className="text-[#F1541F] font-bold text-2xl">HÃY SẴN SÀNG</h1>
          <h1 className="portrait:w-3/4 portrait:text-center text-black">
            Thu thập các dụng cụ học tập và tránh các chướng ngại vật nhé
          </h1>
          <div className="my-4 text-black animate-bounce">
            <Button onClick={handleStart}>Xuất phát</Button>
          </div>
        </p>
      </div>
      {/* Screen */}
      <div
        className="absolute inset-0 bg-no-repeat "
        style={{
          width: `${SCREEN_W}px`,
          height: `${SCREEN_H}px`,
          backgroundImage: `url(${images.bg_main})`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
        }}
        onTouchStart={handleFlyingStart}
        onTouchEnd={handleFlyingEnd}
      >
        <canvas ref={canvas} width={SCREEN_W} height={SCREEN_H}></canvas>
      </div>
    </div>
  );
}

export default Play;

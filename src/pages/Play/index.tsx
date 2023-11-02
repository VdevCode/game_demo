import { useRef, useEffect, useState } from 'react';
import images from '@shared/assets/images';
import {
  IBarries,
  IBarryDefalt,
  IBird,
  IGift,
  IGiftDefalt,
} from '@src/shared/interfaces';
import getRamdom from '@shared/utils/getRamdom';

function Play() {
  const [running, setRunning] = useState<boolean>(false);
  const [started, setStated] = useState<boolean>(false);
  const canvas = useRef<HTMLCanvasElement>(null);
  const startRef = useRef<HTMLDivElement>(null);
  const scoreRef = useRef<HTMLParagraphElement>(null);
  const overRef = useRef<HTMLDivElement>(null);
  const damageRef = useRef<HTMLDivElement>(null);
  const goalRef = useRef<HTMLParagraphElement>(null);

  let score: number = 0;
  let gameOver: boolean = false;
  let goal: number = 0;

  const SCREEN_W = window.innerWidth;
  const SCREEN_H = window.innerHeight;
  const GRAVITY = 0.08;

  // BIRD
  const GOAL_TARGET = 300;
  const BIRD_W = 120;
  const BIRD_H = 70;
  const BIRD_HP = 250;
  let birdDamage = 0;
  let verticalX = -3;
  let verticalY = 0;
  const bird: IBird = {
    x: SCREEN_W / 8,
    y: SCREEN_H / 2,
    w: BIRD_W,
    h: BIRD_H,
  };

  // BARRIER
  const barryDefaults: IBarryDefalt[] = [
    {
      w: 50,
      h: 50,
      img: images.barries1,
      damage: 10,
    },
    {
      w: 80,
      h: 80,
      img: images.barries2,
      damage: 20,
    },
    {
      w: 90,
      h: 90,
      img: images.barries3,
      damage: 30,
    },
    {
      w: 120,
      h: 120,
      img: images.barries4,
      damage: 40,
    },
    {
      w: 120,
      h: 120,
      img: images.barries5,
      damage: 50,
    },
    {
      w: 140,
      h: 140,
      img: images.barries6,
      damage: 60,
    },
    {
      w: 180,
      h: 160,
      img: images.barries7,
      damage: 70,
    },
  ];
  const barries: IBarries[] = [];

  // GIFT
  const giftDefaults: IGiftDefalt[] = [
    {
      w: 35,
      h: 35,
      img: images.gift1,
      mark: 1,
    },
    {
      w: 35,
      h: 35,
      img: images.gift2,
      mark: 2,
    },
    {
      w: 35,
      h: 35,
      img: images.gift3,
      mark: 3,
    },
  ];
  const gifts: IGift[] = [];

  const draw = (context: CanvasRenderingContext2D) => {
    context.clearRect(0, 0, SCREEN_W, SCREEN_H);
    // Vẽ barries
    for (let i = 0; i < barries.length; i++) {
      let barry: IBarries = barries[i];
      barry.x += verticalX;
      const barryImage = new Image();
      barryImage.src = barry.img;
      context.drawImage(barryImage, barry.x, barry.y, barry.w, barry.h);
      if (detectCollision(bird, barry)) {
        birdDamage += barry.damage;
        barries[i].damage = 0;
        if (birdDamage >= BIRD_HP) gameOver = true;
      }
    }
    // Vẽ quà
    for (let i = 0; i < gifts.length; i++) {
      let gift: IGift = gifts[i];
      gift.x += verticalX;
      const giftImage = new Image();
      giftImage.src = gift.img;
      context.drawImage(giftImage, gift.x, gift.y, gift.w, gift.h);
      if (detectCollision(bird, gift)) {
        score += gift.mark;
        gifts[i].mark = 0;
      }
    }
    // Vẽ chim
    const birdImg = new Image();
    birdImg.src = images.spaceship;
    context.drawImage(birdImg, bird.x, bird.y, BIRD_W, BIRD_H);
  };

  // Create
  const moveBird = () => {
    verticalY += GRAVITY;
    bird.y = Math.max(bird.y + verticalY, 0);
    if (bird.y > SCREEN_H - BIRD_H) bird.y = SCREEN_H - BIRD_H;
  };
  const createBarries = () => {
    if (gameOver) return;
    const target: IBarryDefalt =
      barryDefaults[getRamdom(barryDefaults.length) - 1];
    const barry: IBarries = {
      ...target,
      x: SCREEN_W + getRamdom(100),
      y: Math.random() * (SCREEN_H - target.h),
    };
    barries.push(barry);
    if (barries[0].x < 0) {
      barries.shift();
    }
  };
  const createGifts = () => {
    if (gameOver) return;
    const target: IGiftDefalt =
      giftDefaults[getRamdom(giftDefaults.length) - 1];
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
    if (scoreRef.current) {
      scoreRef.current.innerHTML = score.toString();
    }
    if (gameOver) {
      if (overRef.current) {
        overRef.current.style.visibility = 'visible';
      }
    }
    if (damageRef.current) {
      damageRef.current.style.width =
        (((BIRD_HP - birdDamage) / BIRD_HP) * 100).toString() + '%';
    }
    if (goalRef.current) {
      goalRef.current.innerHTML = goal.toString();
    }
  };

  // Handle
  const handleFlying = () => {
    if (gameOver) return;
    verticalY = -2;
  };
  const handleStart = () => {
    const startLogs = ['Ready', '3', '2', '1', 'Go...'];
    let i = 0;
    const logger = document.querySelector('#logger');
    logger?.classList.add('animate-ping');
    if (logger) {
      const updateLogger = () => {
        if (i < startLogs.length) {
          logger.innerHTML = startLogs[i];
          setTimeout(updateLogger, 1000);
        } else setStated(true);
        i++;
      };
      updateLogger();
    }
  };

  // Check collision
  function detectCollision(a: IBird, b: IGift | IBarries) {
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

  useEffect(() => {
    if (started) {
      gameLoop();
      setRunning(true);
      if (running) {
        setInterval(() => {
          verticalX = verticalX < -8 ? -8 : verticalX - 0.15;
        }, 10000);
        setInterval(createBarries, 3500);
        setInterval(createGifts, 2000);
        setInterval(() => {
          goal += 1;
        }, 1000);
      }
    }
  }, [running, canvas, started]);

  return (
    <div
      style={{
        width: `${SCREEN_W}px`,
        height: `${SCREEN_H}px`,
      }}
      className="relative"
    >
      <div className="absolute p-2 z-10 left-0 right-0 h-fit flex items-center justify-center text-white">
        <div className="flex gap-1 items-center">
          <img className="h-8 w-8 object-contain" src={images.heart} alt="" />
          <div className="w-20 h-2 border border-gray-500">
            <div className="w-full h-full bg-red-500" ref={damageRef} />
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <p ref={goalRef} className="text-5xl text-center">
            0
          </p>
          <p>/{GOAL_TARGET}</p>
        </div>
        <div className="w-28 flex items-center justify-end gap-1">
          <p ref={scoreRef} className="flex-1 text-3xl text-right">
            0
          </p>
          <img className="h-8 w-8 object-contain" src={images.gift1} alt="" />
        </div>
      </div>
      <div
        className="absolute inset-0 z-50 flex items-center justify-center w-full h-full bg-black/80 text-white "
        ref={overRef}
        style={{
          visibility: 'hidden',
        }}
      >
        <div className="text-5xl animate-bounce">Game Over</div>
      </div>
      <div
        className="absolute inset-0 z-50 flex items-center justify-center w-full h-full bg-black/50 text-white"
        ref={startRef}
        style={{
          visibility: started ? 'hidden' : 'visible',
        }}
        onClick={handleStart}
      >
        <div id="logger" className="text-5xl">
          Click to start
        </div>
      </div>
      <div
        className="absolute inset-0 bg-no-repeat "
        style={{
          width: `${SCREEN_W}px`,
          height: `${SCREEN_H}px`,
          backgroundImage: `url(${images.bgVer})`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
        }}
        onClick={handleFlying}
      >
        <canvas ref={canvas} width={SCREEN_W} height={SCREEN_H}></canvas>
      </div>
    </div>
  );
}

export default Play;

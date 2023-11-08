import configs from '@configs/index';
import images from '@shared/assets/images';
import { BARRIES } from '@shared/resources/Barries';
import { GIFTIT } from '@shared/resources/Gifts';
import { HELPS, typeHepls } from '@shared/resources/Helps';
import getRamdom from '@shared/utils/getRamdom';
import {
  IBackGround,
  IBarries,
  IBarryDefalt,
  IBird,
  IGift,
  IGiftDefalt,
  IHelp,
  IHelpDefalt,
} from '@src/shared/interfaces';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Play() {
  const [running, setRunning] = useState<boolean>(false);
  const [started, setStated] = useState<boolean>(false);
  const [loadingBar, setLoadingBar] = useState<string[]>(
    Array(8).fill(images.loadingMark),
  );
  const navigate = useNavigate();
  const canvas = useRef<HTMLCanvasElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const startRef = useRef<HTMLDivElement>(null);
  const scoreRef = useRef<HTMLParagraphElement>(null);
  const overRef = useRef<HTMLDivElement>(null);
  const damageRef = useRef<HTMLDivElement>(null);
  const goalRef = useRef<HTMLParagraphElement>(null);
  const helpRef = useRef<HTMLDivElement>(null);

  let score: number = 0;
  let gameOver: boolean = false;
  let gameWin: boolean = false;
  let goal: number = 0;

  const SCREEN_W = window.innerWidth;
  const SCREEN_H = window.innerHeight;
  const GRAVITY = 0.3;

  // BIRD
  const GOAL_TARGET: number = 10;
  const BIRD_W: number = 60;
  const BIRD_H: number = 40;
  const BIRD_HP: number = 100;
  let birdDamage: number = 0;
  let verticalX = -3;
  let verticalY = 0;
  const bird: IBird = {
    x: SCREEN_W / 7,
    y: SCREEN_H / 2,
    w: BIRD_W,
    h: BIRD_H,
    isUpping: false,
    imgDefault: images.TEST_NORMAL,
    imgUpping: images.TEST_UP,
    imgDown: images.TEST_DOWN,
    imgDie: images.TEST_DIE,
    imgWin: images.TEST_WIN,
  };

  // BACKGROUND
  const bgDefauls: IBackGround[] = [
    { x: 0, y: 0, img: images.BG_IMG, using: false },
    { x: SCREEN_W, y: 0, img: images.BG_IMG, using: false },
    { x: SCREEN_W * 2, y: 0, img: images.BG_IMG, using: false },
  ];
  const backgrounds: IBackGround[] = [...bgDefauls.slice(0, 3)];
  let indexNowBg: number = backgrounds.length - 1;

  // BARRIER
  const barryDefaults: IBarryDefalt[] = BARRIES;
  const barries: IBarries[] = [];
  let speedBarry: number = -3;

  // GIFT
  const giftDefaults: IGiftDefalt[] = GIFTIT;
  const gifts: IGift[] = [];

  // Help
  const helpDefaults: IHelpDefalt[] = HELPS;
  const helps: IHelp[] = [];

  // Draw Canvas
  const draw = (context: CanvasRenderingContext2D) => {
    context.clearRect(0, 0, SCREEN_W, SCREEN_H);
    // Vẽ background
    for (let i = 0; i < backgrounds.length; i++) {
      const bg: IBackGround = backgrounds[i];
      bg.x -= 2;
      context.drawImage(bg.img, bg.x, bg.y, SCREEN_W, SCREEN_H);
      if (bg.x < 0 && !bg.using) {
        indexNowBg =
          indexNowBg + 1 >= bgDefauls.length - 1 ? 0 : indexNowBg + 1;
        backgrounds[i].using = true;
        backgrounds.push({
          x: SCREEN_W * 2,
          y: 0,
          img: bgDefauls[indexNowBg].img,
          using: false,
        });
        backgrounds.unshift();
      }
    }
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
          birdDamage + barry.damage >= BIRD_HP
            ? BIRD_HP
            : birdDamage + barry.damage;
        barries[i].damage = 0;
        barries[i].ellipsed = true;
        barries[i].isDetroying = true;
        if (birdDamage >= BIRD_HP) gameOver = true;
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
    // Vẽ Help
    for (let i = 0; i < helps.length; i++) {
      let help: IHelp = helps[i];
      help.x = help.isActive ? help.x - 5 : help.x + verticalX;
      help.y = help.isActive ? help.y - 2 : help.y;
      context.drawImage(help.img, help.x, help.y, help.w, help.h);
      if (detectCollision(bird, help) && !help.isActive) {
        helps[i].isActive = true;
        // Render
        if (helpRef.current) {
          helpRef.current.style.visibility = 'visible';
          const timer = setTimeout(() => {
            if (helpRef.current) {
              helpRef.current.style.visibility = 'hidden';
              clearTimeout(timer);
            }
          }, 2000);
        }
        const img: HTMLImageElement | null =
          document.querySelector('#img-help');
        if (img) img.src = help.imgNotify;
        // Logic
        switch (help.type) {
          case typeHepls.BOOTS: {
            let oldSpeed = verticalX;
            verticalX = -5;
            const timer = setTimeout(() => {
              verticalX = oldSpeed;
              clearTimeout(timer);
            }, 3000);
            break;
          }
          case typeHepls.HP:
            birdDamage = birdDamage === 0 ? 0 : birdDamage - 10;
            break;
          case typeHepls.SLOW: {
            let oldSpeed = verticalX;
            let oldSpeedBarry = speedBarry;
            verticalX = -2;
            speedBarry += 0.5;
            const timer = setTimeout(() => {
              verticalX = oldSpeed;
              speedBarry = oldSpeedBarry;
              clearTimeout(timer);
            }, 3000);
            break;
          }
          default:
            break;
        }
        setTimeout(() => {
          helps.slice(i, 1);
        }, 500);
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
    context.drawImage(imgBird, bird.x, bird.y, BIRD_W, BIRD_H);
  };

  // Create
  const moveBird = () => {
    // Đã thắng
    if (gameWin) {
      bird.x += 5;
      if (bird.x > SCREEN_W + 10) navigate(configs.routes.caculate);
    }
    // Đang chơi
    else {
      if (!gameOver) {
        verticalY =
          bird.isUpping && !gameOver ? verticalY - 0.5 : verticalY + GRAVITY;
        bird.y = Math.min(Math.max(bird.y + verticalY, 0), SCREEN_H - BIRD_H);
      } else {
        verticalY += GRAVITY;
        bird.y += verticalY;
        if (bird.y >= SCREEN_H) {
          navigate(configs.routes.caculate);
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
  const createHelps = () => {
    if (gameOver || gameWin) return;
    const target: IHelpDefalt =
      helpDefaults[getRamdom(giftDefaults.length - 1)];
    const help: IHelp = {
      ...target,
      x: SCREEN_W,
      y: Math.random() * (SCREEN_H - target.h),
    };
    helps.push(help);
    if (helps[0].x < 0) {
      helps.shift();
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
        damageRef.current.style.width =
          (((BIRD_HP - birdDamage) / BIRD_HP) * 100).toString() + '%';
      }
      if (goalRef.current) {
        goalRef.current.style.width =
          ((goal / GOAL_TARGET) * 100).toString() + '%';
      }
    }
  };

  // Handle
  const handleFlyingStart = () => {
    if (gameOver && !gameWin) return;
    bird.isUpping = true;
  };
  const handleFlyingEnd = () => {
    if (gameOver && !gameWin) return;
    bird.isUpping = false;
  };
  let readyStart: boolean = false;
  const handleStart = () => {
    if (!readyStart) {
      readyStart = true;
      let i: number = 0;
      const timer = setInterval(() => {
        const loading: string[] = [...loadingBar];
        loading.splice(0, i);
        loading.unshift(...Array(i).fill(images.loadingProcess));
        setLoadingBar(loading);
        i += 1;
        if (i === 10) {
          if (headerRef.current) {
            headerRef.current.style.display = 'flex';
          }
          setStated(true);
          clearInterval(timer);
        }
      }, 500);
    } else {
      return;
    }
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
  useEffect(() => {
    if (started) {
      gameLoop();
      setRunning(true);
      if (running) {
        setInterval(() => {
          verticalX = verticalX < -8 ? -8 : verticalX - 0.15;
        }, 10000);
        setInterval(createBarries, 2500);
        setInterval(createGifts, 2000);
        setInterval(createHelps, 10000);
        setInterval(() => {
          speedBarry = speedBarry - 0.5 === -14 ? -14 : speedBarry - 0.5;
        }, 3500);
        setInterval(() => {
          if (gameOver || gameWin) return;
          goal += 1;
          if (goal >= GOAL_TARGET) {
            gameWin = true;
          }
        }, 1000);
      }
    }
  }, [running, canvas, started]);

  return (
    <div className="relative w-full h-full">
      {/* Header */}
      <div
        ref={headerRef}
        className="absolute z-10 top-1 left-0 right-0 overflow-hidden hidden items-center flex-col"
      >
        <img
          className="h-20 lg:h-28 object-contain"
          src={images.nameImage}
          alt=""
        />
        <div className="my-2 px-1 w-full flex items-center justify-between">
          <div className="flex items-center justify-center flex-1 h-10">
            <div className="relative z-10 w-7">
              <img src={images.hpIcon} className="w-full scale-150" alt="" />
            </div>
            <div className="relative flex-1 translate-x-[-5%]">
              <img
                src={images.boxIcon}
                className="relative z-0 w-full"
                alt=""
              />
              <div className="absolute z-10 inset-0 py-[4.5px] pr-1 w-full h-full">
                <div ref={damageRef} className="w-full h-full bg-hpColor"></div>
              </div>
            </div>
          </div>
          <div className="w-32 flex items-center justify-center gap-1">
            <img
              className="w-6 h-6 lg:h-10 lg:w-10 object-contain"
              src={images.coinIcon}
              alt=""
            />
            <p ref={scoreRef} className="text-2xl lg:text-5xl">
              0
            </p>
          </div>
          <div className="flex items-center justify-center flex-1 h-10">
            <div className="relative z-10 w-7">
              <img
                src={images.processIcon}
                className="w-full scale-150"
                alt=""
              />
            </div>
            <div className="relative flex-1 translate-x-[-5%]">
              <img
                src={images.boxIcon}
                className="relative z-0 w-full"
                alt=""
              />
              <div className="absolute z-10 inset-0 py-[4.5px] pr-1 w-full h-full">
                <div
                  ref={goalRef}
                  className="w-1/2 h-full bg-processColor"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div
          ref={helpRef}
          className="invisible flex items-center justify-center w-14 h-14 bg-white/20 animate-bounce rounded-full"
        >
          <img id="img-help" src={images.help1} className="w-8 h-8" alt="" />
        </div>
      </div>
      {/* Welcome */}
      <div
        className="absolute inset-0 z-50 flex flex-col items-center justify-center w-full h-full text-white"
        ref={startRef}
        style={{
          visibility: started ? 'hidden' : 'visible',
        }}
        onClick={handleStart}
      >
        <div className="relative w-[60%] lg:w-72">
          <img
            className="w-full h-full object-cover"
            src={images.loadingBox}
            alt=""
          />
          <div className="absolute bottom-2 left-0 right-0 w-full h-8 flex items-end justify-center">
            <div className="px-1 w-[90%] h-full flex items-center justify-between bg-[#552E0F] rounded-md">
              <div className="w-full flex items-center justify-between">
                {loadingBar.map((item, idx) => (
                  <img key={idx} className="w-5 h-6" src={item} alt="" />
                ))}
              </div>
            </div>
          </div>
        </div>
        <p
          id="logger"
          className="mt-2 text-[#F1541F] text-lg lg:text-4xl font-bold animate-bounce"
        >
          READY...GO
        </p>
      </div>
      {/* Screen */}
      <div
        className="absolute inset-0 bg-no-repeat "
        style={{
          width: `${SCREEN_W}px`,
          height: `${SCREEN_H}px`,
          backgroundImage: `url(${images.BG})`,
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

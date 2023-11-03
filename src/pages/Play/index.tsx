import images from '@shared/assets/images';
import getRamdom from '@shared/utils/getRamdom';
import {
  IBarries,
  IBarryDefalt,
  IBird,
  IGift,
  IGiftDefalt,
  IHelp,
  IHelpDefalt,
} from '@src/shared/interfaces';
import { BARRIES } from '@shared/resources/Barries';
import { GIFTIT } from '@shared/resources/Gifts';
import { HELPS, typeHepls } from '@shared/resources/Helps';
import { useEffect, useRef, useState } from 'react';

function Play() {
  const [running, setRunning] = useState<boolean>(false);
  const [started, setStated] = useState<boolean>(false);
  const canvas = useRef<HTMLCanvasElement>(null);
  const startRef = useRef<HTMLDivElement>(null);
  const scoreRef = useRef<HTMLParagraphElement>(null);
  const overRef = useRef<HTMLDivElement>(null);
  const damageRef = useRef<HTMLDivElement>(null);
  const goalRef = useRef<HTMLParagraphElement>(null);
  const helpRef = useRef<HTMLDivElement>(null);

  let score: number = 0;
  let gameOver: boolean = false;
  let goal: number = 0;

  const SCREEN_W = window.innerWidth;
  const SCREEN_H = window.innerHeight;
  const GRAVITY = 0.08;

  // BIRD
  const GOAL_TARGET: number = 300;
  const BIRD_W: number = 120;
  const BIRD_H: number = 70;
  const BIRD_HP: number = 250;
  let birdDamage: number = 0;
  let verticalX = -3;
  let verticalY = 0;
  const bird: IBird = {
    x: SCREEN_W / 7,
    y: SCREEN_H / 2,
    w: BIRD_W,
    h: BIRD_H,
  };

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
    // Vẽ barries
    for (let i = 0; i < barries.length; i++) {
      let barry: IBarries = barries[i];
      if (barry.ellipsed) {
        barry.x += verticalX;
        barry.y =
          barry.y + 2 < SCREEN_H - barry.h ? barry.y + 2 : SCREEN_H - barry.h;
        barry.img =
          barry.isDetroying && barry.ellipsed ? images.boom : barry.imgDie;
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
      const barryImage = new Image();
      barryImage.src = barry.img;
      context.drawImage(barryImage, barry.x, barry.y, barry.w, barry.h);
      if (detectCollision(bird, barry)) {
        birdDamage += barry.damage;
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
      gift.y = gift.active ? gift.y - 2 : gift.y;
      const giftImage = new Image();
      giftImage.src = gift.active ? images.gift_active : gift.img;
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
      const helpImage = new Image();
      helpImage.src = help.img;
      context.drawImage(helpImage, help.x, help.y, help.w, help.h);
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
        const name: HTMLParagraphElement | null =
          document.querySelector('#name-help');
        if (img) img.src = help.img;
        if (name) name.innerHTML = help.type;
        // Logic
        switch (help.type) {
          case typeHepls.BOOTS:
            let oldSpeed = verticalX;
            verticalX = -5;
            const timer = setTimeout(() => {
              verticalX = oldSpeed;
              clearTimeout(timer);
            }, 3000);
            break;
          case typeHepls.HP:
            birdDamage = birdDamage === 0 ? 0 : birdDamage - 10;
            break;
          default:
            break;
        }
        setTimeout(() => {
          helps.slice(i, 1);
        }, 500);
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
    if (gameOver) return;
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
    if (gameOver) return;
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
    if (i > 0) return;
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
          speedBarry = speedBarry - 0.75 === -14 ? -14 : speedBarry - 0.5;
        }, 3500);
        setInterval(() => {
          if (gameOver) return;
          goal += 1;
        }, 1000);
      }
    }
  }, [running, canvas, started]);

  useEffect(() => {
    console.log(verticalX);
  }, [verticalX]);

  return (
    <div
      style={{
        width: `${SCREEN_W}px`,
        height: `${SCREEN_H}px`,
      }}
      className="relative"
    >
      {/* Header */}
      <div className="absolute p-2 z-10 top-5 left-0 right-0 h-16 flex items-center justify-center text-white">
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
      {/* Welcome */}
      <div
        className="absolute inset-0 z-50 flex items-center justify-center w-full h-full bg-black/80 text-white "
        ref={overRef}
        style={{
          visibility: 'hidden',
        }}
      >
        <div className="text-5xl animate-bounce">Game Over</div>
      </div>
      {/* Over */}
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
      {/* Boost */}
      <div
        ref={helpRef}
        style={{
          visibility: 'hidden',
        }}
        className="p-1 absolute z-10 top-32 right-1 w-fit h-14 flex items-center bg-black/50 border-[3px] border-yellow-300 rounded-xl animate-ping"
      >
        <img
          id="img-help"
          className="w-10 h-10 object-contain"
          src={images.help2}
          alt=""
        />
        <p id="name-help" className="text-4xl text-white">
          BOOST!!!
        </p>
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

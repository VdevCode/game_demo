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
  const canvas = useRef<HTMLCanvasElement>(null);

  let score: number = 0;
  let gameOver: boolean = false;

  const SCREEN_W = window.innerWidth;
  const SCREEN_H = window.innerHeight;
  const GRAVITY = 0.08;

  // BIRD
  const BIRD_W = 120;
  const BIRD_H = 70;
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
    },
    {
      w: 80,
      h: 80,
      img: images.barries2,
    },
    {
      w: 90,
      h: 90,
      img: images.barries3,
    },
    {
      w: 120,
      h: 120,
      img: images.barries4,
    },
    {
      w: 120,
      h: 120,
      img: images.barries5,
    },
    {
      w: 140,
      h: 140,
      img: images.barries6,
    },
    {
      w: 180,
      h: 160,
      img: images.barries7,
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
        gameOver = true;
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
    // Vẽ điểm
    context.fillStyle = 'white';
    context.font = '45px sans-serif';
    context.fillText(score.toString(), SCREEN_W * 0.47, 50);
    // Vẽ Over
    if (gameOver) {
      context.fillStyle = 'white';
      context.font = '45px sans-serif';
      context.fillText('Game Over', SCREEN_W * 0.4, SCREEN_H * 0.5);
    }
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

  // BirdFlying
  const handleFlying = () => {
    if (gameOver) return;
    verticalY = -2;
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
      requestAnimationFrame(gameLoop);
      const context: CanvasRenderingContext2D | null =
        canvas.current.getContext('2d');
      if (context) {
        draw(context);
        moveBird();
      }
    }
  };
  useEffect(() => {
    gameLoop();
    setRunning(true);
    if (running) {
      setInterval(() => {
        verticalX = verticalX < -8 ? -8 : verticalX - 0.15;
      }, 10000);
      setInterval(createBarries, 3500);
      setInterval(createGifts, 2000);
    }
  }, [running]);

  return (
    <div
      className="relative bg-no-repeat "
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
  );
}

export default Play;

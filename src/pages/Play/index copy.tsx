import { useRef, useEffect } from 'react';
import images from '@shared/assets/images';
import { IBarries, IBarryDefalt, IBird } from '@src/shared/interfaces';
import getRamdom from '@shared/utils/getRamdom';

function Play() {
  const SCREEN_W = window.innerWidth;
  const SCREEN_H = window.innerHeight;
  const GRAVITY = 0.08;

  // BIRD
  const BIRD_W = 33;
  const BIRD_H = 20;
  let verticalX = -2;
  let verticalY = 0;
  const bird: IBird = {
    x: SCREEN_W / 8,
    y: SCREEN_H / 2,
  };

  // BARRIER
  const barryDefaults: IBarryDefalt[] = [
    {
      w: 33,
      h: 20,
      img: images.bird,
    },
    {
      w: 33,
      h: 20,
      img: images.bird,
    },
    {
      w: 33,
      h: 20,
      img: images.bird,
    },
  ];
  const barries: IBarries[] = [];
  const canvas = useRef<HTMLCanvasElement>(null);

  const draw = (context: CanvasRenderingContext2D) => {
    context.clearRect(0, 0, SCREEN_W, SCREEN_H);
    // Vẽ chim
    const birdImg = new Image();
    birdImg.src = images.bird;
    context.drawImage(birdImg, bird.x, bird.y, BIRD_W, BIRD_H);
    // Vẽ barries
    for (let i = 0; i < barries.length; i++) {
      let barry: IBarries = barries[i];
      barry.x += verticalX;
      const barryImage = new Image();
      barryImage.src = barry.img;
      context.drawImage(barryImage, barry.x, barry.y, barry.w, barry.h);
    }
  };

  const moveBird = () => {
    verticalY += GRAVITY;
    bird.y = Math.max(bird.y + verticalY, 0);
    if (bird.y > SCREEN_H - 30) bird.y = SCREEN_H - 30;
  };
  const moveBarries = () => {
    const openingPage = SCREEN_H / 3.5;
    const barries1: IBarries = {
      ...barryDefaults[getRamdom(barryDefaults.length)],
      x: SCREEN_W,
      y: SCREEN_H / 4 + Math.random() * (SCREEN_H / 2),
    };
    barries.push(barries1);
    //clear pipes
    console.log(barries.length);
    while (barries.length > 0 && barries[0].x < 0) {
      barries.shift();
    }
  };

  // BirdFlying
  const handleFlying = () => {
    verticalY = -2;
  };

  const gameLoop = () => {
    if (canvas.current) {
      const context: CanvasRenderingContext2D | null =
        canvas.current.getContext('2d');
      if (context) {
        draw(context);
        moveBird();
      }
      requestAnimationFrame(gameLoop); // Gọi lại vòng lặp
    }
  };

  useEffect(() => {
    gameLoop(); // Bắt đầu vòng lặp game
    setInterval(moveBarries, 1000);
  }, []);

  return (
    <div
      className="bg-no-repeat "
      style={{
        width: `${SCREEN_W}px`,
        height: `${SCREEN_H}px`,
        backgroundImage: `url(${images.bg})`,
        backgroundSize: 'cover',
      }}
      onClick={handleFlying}
    >
      <canvas ref={canvas} width={SCREEN_W} height={SCREEN_H}></canvas>
    </div>
  );
}

export default Play;

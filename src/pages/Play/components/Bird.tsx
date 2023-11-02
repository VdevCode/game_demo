import images from '@shared/assets/images';

interface BirdProps {
  x: number;
  y: number;
  w: number;
  h: number;
}
function Bird({ x, y, w, h }: BirdProps) {
  return (
    <div
      style={{
        top: y + 'px',
        left: x + 'px',
        width: w + 'px',
        height: h + 'px',
        backgroundImage: `url(${images.bird})`,
      }}
      className="absolute z-[999] bg-no-repeat border"
    />
  );
}

export default Bird;

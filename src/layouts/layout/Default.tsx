import images from '@shared/assets/images';
import { ReactNode } from 'react';

interface DefaultProps {
  children: ReactNode;
}

function Default({ children }: DefaultProps) {
  return (
    <div
      style={{
        backgroundImage: `url(${images.bg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      className="h-screen w-screen flex items-center justify-center"
    >
      {children}
    </div>
  );
}

export default Default;

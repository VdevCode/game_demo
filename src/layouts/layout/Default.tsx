import images from '@shared/assets/images';
import { ReactNode, useRef, useState, useEffect } from 'react';

interface DefaultProps {
  children: ReactNode;
}

function Default({ children }: DefaultProps) {
  const screenRef = useRef<any>();
  const [isFullScreen, setFullScreen] = useState<boolean>(false);
  const handelFullScreen = () => {
    if (screenRef.current) {
      if (document.fullscreenEnabled) {
        if (!document.fullscreenElement) {
          screenRef.current
            .requestFullscreen()
            .then(() => {
              setFullScreen(true);
            })
            .catch((err: any) => {
              console.error(
                'Error attempting to enable fullscreen:',
                err.message,
              );
            });
        } else {
        }
      } else {
        console.error('Fullscreen API is not supported in this browser.');
      }
    }
  };
  useEffect(() => {
    if (screenRef.current) {
      if (!isFullScreen)
        screenRef.current.addEventListener('click', handelFullScreen);
      else screenRef.current.removeEventListener('click', handelFullScreen);
    }
  }, [isFullScreen]);
  return (
    <div
      ref={screenRef}
      style={{
        backgroundImage: `url(${images.bg_main})`,
        backgroundPosition: 'bottom',
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

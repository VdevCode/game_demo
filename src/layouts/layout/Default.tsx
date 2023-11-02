import { ReactNode } from 'react';

interface DefaultProps {
  children: ReactNode;
}

function Default({ children }: DefaultProps) {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      {children}
    </div>
  );
}

export default Default;

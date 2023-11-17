import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import images from '@shared/assets/images';

interface ButtonProps {
  to?: string;
  href?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  disabled?: boolean;
  children: any;
}
function Button({
  children,
  to,
  href,
  onClick,
  disabled,
  ...passProps
}: ButtonProps) {
  // Props
  const props: any = {
    onClick,
    ...passProps,
  };

  // Remove event listener when btn is disabled
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }

  // Element
  let Comp: React.ElementType = 'button';
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }

  return (
    <Comp {...props} className="relative landscape:h-16 portrait:h-14">
      <img
        className="w-full h-full object-contain"
        src={images.btn_default}
        alt=""
      />
      <div className="absolute z-10 inset-0 flex items-center justify-start text-xs lg:text-base">
        <p className="portrait:ml-[40%] portrait:font-bold portrait:text-sm landscape:ml-[40%] landscape:font-semibold landscape:text-sm uppercase">{children}</p>
      </div>
    </Comp>
  );
}

export default Button;

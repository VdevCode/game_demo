import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import images from '../assets/images';

interface ButtonProps {
  type?: 'primary' | 'secondary' | 'third' | 'four' | 'danger';
  to?: string;
  href?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  disabled?: boolean;
}
function Button({
  type,
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
    <Comp {...passProps} className="h-14">
      <img
        className="w-full h-full object-contain"
        src={images.nextBtn}
        alt=""
      />
    </Comp>
  );
}

export default Button;

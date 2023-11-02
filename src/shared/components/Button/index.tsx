import { MouseEvent, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  type?: 'primary' | 'secondary' | 'third' | 'four' | 'five' | 'danger';
  size?: 'sm' | 'lg';
  rounded?: 'xs' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
  width?: 'full' | 'fit' | string;
  to?: string;
  href?: string;
  iconOnly?: Boolean;
  loading?: Boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  disabled?: boolean;
}
function Button({
  type,
  size,
  rounded,
  width,
  to,
  href,
  iconOnly,
  loading,
  leftIcon,
  rightIcon,
  children,
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

  // Size
  let butSize;
  switch (size) {
    case 'sm':
      butSize = 'h-8';
      break;
    case 'lg':
      butSize = 'h-12';
      break;
    default:
      butSize = 'h-10';
      break;
  }

  let butWidth: string = ' ' + width;
  switch (width) {
    case 'full':
      butWidth += ' w-full ';
      break;
    case 'fit':
      butWidth += ' w-fit ';
      break;
    default:
      break;
  }

  // Icon Only
  let butIcon = ' ';
  if (iconOnly) {
    switch (size) {
      case 'sm':
        butIcon += 'w-8 rounded-full justify-center';
        break;
      case 'lg':
        butIcon += 'w-12 rounded-full justify-center';
        break;
      default:
        butIcon += 'w-10 rounded-full justify-center';
        break;
    }
  }

  // Type
  let butType = ' ';
  switch (type) {
    case 'primary':
      butType += 'bg-main text-white hover:opacity-95';
      break;
    case 'secondary':
      butType +=
        'dark:text-white bg-lightBg dark:bg-darkSecond hover:bg-lightSecond dark:hover:bg-darkThird border dark:border-transparent';
      break;
    case 'third':
      butType += 'bg-lightSecond/50 dark:bg-darkThird dark:text-white';
      break;
    case 'four':
      butType +=
        'bg-black text-white dark:bg-white dark:text-black hover:bg-darkThird dark:hover:bg-lightThird';
      break;
    case 'five':
      butType +=
        'dark:text-white bg-lightSecond/50 dark:bg-darkSecond/70 hover:bg-lightSecond dark:hover:bg-darkSecond';
      break;
    default:
      butType +=
        'text-text  dark:text-white hover:text-black dark:hover:text-gray-200';
      break;
  }

  // Rounded
  let butRounded = ' rounded-' + rounded;

  return (
    <div>
      <Comp
        className={
          'py-1 px-3 flex items-center justify-center cursor-pointer transition-all ' +
          butSize +
          butIcon +
          butType +
          butRounded +
          butWidth
        }
        {...props}
      >
        {loading && (
          <p className="w-8  text-sm ">
            <i className="fa-thin fa-circle-notch fa-spin"></i>
          </p>
        )}
        {leftIcon && !loading && (
          <span className="mr-2 text-xs">{leftIcon}</span>
        )}
        <p className={iconOnly ? 'text-base' : 'text-sm'}>{children}</p>
        {rightIcon && <span className="ml-2 text-xs">{rightIcon}</span>}
      </Comp>
    </div>
  );
}

export default Button;

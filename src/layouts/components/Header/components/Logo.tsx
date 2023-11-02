import { Link } from 'react-router-dom';
import images from '@shared/assets/images';

function Logo() {
  return (
    <Link to={'/'} className="h-8 w-fit">
      <img src={images.logo} alt="" className="w-full h-full object-cover" />
    </Link>
  );
}

export default Logo;

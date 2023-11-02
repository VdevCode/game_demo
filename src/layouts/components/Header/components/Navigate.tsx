import configs from '@configs/index';
import { Link } from 'react-router-dom';

function Navigate() {
  const navList: { to: string; title: string }[] = [
    {
      to: configs.routes.home,
      title: 'Home',
    },
    {
      to: configs.routes.home,
      title: 'Design',
    },
    {
      to: configs.routes.home,
      title: 'Pricings',
    },
    {
      to: configs.routes.home,
      title: 'Jobs',
    },
    {
      to: configs.routes.home,
      title: 'Become a author',
    },
  ];
  return (
    <nav className="flex-1 flex items-center gap-5">
      {navList.map((item, idx) => (
        <Link
          to={item.to}
          key={idx}
          className="text-[14px] text-gray-500 hover:text-black dark:hover:text-white transition-all"
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}

export default Navigate;

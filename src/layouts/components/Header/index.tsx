import Logger from './components/Logger';
import Logo from './components/Logo';
import Navigate from './components/Navigate';
import Search from './components/Search';

function Header() {
  return (
    <div className="px-2 lg:px-16 flex gap-5 items-center h-20 border">
      <Logo />
      <Navigate />
      <Search />
      <Logger />
    </div>
  );
}

export default Header;

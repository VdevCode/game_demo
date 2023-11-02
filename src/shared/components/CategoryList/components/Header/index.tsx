import Button from '@shared/components/Button';
import { ILanguage } from '@src/shared/interfaces';

interface HeaderProps {
  title?: ILanguage;
  sub?: ILanguage;
  to?: string;
}
function Header({ title, sub, to }: HeaderProps) {
  return (
    <header className="mb-3 flex gap-10 items-center justify-between">
      <div className="flex-1 max-w-[80%]">
        <h3 className="line-clamp-1 lg:text-2xl font-semibold dark:text-white">
          {title?.vi}
        </h3>
        <p className="line-clamp-1 my-1 text-xs lg:text-sm text-gray-500">
          {sub?.vi}
        </p>
      </div>
      <Button type="secondary" rounded="2xl" to={to}>
        Explore Collection
      </Button>
    </header>
  );
}

export default Header;

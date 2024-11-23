import { usePathname } from 'next/navigation'; // Importar usePathname
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList
} from '@/components/ui/navigation-menu';
import Link from 'next/link';

type ItemsHeaderProps = {
  isEnabled: string;
};

const ItemsHeader = ({ isEnabled }: ItemsHeaderProps) => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;
  const getLinkStyles = (path: string) =>
    +isActive(path)
      ? 'font-bold text-revolutionary_green underline'
      : 'text-white';

  return (
    isEnabled && (
      <NavigationMenu className="mx-auto md:m-0 w-full ">
        <NavigationMenuList className="flex flex-col md:flex-row items-start w-full gap-4">
          <NavigationMenuItem>
            <Link
              href="/escrow/initialize-escrow"
              className={getLinkStyles('/escrow/initialize-escrow')}
              passHref
            >
              Create Escrow
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              href="/escrow/claim-escrow-earnings"
              className={getLinkStyles('/escrow/claim-escrow-earnings')}
              passHref
            >
              Claim Escrow Earnings
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    )
  );
};

export default ItemsHeader;

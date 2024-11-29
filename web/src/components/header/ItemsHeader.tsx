import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';

type ItemsHeaderProps = {
  isEnabled: string;
  currentLocale: string;
};

const ItemsHeader = ({ isEnabled, currentLocale }: ItemsHeaderProps) => {
  const pathname = usePathname();
  const t = useTranslations('ItemsHeader');

  const isActive = (path: string) => pathname === path;

  const getLinkStyles = (path: string) =>
    isActive(path) ? 'font-bold text-revolutionary_green underline' : 'text-white';

  const basePath = `/${currentLocale}`;

  return (
    isEnabled && (
      <div className="flex items-center justify-center w-full">
        <NavigationMenu className="w-full">
          <NavigationMenuList className="flex flex-row justify-center items-center gap-8">
            <NavigationMenuItem>
              <Link
                href={`${basePath}/escrow/initialize-escrow`}
                className={getLinkStyles(`${basePath}/escrow/initialize-escrow`)}
                passHref
              >
                {t('initializeEscrow')}
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href={`${basePath}/escrow/claim-escrow-earnings`}
                className={getLinkStyles(`${basePath}/escrow/claim-escrow-earnings`)}
                passHref
              >
                {t('claimEarnings')}
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    )
  );
};

export default ItemsHeader;

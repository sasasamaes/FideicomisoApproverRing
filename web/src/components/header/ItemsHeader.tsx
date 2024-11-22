import { usePathname } from "next/navigation"; // Importar usePathname
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

type ItemsHeaderProps = {
  isEnabled: string;
};

const ItemsHeader = ({ isEnabled }: ItemsHeaderProps) => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    isEnabled && (
      <NavigationMenu className="mx-auto md:m-0 w-full ">
        <NavigationMenuList className="flex flex-col md:flex-row items-start w-full gap-4">
          <NavigationMenuItem>
            <Link
              href="/escrow/initialize-escrow"
              className={
                isActive("/escrow/initialize-escrow")
                  ? "font-bold text-[#A0D911] underline"
                  : "text-white"
              }
              passHref
            >
              Create Escrow
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              href="/escrow/claim-escrow-earnings"
              className={
                isActive("/escrow/claim-escrow-earnings") ? "font-bold text-[#A0D911] underline" : "text-white"
              }
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

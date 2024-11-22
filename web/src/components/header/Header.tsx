'use client'
import React, { useState } from 'react';
import { useWalletStore } from "@/store/walletStore";
import { useWallet } from "@/wallet/hooks/useWallet.hook";
import { FaUserCircle } from "react-icons/fa";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ItemsHeader from "./ItemsHeader";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { connectWallet, disconnectWallet } = useWallet();
  const { address, name } = useWalletStore();

  const handleConnect = async () => {
    try {
      await connectWallet();
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };

  const handleDisconnect = async () => {
    try {
      if (disconnectWallet) {
        await disconnectWallet();
      }
    } catch (error) {
      console.error("Error disconnecting wallet:", error);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="relative flex flex-row w-full justify-between gap-5 items-center p-4">
        <Link href="/" className="md:m-0">
          <Image src="/logo.svg" width={40} height={40} alt="logo" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <ItemsHeader isEnabled={address} />
        </div>

        {/* Desktop Wallet Section */}
        <div className="hidden md:flex items-center gap-5">
          {address ? (
            <>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <FaUserCircle size={30} />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-base">
                      {address && name + " - " + address}
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <button
                type="button"
                onClick={handleDisconnect}
                className="text-white bg-[#0050B3] rounded-full focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-sm px-5 py-3 text-center"
              >
                Disconnect
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={handleConnect}
              className="text-white bg-[#0050B3] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm px-5 py-3 text-center"
            >
              Connect
            </button>
          )}
        </div>

        {/* Mobile: Show either menu button or connect button */}
        <div className="md:hidden">
          {address ? (
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-600 hover:text-gray-800"
            >
              {isMenuOpen ? "" : <Menu size={24} className='text-white' />}
            </button>
          ) : (
            <button
              type="button"
              onClick={handleConnect}
              className="text-white bg-[#0050B3] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm px-5 py-3 text-center"
            >
              Connect
            </button>
          )}
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && address && (
        <div className="md:hidden fixed inset-x-0 top-2 bg-black bg-opacity-80 z-50 w-full flex flex-col ">
          <X size={24} className='text-white self-end m-4' onClick={toggleMenu} /> 
          <div className="w-full py-4 space-y-4 flex flex-col items-start px-8">            
            <nav className="">
              <ItemsHeader isEnabled={address} />
            </nav>
            
            <div className="flex justify-center pt-2">
              <button
                type="button"
                onClick={handleDisconnect}
                className="text-white bg-[#0050B3] rounded-full focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-sm px-5 py-3 text-center"
              >
                Disconnect
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
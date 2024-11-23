'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { useWalletStore } from '@/store/walletStore';
import { useWallet } from '@/wallet/hooks/useWallet.hook';
import { FaUserCircle } from 'react-icons/fa';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';
import ItemsHeader from './ItemsHeader';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { connectWallet, disconnectWallet } = useWallet();
  const { address, name } = useWalletStore();

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, [isMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleConnect = async () => {
    try {
      await connectWallet();
    } catch (error) {
      console.error('Error connecting wallet:', error);
    }
  };

  const handleDisconnect = async () => {
    try {
      if (disconnectWallet) {
        await disconnectWallet();
        setIsMenuOpen(false); // Close mobile menu after disconnecting
      }
    } catch (error) {
      console.error('Error disconnecting wallet:', error);
    }
  };

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  return (
    <header className="relative flex flex-row w-full justify-between gap-5 items-center p-4">
      <Link
        href="/"
        className="md:m-0 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
        aria-label="Home"
      >
        <Image
          src="/logo.svg"
          width={40}
          height={40}
          alt="Website logo"
          priority
        />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:block" aria-label="Main navigation">
        <ItemsHeader isEnabled={address} />
      </nav>

      {/* Desktop Wallet Section */}
      <div className="hidden md:flex items-center gap-5">
        {address ? (
          <>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger aria-label="View wallet details">
                  <FaUserCircle size={30} className="text-primary" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-base">
                    {name && address ? `${name} - ${address}` : address}
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <button
              type="button"
              onClick={handleDisconnect}
              className="text-white bg-primary hover:bg-primary/90 rounded-full focus:ring-4 focus:outline-none focus:ring-primary/50 font-medium text-sm px-5 py-3 text-center transition-colors"
              aria-label="Disconnect wallet"
            >
              Disconnect
            </button>
          </>
        ) : (
          <button
            type="button"
            onClick={handleConnect}
            className="text-white bg-primary hover:bg-primary/90 rounded-full focus:ring-4 focus:outline-none focus:ring-primary/50 font-medium text-sm px-5 py-3 text-center transition-colors"
            aria-label="Connect wallet"
          >
            Connect
          </button>
        )}
      </div>

      {/* Mobile Controls */}
      <div className="md:hidden">
        {address ? (
          <button
            onClick={toggleMenu}
            className="p-2 text-white hover:bg-primary/10 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        ) : (
          <button
            type="button"
            onClick={handleConnect}
            className="text-white bg-primary hover:bg-primary/90 rounded-full focus:ring-4 focus:outline-none focus:ring-primary/50 font-medium text-sm px-5 py-3 text-center transition-colors"
            aria-label="Connect wallet"
          >
            Connect
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && address && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
          className="md:hidden fixed inset-0 bg-black/80 z-50 backdrop-blur-sm"
        >
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-background shadow-lg">
            <div className="flex flex-col h-full">
              <div className="flex justify-end p-4">
                <button
                  aria-label="Close menu"
                  className="p-2 text-foreground hover:bg-primary/10 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                  onClick={toggleMenu}
                >
                  <X size={24} />
                </button>
              </div>

              <nav className="flex-1 px-6" aria-label="Mobile navigation">
                <ItemsHeader isEnabled={address} />
              </nav>

              <div className="p-6 border-t">
                <button
                  type="button"
                  onClick={handleDisconnect}
                  className="w-full text-white bg-primary hover:bg-primary/90 rounded-full focus:ring-4 focus:outline-none focus:ring-primary/50 font-medium text-sm px-5 py-3 text-center transition-colors"
                  aria-label="Disconnect wallet"
                >
                  Disconnect
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

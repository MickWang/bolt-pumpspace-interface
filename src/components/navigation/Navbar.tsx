import React, { useState } from 'react';
import { Logo } from './Logo';
import { LanguageSelector } from './LanguageSelector';
import { SocialLinks } from './SocialLinks';
import { MobileMenuButton } from './MobileMenuButton';
import { MobileDrawer } from './MobileDrawer';

export function Navbar() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <nav className="bg-background text-white border-b border-gray-800">
        <div className="max-w-[2000px] mx-auto px-4 h-16 flex items-center justify-between">
          <Logo />
          <div className="hidden md:flex items-center space-x-2 sm:space-x-4 lg:space-x-6">
            <LanguageSelector />
            <SocialLinks />
          </div>
          <MobileMenuButton onClick={() => setDrawerOpen(true)} />
        </div>
      </nav>
      <MobileDrawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
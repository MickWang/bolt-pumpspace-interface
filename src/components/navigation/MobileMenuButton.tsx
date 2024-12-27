import React from 'react';
import { Menu } from 'lucide-react';

interface MobileMenuButtonProps {
  onClick: () => void;
}

export function MobileMenuButton({ onClick }: MobileMenuButtonProps) {
  return (
    <button
      onClick={onClick}
      className="p-2 text-gray-400 hover:text-white rounded-lg
               hover:bg-surface/80 transition-colors md:hidden"
    >
      <Menu size={24} />
    </button>
  );
}
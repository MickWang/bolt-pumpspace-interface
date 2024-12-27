import React from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useI18n } from '../../i18n/i18n';
import { useClickOutside } from '../../hooks/useClickOutside';
import { SocialLinks } from './SocialLinks';
import { LanguageSelector } from './LanguageSelector';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const ref = useClickOutside<HTMLDivElement>(onClose);
  const { t } = useI18n();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            ref={ref}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 40, stiffness: 400, mass: 0.8 }}
            className="fixed right-0 top-0 h-full w-72 bg-background border-l 
                     border-gray-800 z-50 md:hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-800">
              <h2 className="text-lg font-medium text-white">{t('nav.menu')}</h2>
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-white rounded-lg
                         hover:bg-gray-800 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="p-4 space-y-8">
              <div className="space-y-2">
                <LanguageSelector />
              </div>
              <div className="flex flex-col space-y-4">
                <SocialLinks />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
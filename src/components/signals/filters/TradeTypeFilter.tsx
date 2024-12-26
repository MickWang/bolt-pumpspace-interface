import React from 'react';
import { ArrowUp, ArrowDown, ArrowUpDown } from 'lucide-react';
import { useClickOutside } from '../../../hooks/useClickOutside';
import { useI18n } from '../../../i18n/i18n';

interface TradeTypeFilterProps {
  isOpen: boolean;
  onClose: () => void;
  selected: 'all' | 'buy' | 'sell';
  onChange: (type: 'all' | 'buy' | 'sell') => void;
}

export function TradeTypeFilter({ 
  isOpen, 
  onClose, 
  selected, 
  onChange 
}: TradeTypeFilterProps) {
  const ref = useClickOutside<HTMLDivElement>(onClose);
  const { t } = useI18n();

  const options = [
    { value: 'all', label: t('signals.buy_sell'), icon: ArrowUpDown },
    { value: 'buy', label: t('signals.buy_only'), icon: ArrowUp },
    { value: 'sell', label: t('signals.sell_only'), icon: ArrowDown },
  ] as const;

  if (!isOpen) return null;

  return (
    <div 
      ref={ref}
      className="absolute right-0 top-full mt-2 w-48 z-50 bg-surface
                 border border-gray-700 rounded-lg shadow-lg animate-in fade-in"
    >
      <div className="p-2 space-y-1">
        {options.map((option) => {
          const Icon = option.icon;
          return (
            <button
              key={option.value}
              onClick={() => {
                onChange(option.value);
                onClose();
              }}
              className={`w-full flex items-center space-x-3 px-3 py-2
                       rounded-md transition-all duration-200
                       ${selected === option.value
                         ? 'bg-cyan-500/10 text-cyan-400' 
                         : 'text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400'}`}
            >
              <Icon size={14} />
              <span className="flex-1 text-left text-sm">{option.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
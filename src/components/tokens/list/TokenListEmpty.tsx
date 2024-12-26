import React from 'react';
import { useFilterStore } from '../../../store/filter/filterStore';
import { useI18n } from '../../../i18n/i18n';

export function TokenListEmpty() {
  const { hasActiveFilters, resetAllFilters } = useFilterStore();
  const { t } = useI18n();

  return (
    <div className="flex flex-col items-center justify-center h-40 text-gray-400">
      <p className="mb-4">
        {hasActiveFilters() 
          ? t('table.no_tokens_filter')
          : t('table.no_tokens')}
      </p>
      {hasActiveFilters() && (
        <button
          onClick={resetAllFilters}
          className="px-4 py-2 text-sm bg-cyan-500/20 text-cyan-400
                   rounded-lg hover:bg-cyan-500/30 transition-colors"
        >
          {t('table.reset_filters')}
        </button>
      )}
    </div>
  );
}
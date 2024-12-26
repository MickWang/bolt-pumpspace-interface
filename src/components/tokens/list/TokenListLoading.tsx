import React from 'react';
import { useI18n } from '../../../i18n/i18n';

export function TokenListLoading() {
  const { t } = useI18n();

  return (
    <div className="flex items-center justify-center h-40">
      <div className="text-gray-400">{t('table.loading')}</div>
    </div>
  );
}
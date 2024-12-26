import { useState, useEffect } from 'react';
import { useI18n } from '../i18n/i18n';

export function useLastUpdate(timestamp: number) {
  const [displayTime, setDisplayTime] = useState('');
  const { t } = useI18n();

  useEffect(() => {
    const updateDisplay = () => {
      const seconds = Math.floor((Date.now() - timestamp) / 1000);
      if(seconds < 10){
         setDisplayTime(t('time.just_now'));
      }
      else if (seconds < 60) {
        setDisplayTime(t('time.seconds_ago', { seconds }));
      } else if (seconds < 3600) {
        const minutes = Math.floor(seconds / 60);
        setDisplayTime(t('time.minutes_ago', { minutes }));
      } else if (seconds < 86400) {
        const hours = Math.floor(seconds / 3600);
        setDisplayTime(t('time.hours_ago', { hours }));
      } else {
        const days = Math.floor(seconds / 86400);
        setDisplayTime(t('time.days_ago', { days }));
      }
    };

    // Update immediately
    updateDisplay();

    // Then update every second
    const interval = setInterval(updateDisplay, 1000);

    return () => clearInterval(interval);
  }, [timestamp, t]);

  return displayTime;
}
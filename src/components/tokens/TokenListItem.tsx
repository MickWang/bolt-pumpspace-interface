import React from 'react';
import { usePinnedTokens } from '../../hooks/usePinnedTokens';
import { TokenNameSection } from './list/TokenNameSection';
import { TokenStatsSection } from './list/TokenStatsSection';
import { TokenActions } from './TokenActions';
import type { TokenData } from '../../types/token';

interface TokenListItemProps {
  token: TokenData;
  isNew?: boolean;
}

export function TokenListItem({ token, isNew }: TokenListItemProps) {
  const { isPinned, togglePin } = usePinnedTokens();

  return (
    <div className={`token-list__grid token-list__item ${isNew ? 'token-list__item--new' : ''}`}>
      {/* Token Info */}
      <TokenNameSection
        symbol={token.symbol}
        address={token.tokenAddress}
        metadata={token.metadata}
        isPinned={isPinned(token.tokenAddress)}
        onPinToggle={() => togglePin(token.tokenAddress)}
      />

      {/* Stats */}
      <TokenStatsSection token={token} />

      {/* Trade Button */}
      <TokenActions token={token} />
    </div>
  );
}
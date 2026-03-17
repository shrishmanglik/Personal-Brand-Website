'use client';

import { useState, useCallback } from 'react';
import { matchQuery } from '@/engine/matcher';
import { MatchResult } from '@/engine/types';
import GalleryPrompt from './GalleryPrompt';
import DynamicExhibit from './DynamicExhibit';
import MetaLabel from './MetaLabel';

export default function ConversationManager() {
  const [currentResult, setCurrentResult] = useState<MatchResult | null>(null);
  const [isExhibitOpen, setIsExhibitOpen] = useState(false);
  const [interactionCount, setInteractionCount] = useState(0);

  const handleSubmit = useCallback((query: string) => {
    const result = matchQuery(query);
    setCurrentResult(result);
    setInteractionCount((prev) => prev + 1);

    if (result.entry.navigateTo !== undefined) {
      // Scroll to the target room
      const targetScroll = (result.entry.navigateTo + 0.4) * window.innerHeight;
      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
      // Wait for scroll to settle, then show exhibit
      setTimeout(() => setIsExhibitOpen(true), 1200);
    } else {
      setIsExhibitOpen(true);
    }
  }, []);

  const handleDismiss = useCallback(() => {
    setIsExhibitOpen(false);
    setTimeout(() => setCurrentResult(null), 300);
  }, []);

  return (
    <>
      <GalleryPrompt onSubmit={handleSubmit} isExhibitOpen={isExhibitOpen} />
      <DynamicExhibit
        result={currentResult}
        isOpen={isExhibitOpen}
        onDismiss={handleDismiss}
        interactionCount={interactionCount}
      />
      <MetaLabel interactionCount={interactionCount} />
    </>
  );
}

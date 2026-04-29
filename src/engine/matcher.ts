import { KnowledgeEntry, MatchResult } from './types';
import { tokenize } from './tokenizer';
import { KNOWLEDGE_BASE, FALLBACK_ENTRY } from './knowledgeBase';

// Minimum normalized score required to return a real match (vs. fallback)
const MATCH_THRESHOLD = 1.6;
// Score above which we consider this an "exact" hit
const EXACT_THRESHOLD = 8;

export function matchQuery(query: string): MatchResult {
  const trimmed = query.trim();
  if (!trimmed) {
    return { entry: FALLBACK_ENTRY, score: 0, isExact: false };
  }

  const tokens = tokenize(trimmed);
  const tokenSet = new Set(tokens);
  const queryLower = trimmed.toLowerCase();

  let bestMatch: KnowledgeEntry | null = null;
  let bestScore = 0;

  for (const entry of KNOWLEDGE_BASE) {
    let score = 0;

    // Exact phrase match (highest signal)
    for (const phrase of entry.phrases) {
      if (queryLower.includes(phrase.toLowerCase())) {
        score += 10;
      }
    }

    // Token / keyword overlap
    let keywordHits = 0;
    for (const keyword of entry.keywords) {
      const kw = keyword.toLowerCase();
      if (tokenSet.has(kw)) {
        score += 3;
        keywordHits++;
      }
    }

    // Partial keyword match (prefix/suffix)
    for (const keyword of entry.keywords) {
      const kw = keyword.toLowerCase();
      if (tokenSet.has(kw)) continue; // already counted above
      for (const token of tokens) {
        if (token.length < 3) continue;
        if (token.startsWith(kw) || kw.startsWith(token)) {
          score += 0.8;
        } else if (token.includes(kw) || kw.includes(token)) {
          score += 0.4;
        }
      }
    }

    // Reward entries that hit multiple distinct keywords (avoid over-rewarding a single repeat)
    if (keywordHits >= 2) score += keywordHits * 0.5;

    // Normalize by sqrt of keyword pool size to avoid huge-pool bias
    const normalizedScore =
      entry.keywords.length > 0
        ? score / Math.sqrt(entry.keywords.length)
        : score;

    if (normalizedScore > bestScore) {
      bestScore = normalizedScore;
      bestMatch = entry;
    }
  }

  if (bestScore < MATCH_THRESHOLD || !bestMatch) {
    return { entry: FALLBACK_ENTRY, score: 0, isExact: false };
  }

  return {
    entry: bestMatch,
    score: bestScore,
    isExact: bestScore >= EXACT_THRESHOLD,
  };
}

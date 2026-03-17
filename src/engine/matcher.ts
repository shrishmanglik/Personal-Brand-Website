import { KnowledgeEntry, MatchResult } from './types';
import { tokenize } from './tokenizer';
import { KNOWLEDGE_BASE, FALLBACK_ENTRY } from './knowledgeBase';

export function matchQuery(query: string): MatchResult {
  const trimmed = query.trim();
  if (!trimmed) {
    return { entry: FALLBACK_ENTRY, score: 0, isExact: false };
  }

  const tokens = tokenize(trimmed);
  const queryLower = trimmed.toLowerCase();

  let bestMatch: KnowledgeEntry | null = null;
  let bestScore = 0;

  for (const entry of KNOWLEDGE_BASE) {
    let score = 0;

    // Exact phrase match (highest value)
    for (const phrase of entry.phrases) {
      if (queryLower.includes(phrase.toLowerCase())) {
        score += 10;
      }
    }

    // Keyword overlap
    for (const keyword of entry.keywords) {
      const kw = keyword.toLowerCase();
      if (tokens.includes(kw)) {
        score += 3;
      }
    }

    // Partial keyword match (substring)
    for (const keyword of entry.keywords) {
      const kw = keyword.toLowerCase();
      for (const token of tokens) {
        if (token !== kw && (token.includes(kw) || kw.includes(token))) {
          score += 1;
        }
      }
    }

    // Normalize by keyword count to avoid bias
    const normalizedScore =
      entry.keywords.length > 0
        ? score / Math.sqrt(entry.keywords.length)
        : score;

    if (normalizedScore > bestScore) {
      bestScore = normalizedScore;
      bestMatch = entry;
    }
  }

  // Below threshold → fallback
  if (bestScore < 2 || !bestMatch) {
    return { entry: FALLBACK_ENTRY, score: 0, isExact: false };
  }

  return {
    entry: bestMatch,
    score: bestScore,
    isExact: bestScore >= 8,
  };
}

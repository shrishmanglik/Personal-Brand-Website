const STOPWORDS = new Set([
  'the', 'a', 'an', 'is', 'are', 'was', 'were', 'be', 'been', 'being',
  'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'shall',
  'should', 'may', 'might', 'must', 'can', 'could',
  'i', 'me', 'my', 'myself', 'we', 'our', 'ours', 'ourselves',
  'you', 'your', 'yours', 'yourself', 'yourselves',
  'he', 'him', 'his', 'himself', 'she', 'her', 'hers', 'herself',
  'it', 'its', 'itself', 'they', 'them', 'their', 'theirs', 'themselves',
  'what', 'which', 'who', 'whom', 'this', 'that', 'these', 'those',
  'am', 'if', 'or', 'but', 'and', 'so', 'than', 'too', 'very',
  'just', 'about', 'above', 'after', 'again', 'all', 'also',
  'any', 'because', 'before', 'between', 'both', 'by', 'each',
  'for', 'from', 'get', 'got', 'how', 'in', 'into', 'of', 'on',
  'once', 'only', 'other', 'out', 'over', 'own', 'same',
  'some', 'such', 'no', 'nor', 'not', 'now', 'off',
  'then', 'there', 'through', 'to', 'under', 'until', 'up',
  'when', 'where', 'while', 'with', 'at', 'during',
  'please', 'tell', 'show', 'give', 'take', 'let', 'make',
]);

// Proper nouns to preserve (don't stem these)
const PRESERVE = new Set([
  'telus', 'midas', 'atlas', 'nestiq', 'astroai', 'chemai', 'jobflow',
  'rbc', 'seneca', 'mds', 'gsap', 'react', 'nextjs', 'supabase',
  'fastapi', 'firebase', 'vercel', 'python', 'typescript',
  'claude', 'gemini', 'sora', 'midjourney', 'langchain', 'crewai',
  'shrish', 'manglik', 'ahmedabad', 'toronto', 'india', 'canada',
  'abbott', 'ford', 'gls', 'iiit',
]);

function basicStem(word: string): string {
  if (PRESERVE.has(word)) return word;
  if (word.length <= 4) return word;

  // Simple suffix stripping
  if (word.endsWith('ing') && word.length > 6) return word.slice(0, -3);
  if (word.endsWith('tion') && word.length > 7) return word.slice(0, -4);
  if (word.endsWith('ment') && word.length > 7) return word.slice(0, -4);
  if (word.endsWith('ness') && word.length > 7) return word.slice(0, -4);
  if (word.endsWith('ence') && word.length > 7) return word.slice(0, -4);
  if (word.endsWith('ance') && word.length > 7) return word.slice(0, -4);
  if (word.endsWith('ly') && word.length > 5) return word.slice(0, -2);
  if (word.endsWith('ed') && word.length > 5) return word.slice(0, -2);
  if (word.endsWith('er') && word.length > 5) return word.slice(0, -2);
  if (word.endsWith('est') && word.length > 6) return word.slice(0, -3);
  if (word.endsWith('ies') && word.length > 5) return word.slice(0, -3) + 'y';
  if (word.endsWith('s') && !word.endsWith('ss') && word.length > 4) return word.slice(0, -1);

  return word;
}

export function tokenize(query: string): string[] {
  return query
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // remove punctuation
    .split(/\s+/)
    .filter((w) => w.length > 0 && !STOPWORDS.has(w))
    .map(basicStem);
}

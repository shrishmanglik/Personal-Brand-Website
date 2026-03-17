export interface KnowledgeEntry {
  id: string;
  category:
    | 'about'
    | 'career'
    | 'telus'
    | 'mds'
    | 'projects'
    | 'skills'
    | 'education'
    | 'contact'
    | 'philosophy'
    | 'meta';
  keywords: string[];
  phrases: string[];
  response: string;
  navigateTo?: number; // Room index 0-7
  highlightElement?: string;
  followUp?: string;
  responseStyle: 'frame' | 'placard' | 'quote' | 'list' | 'none';
}

export interface MatchResult {
  entry: KnowledgeEntry;
  score: number;
  isExact: boolean;
}

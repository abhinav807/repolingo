export interface RepoAnalysis {
  summary: string;
  techStack: string[];
  fileStructure: { path: string; explanation: string }[];
  keyFiles: { path: string; explanation: string }[];
  howToRun: {
    confidence: "confirmed" | "inferred";
    steps: string[];
  };
  contributing: string | null;
}

export interface RepoMeta {
  name: string;
  fullName: string;
  description: string | null;
  stars: number;
  language: string | null;
  ownerAvatar: string;
  htmlUrl: string;
}

export interface AnalyzeResponse {
  repo: RepoMeta;
  analysis: RepoAnalysis;
  hasReadme: boolean;
  cached?: boolean;
}

export interface AnalyzeError {
  error: string;
  details?: string;
}

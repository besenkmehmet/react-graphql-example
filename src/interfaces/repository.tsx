interface Language {
  node: {
    name: string;
    color: string;
  };
}

interface Repository {
  id: number;
  name: string;
  link?: string;
  description?: string;
  updatedAt?: string;
  languages?: {
    edges?: Array<Language>;
  };
  forkCount?: number;
  licenseInfo?: {
    name: string;
  };
}

export default Repository;

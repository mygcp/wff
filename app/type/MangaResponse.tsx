interface MangaResponse {
  result: string;
  response: string;
  data: MangaData[];
  limit: number;
  offset: number;
  total: number;
}

interface MangaData {
  id: string;
  type: string;
  attributes: MangaAttributes;
  relationships: Relationship[];
}

interface MangaAttributes {
  title: {
    en: string;
  };
  altTitles: any[]; // Assuming this can be an array of alternative titles
  description: {
    en: string;
  };
  isLocked: boolean;
  links: {
    engtl: string;
  };
  originalLanguage: string;
  lastVolume: string; // Could be number or string
  lastChapter: string; // Could be number or string
  publicationDemographic: string | null; // Assuming it could be a string like "shonen", "shojo", etc.
  status: string;
  year: number;
  contentRating: string;
  tags: Tag[];
  state: string;
  chapterNumbersResetOnNewVolume: boolean;
  createdAt: string; // Date string
  updatedAt: string; // Date string
  version: number;
  availableTranslatedLanguages: string[];
  latestUploadedChapter: string;
}

interface Tag {
  id: string;
  type: string;
  attributes: {
    name: {
      en: string;
    };
    description: any; // Assuming this could be provided in future updates
    group: string;
    version: number;
  };
  relationships: any[]; // Assuming relationships can have data in future updates
}

interface Relationship {
  id: string;
  type: string;
  attributes?: {
    description: string;
    volume: string;
    fileName: string;
    locale: string;
    createdAt: string; // Date string
    updatedAt: string; // Date string
    version: number;
  };
}

export default MangaResponse;
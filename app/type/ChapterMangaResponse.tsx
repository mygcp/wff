interface ChapterMangaResponse {
    result: string;
    response: string;
    data: CollectionData[];
    limit: number;
    offset: number;
    total: number;
  }
  
  interface CollectionData {
    id: string;
    type: string;
    attributes: {
      volume: string;
      chapter: string;
      title: string;
      translatedLanguage: string;
      externalUrl: string | null;
      publishAt: string;
      readableAt: string;
      createdAt: string;
      updatedAt: string;
      pages: number;
      version: number;
    };
    relationships: Relationship[];
  }
  
  interface Relationship {
    id: string;
    type: string;
    attributes: {
      name: string;
      altNames: string[];
      locked: boolean;
      website: string | null;
      ircServer: string | null;
      ircChannel: string | null;
      discord: string | null;
      contactEmail: string | null;
      description: string | null;
      twitter: string | null;
      mangaUpdates: string | null;
      focusedLanguages: string[];
      official: boolean;
      verified: boolean;
      inactive: boolean;
      publishDelay: string | null;
      exLicensed: boolean;
      createdAt: string;
      updatedAt: string;
      version: number;
    } | {
      title: {
        en: string;
      };
      altTitles: {
        ja: string;
        'ja-ro': string;
      }[];
      description: {
        en: string;
      };
      isLocked: boolean;
      links: {
        al: string;
        ap: string;
        bw: string;
        kt: string;
        mu: string;
        amz: string;
        mal: string;
        raw: string;
        engtl: string;
      };
      originalLanguage: string;
      lastVolume: string;
      lastChapter: string;
      publicationDemographic: any; // You can define a specific type if available
      status: string;
      year: number;
      contentRating: string;
      tags: Tag[];
      state: string;
      chapterNumbersResetOnNewVolume: boolean;
      createdAt: string;
      updatedAt: string;
      version: number;
      availableTranslatedLanguages: string[];
      latestUploadedChapter: string;
    } | {
      username: string;
      roles: string[];
      version: number;
    };
  }
  
  interface Tag {
    id: string;
    type: string;
    attributes: {
      name: {
        en: string;
      };
      description: {
        [key: string]: any; // You can define a specific type if available
      };
      group: string;
      version: number;
    };
  }
export default ChapterMangaResponse; 
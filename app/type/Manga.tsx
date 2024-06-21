interface MangaTitle {
  en: string;
  ko?: string;
  "ko-ro"?: string;
  fr?: string;
  ru?: string;
  fa?: string;
  ja?: string;
  ar?: string;
  "zh-hk"?: string;
  ka?: string;
  "es-la"?: string;
}

interface MangaDescription {
  de?: string;
  en: string;
  ka?: string;
  ko?: string;
}

interface MangaAttributes {
  title: MangaTitle;
  altTitles: { [key: string]: string }[];
  description: MangaDescription;
  links: {
    al: string;
    ap: string;
    mu: string;
    nu: string;
    mal: string;
    raw: string;
    engtl: string;
  };
  originalLanguage: string;
  status: string;
  year: number;
  tags: {
    id: string;
    type: string;
    attributes: {
      name: MangaTitle;
      description: any; // You can define a type for description if needed
      group: string;
      version: number;
    };
    relationships: any[]; // Define relationship type if needed
  }[];
  // Add other attributes as needed
}

interface MangaData {
  id: string;
  type: string;
  attributes: MangaAttributes;
  relationships: {
    id: string;
    type: string;
  }[];
}

interface Manga {
  result: string;
  response: string;
  data: MangaData[];
  limit: number;
  offset: number;
  total: number;
}

export default Manga;
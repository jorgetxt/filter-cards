export interface Anime {
  id: number;
  title: {
    romaji: string;
    english?: string;
  };
  coverImage: {
    large: string;
  };
}

export interface AnimeListResponse {
  Page: {
    media: Anime[];
  };
}

interface ListAnimeModel {
  id: number;
  title: string;
  image_url: string;
  type: string;
  episodes: number;
  score: number;
  synopsis: string;
  start_date: string;
  end_date: string;
  members: number;
  favorites: number;
  rated: string;
  popularity: number;
  status: string;
  genres: string[];
  studios: string[];
}

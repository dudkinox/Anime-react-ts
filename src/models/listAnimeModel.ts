export default interface ListAnimeModel {
  type: string;
  card_type: string;
  title: string;
  cover: string;
  view: string;
  styles: string;
  style_list: [];
  season_id: string;
  episode_id: string;
  index_show: string;
  label: number;
  rank_info: string;
  view_history: string;
  watched: string;
  duration: string;
  view_at: string;
  pub_time_text: string;
  pub_time_ts: number;
  is_favored: boolean;
  unavailable: boolean;
}

export interface DataCardListAnimeModel {
  is_end: boolean;
  cards: ListAnimeModel[];
}

export interface ListApiBilibili {
  code: number;
  message: number;
  ttl: number;
  data: DataCardListAnimeModel;
}

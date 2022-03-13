export default interface ListAnimeModel {
  code: number;
  message: string;
  ttl: number;
  data: dataList;
}

interface dataList {
  cards: card[];
}

interface card {
  card_type: string;
  title: string;
  cover: string;
  view: string;
  styles: string;
  season_id: number;
  episode_id: number;
  index_show: string;
  label: number;
  rank_info: string;
  view_history: string;
  pub_time_text: string;
}

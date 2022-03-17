import { httpClient } from "../http/clinet";
import ListAnimeModel from "../models/listAnimeModel";

const ListAnimeService = {
  getListAnime: (
    page: string,
    pagesize: string,
    platform: string,
    s_locale: string
  ) => {
    return httpClient.get<ListAnimeModel>(
      `/bypass?page=${page}&pagesize=${pagesize}&platform=${platform}&s_locale=${s_locale}`
    );
  },
};

export default ListAnimeService;

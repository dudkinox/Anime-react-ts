import axiosInstance from "../http/clinet";
import ListAnimeModel from "../models/listAnimeModel";

const ListAnimeService = {
  getListAnime: (
    page: string,
    pagesize: string,
    platform: string,
    s_locale: string
  ) => {
    return axiosInstance.get<ListAnimeModel>(
      `/items?page=${page}&pagesize=${pagesize}&platform=${platform}&s_locale=${s_locale}`
    );
  },
};

export default ListAnimeService;

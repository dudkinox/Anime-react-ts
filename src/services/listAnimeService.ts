import { httpClient } from "../http/client";
import { ListApiBilibili } from "../models/listAnimeModel";

const CategoriesAnimeService = {
  getListAnimeCategory: () => {
    return httpClient.get<ListApiBilibili>(`/category`);
  },
};

const GalleryService = {
  CategoriesAnimeService,
};

export default GalleryService;

import { httpClient } from "../http/client";
import ListAnimeModel from "../models/listAnimeModel";

const CategoriesAnimeService = {
  getListAnimeCategory: () => {
    return httpClient.get<ListAnimeModel[]>(`/category`);
  },
};

const GalleryService = {
  CategoriesAnimeService,
};

export default GalleryService;

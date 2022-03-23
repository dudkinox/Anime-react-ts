import { useEffect, useState } from "react";
import TopTen from "../features/TopTen";
import ListAnimeModel from "../models/listAnimeModel";
import GalleryService from "../services/listAnimeService";
import { PaginationContainer } from "./Pagination";
import { Pagination, PaginationComponent } from "./PaginationUse";

export default function Product() {
  const [listAnime, setListAnime] = useState<ListAnimeModel[]>();

  const bypassImages = (url: string) => {
    const formatUrl = url.split("https://pic.bstarstatic.com/ogv/");
    return "assets/" + formatUrl[1];
  };

  useEffect(() => {
    GalleryService.ListAnimeService.getListAnime(
      "1",
      "10",
      "web",
      "th_TH"
    ).then((res) => {
      setListAnime(res.data);
      // console.log(res.data);
    });
  }, []);

  return (
    <section className="product spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="trending__product">
              <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-8">
                  <div className="section-title">
                    <h4>อนิเมะที่แนะนำ</h4>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="btn__all text-white">
                    <a href="#all">
                      ดูทั้งหมด <span className="arrow_right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="row">
                {listAnime?.map((item, index) => (
                  <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                    <div className="product__item">
                      <div className="product__item__pic set-bg" data-setbg="">
                        <img src={bypassImages(item.cover)} alt="" />
                        <div className="ep">18 / 18</div>
                        <div className="view">
                          <i className="fa fa-eye" /> {item.view}
                        </div>
                      </div>
                      <div className="product__item__text">
                        <ul>
                          <li>
                            {item.index_show === "เสร็จแล้ว"
                              ? "จบแล้ว"
                              : item.index_show}
                          </li>
                        </ul>
                        <h5>
                          <a
                            href={`https://www.bilibili.tv/th/play/${item.season_id}`}
                          >
                            {item.title}
                          </a>
                        </h5>
                      </div>
                    </div>
                  </div>
                ))}
                <div></div>
              </div>
              {/* <PaginationComponent page={0} totalPages={0} handlePagination={}
                 /> */}
              <h5>5555</h5>
            </div>
          </div>
          <TopTen bypassImages={bypassImages} />
        </div>
      </div>
    </section>
  );
}

/* eslint-disable array-callback-return */
import { useEffect, useState } from "react";
import { ListApiBilibili } from "../models/listAnimeModel";
import GalleryService from "../services/listAnimeService";

export default function Product() {
  const [listAnime, setListAnime] = useState<ListApiBilibili>();
  const [search, setSearch] = useState("");
  const [refresh, setRefresh] = useState(0);

  const BypassImage = (image: string) => {
    const imageBypass = image.split("https://pic.bstarstatic.com/ogv/")[1];

    return `assets/${imageBypass}`;
  };

  const sortTopTen = () => {
    listAnime?.data?.cards?.sort((a, b) => (a?.view > b?.view ? -1 : 1));
    setRefresh(refresh + 1);
    setListAnime(listAnime);
  };

  useEffect(() => {
    GalleryService.CategoriesAnimeService.getListAnimeCategory()
      .then((res) => {
        setListAnime(res.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }, []);

  return (
    <section className="product">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="trending__product">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="section-title">
                    <h4>อนิเมะที่แนะนำ</h4>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="section-title">
                    <input
                      className="search-box form-control"
                      style={{ border: "none", borderRadius: "10px" }}
                      placeholder="ค้นหาเรื่องที่ชื่นชอบ"
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="section-title text-center">
                    <button className="btn btn-dark col-6" onClick={sortTopTen}>
                      จัดอันดับ
                    </button>
                  </div>
                </div>
              </div>
              <div className="row">
                {listAnime?.data.cards
                  .filter((feed) => {
                    if (search === "") {
                      return feed;
                    } else if (
                      feed.title.toLowerCase().includes(search.toLowerCase())
                    ) {
                      return feed;
                    }
                  })
                  .map((item) => {
                    return (
                      <div
                        className="col-lg-4 col-md-6 col-sm-6"
                        key={item.season_id}
                      >
                        <div className="product__item">
                          <div className="product__item__pic set-bg">
                            <img src={BypassImage(item.cover)} alt="" />
                            <div className="view">
                              <i className="fa fa-eye" /> {item.view}
                            </div>
                          </div>
                          <div className="product__item__text">
                            <ul>
                              <li>
                                {item.index_show === "เสร็จแล้ว"
                                  ? "จบแล้ว"
                                  : "ยังไม่จบ"}
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
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

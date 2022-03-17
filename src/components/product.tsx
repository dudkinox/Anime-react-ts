import { useEffect, useState } from "react";
import TopTen from "../features/TopTen";
import ListAnimeModel from "../models/listAnimeModel";
import ListAnimeService from "../services/listAnimeService";

export default function Product() {
  const [listAnime, setListAnime] = useState<ListAnimeModel[]>();

  useEffect(() => {
    ListAnimeService.getListAnime("1", "10", "web", "th_TH").then((res) => {
      setListAnime(res.data);
      console.log(res.data);
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
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item">
                      <div className="product__item__pic set-bg" data-setbg="">
                        <img src="img/trending/trend-1.jpg" alt="" />
                        <div className="ep">18 / 18</div>
                        <div className="comment">
                          <i className="fa fa-comments" /> 11
                        </div>
                        <div className="view">
                          <i className="fa fa-eye" /> 9141
                        </div>
                      </div>
                      <div className="product__item__text">
                        <ul>
                          <li>Active</li>
                          <li>Movie</li>
                        </ul>
                        <h5>
                          <a href="#name">
                            The Seven Deadly Sins: Wrath of the Gods
                          </a>
                        </h5>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="popular__product">
              <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-8">
                  <div className="section-title">
                    <h4>Popular Shows</h4>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="btn__all">
                    <a href="#all-top" className="primary-btn">
                      ดูทั้งหมด <span className="arrow_right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="product__item">
                    <div
                      className="product__item__pic set-bg"
                      data-setbg="img/popular/popular-1.jpg"
                    >
                      <div className="ep">18 / 18</div>
                      <div className="comment">
                        <i className="fa fa-comments" /> 11
                      </div>
                      <div className="view">
                        <i className="fa fa-eye" /> 9141
                      </div>
                    </div>
                    <div className="product__item__text">
                      <ul>
                        <li>Active</li>
                        <li>Movie</li>
                      </ul>
                      <h5>
                        <a href="#">Sen to Chihiro no Kamikakushi</a>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="product__item">
                    <div
                      className="product__item__pic set-bg"
                      data-setbg="img/popular/popular-2.jpg"
                    >
                      <div className="ep">18 / 18</div>
                      <div className="comment">
                        <i className="fa fa-comments" /> 11
                      </div>
                      <div className="view">
                        <i className="fa fa-eye" /> 9141
                      </div>
                    </div>
                    <div className="product__item__text">
                      <ul>
                        <li>Active</li>
                        <li>Movie</li>
                      </ul>
                      <h5>
                        <a href="#">Kizumonogatari III: Reiket su-hen</a>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="product__item">
                    <div
                      className="product__item__pic set-bg"
                      data-setbg="img/popular/popular-3.jpg"
                    >
                      <div className="ep">18 / 18</div>
                      <div className="comment">
                        <i className="fa fa-comments" /> 11
                      </div>
                      <div className="view">
                        <i className="fa fa-eye" /> 9141
                      </div>
                    </div>
                    <div className="product__item__text">
                      <ul>
                        <li>Active</li>
                        <li>Movie</li>
                      </ul>
                      <h5>
                        <a href="#">Shirogane Tamashii hen Kouhan sen</a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="recent__product">
              <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-8">
                  <div className="section-title">
                    <h4>Recently Added Shows</h4>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="btn__all">
                    <a href="#" className="primary-btn">
                      ดูทั้งหมด <span className="arrow_right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="product__item">
                    <div
                      className="product__item__pic set-bg"
                      data-setbg="img/recent/recent-1.jpg"
                    >
                      <div className="ep">18 / 18</div>
                      <div className="comment">
                        <i className="fa fa-comments" /> 11
                      </div>
                      <div className="view">
                        <i className="fa fa-eye" /> 9141
                      </div>
                    </div>
                    <div className="product__item__text">
                      <ul>
                        <li>Active</li>
                        <li>Movie</li>
                      </ul>
                      <h5>
                        <a href="#">Great Teacher Onizuka</a>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="product__item">
                    <div
                      className="product__item__pic set-bg"
                      data-setbg="img/recent/recent-2.jpg"
                    >
                      <div className="ep">18 / 18</div>
                      <div className="comment">
                        <i className="fa fa-comments" /> 11
                      </div>
                      <div className="view">
                        <i className="fa fa-eye" /> 9141
                      </div>
                    </div>
                    <div className="product__item__text">
                      <ul>
                        <li>Active</li>
                        <li>Movie</li>
                      </ul>
                      <h5>
                        <a href="#">
                          Fate/stay night Movie: Heaven's Feel - II. Lost
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="product__item">
                    <div
                      className="product__item__pic set-bg"
                      data-setbg="img/recent/recent-3.jpg"
                    >
                      <div className="ep">18 / 18</div>
                      <div className="comment">
                        <i className="fa fa-comments" /> 11
                      </div>
                      <div className="view">
                        <i className="fa fa-eye" /> 9141
                      </div>
                    </div>
                    <div className="product__item__text">
                      <ul>
                        <li>Active</li>
                        <li>Movie</li>
                      </ul>
                      <h5>
                        <a href="#">Mushishi Zoku Shou: Suzu no Shizuku</a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="live__product">
              <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-8">
                  <div className="section-title">
                    <h4>Live Action</h4>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="btn__all">
                    <a href="#" className="primary-btn">
                      ดูทั้งหมด <span className="arrow_right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="product__item">
                    <div
                      className="product__item__pic set-bg"
                      data-setbg="img/live/live-1.jpg"
                    >
                      <div className="ep">18 / 18</div>
                      <div className="comment">
                        <i className="fa fa-comments" /> 11
                      </div>
                      <div className="view">
                        <i className="fa fa-eye" /> 9141
                      </div>
                    </div>
                    <div className="product__item__text">
                      <ul>
                        <li>Active</li>
                        <li>Movie</li>
                      </ul>
                      <h5>
                        <a href="#">Shouwa Genroku Rakugo Shinjuu</a>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="product__item">
                    <div
                      className="product__item__pic set-bg"
                      data-setbg="img/live/live-2.jpg"
                    >
                      <div className="ep">18 / 18</div>
                      <div className="comment">
                        <i className="fa fa-comments" /> 11
                      </div>
                      <div className="view">
                        <i className="fa fa-eye" /> 9141
                      </div>
                    </div>
                    <div className="product__item__text">
                      <ul>
                        <li>Active</li>
                        <li>Movie</li>
                      </ul>
                      <h5>
                        <a href="#">Mushishi Zoku Shou 2nd Season</a>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="product__item">
                    <div
                      className="product__item__pic set-bg"
                      data-setbg="img/live/live-3.jpg"
                    >
                      <div className="ep">18 / 18</div>
                      <div className="comment">
                        <i className="fa fa-comments" /> 11
                      </div>
                      <div className="view">
                        <i className="fa fa-eye" /> 9141
                      </div>
                    </div>
                    <div className="product__item__text">
                      <ul>
                        <li>Active</li>
                        <li>Movie</li>
                      </ul>
                      <h5>
                        <a href="#">Mushishi Zoku Shou: Suzu no Shizuku</a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <TopTen />
        </div>
      </div>
    </section>
  );
}

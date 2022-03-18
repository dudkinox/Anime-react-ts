import { useEffect, useState } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Loading from "../../components/loading";
import Product from "../../components/product";
import ListAnimeModel from "../../models/listAnimeModel";
import GalleryService from "../../services/listAnimeService";
export default function Categories() {
  const [Categoriesdata, setCategoriesdata] = useState<ListAnimeModel[]>();

  useEffect(() => {
    GetCategories();
  }, []);

  function GetCategories() {
    GalleryService.CategoriesAnimeService.getListAnime(
      "0",
      "1",
      "50",
      "web",
      "th_TH"
    )
      .then((res) => {
        setCategoriesdata(res.data);
        console.log(res.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  return (
    <>
      <Loading />
      <Header />
      <section className="product spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="trending__product">
                <div className="row">
                  <div className="col-lg-8 col-md-8 col-sm-8">
                    <div className="section-title">
                      {Categoriesdata?.map((item, index) => {
                        <h4>หมวดหมู่ : {item.styles}</h4>;
                      })}
                    </div>
                  </div>
                </div>
                <div className="row">
                  {Categoriesdata?.map((item, index) => (
                    <div className="col-lg-4 col-md-6 col-sm-6">
                      <div className="product__item">
                        <div
                          className="product__item__pic set-bg"
                          data-setbg=""
                        >
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
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

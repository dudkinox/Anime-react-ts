import { useEffect, useState } from "react";
import ListAnimeModel from "../models/listAnimeModel";
import ListAnimeService from "../services/listAnimeService";

export default function TopTen() {
  const [listAnime, setListAnime] = useState<ListAnimeModel[]>();
  var numeral = require("numeral");
  useEffect(() => {
    GetDataShowTen();
  }, []);

  function GetDataShowTen() {
    ListAnimeService.getListAnime("1", "30", "web", "th_TH")
      .then((res) => {
        const view = [];
        for (var i = 0; i < res.data.length; i++) {
          var split = res.data[i].view.split(" ");
          var check = split[0];
          var change = numeral(check);
          const data = {
            detail: res.data[i],
            value: change._value,
          };
          view.push(data);
        }
        const newdata = view.sort(function (a, b) {
          return b.value - a.value;
        });
        const showTen = [];
        for (var k = 0; k < newdata.length; k++) {
          if (showTen.length < 10) {
            showTen.push(newdata[k].detail);
          }
        }
        setListAnime(showTen);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  return (
    <div className="col-lg-4 col-md-6 col-sm-8">
      <div className="product__sidebar">
        <div className="product__sidebar__view">
          <div className="section-title">
            <h5>10 อันดับ</h5>
          </div>
          <ul className="filter__controls">
            <li className="active" data-filter="*">
              Day
            </li>
            <li data-filter=".week">Week</li>
            <li data-filter=".month">Month</li>
            <li data-filter=".years">Years</li>
          </ul>
            {listAnime?.map(
              (item: ListAnimeModel, index) => (
                console.log(item.cover),
                (
                  
                  <div className="filter__gallery" key={index}>
                    <div
                      
                      className="product__sidebar__view__item set-bg mix day years"
                      data-setbg={item.cover}
                    >
                      <img src={item.cover} alt="" />
                      <div className="ep">{item.episode_id}</div>
                      <div className="view">
                        <i className="fa fa-eye" /> {item.view}
                      </div>
                      <h5>
                        <a href="#">{item.title}</a>
                      </h5>
                    </div>
                  </div>
                )
              )
            )}
        </div>
        <div className="product__sidebar__comment">
          <div className="section-title">
            <h5>New Comment</h5>
          </div>
          <div className="product__sidebar__comment__item">
            <div className="product__sidebar__comment__item__pic">
              <img src="img/sidebar/comment-1.jpg" alt="" />
            </div>
            <div className="product__sidebar__comment__item__text">
              <ul>
                <li>Active</li>
                <li>Movie</li>
              </ul>
              <h5>
                <a href="#">The Seven Deadly Sins: Wrath of the Gods</a>
              </h5>
              <span>
                <i className="fa fa-eye" /> 19.141 Viewes
              </span>
            </div>
          </div>
          <div className="product__sidebar__comment__item">
            <div className="product__sidebar__comment__item__pic">
              <img src="img/sidebar/comment-2.jpg" alt="" />
            </div>
            <div className="product__sidebar__comment__item__text">
              <ul>
                <li>Active</li>
                <li>Movie</li>
              </ul>
              <h5>
                <a href="#">Shirogane Tamashii hen Kouhan sen</a>
              </h5>
              <span>
                <i className="fa fa-eye" /> 19.141 Viewes
              </span>
            </div>
          </div>
          <div className="product__sidebar__comment__item">
            <div className="product__sidebar__comment__item__pic">
              <img src="img/sidebar/comment-3.jpg" alt="" />
            </div>
            <div className="product__sidebar__comment__item__text">
              <ul>
                <li>Active</li>
                <li>Movie</li>
              </ul>
              <h5>
                <a href="#">Kizumonogatari III: Reiket su-hen</a>
              </h5>
              <span>
                <i className="fa fa-eye" /> 19.141 Viewes
              </span>
            </div>
          </div>
          <div className="product__sidebar__comment__item">
            <div className="product__sidebar__comment__item__pic">
              <img src="img/sidebar/comment-4.jpg" alt="" />
            </div>
            <div className="product__sidebar__comment__item__text">
              <ul>
                <li>Active</li>
                <li>Movie</li>
              </ul>
              <h5>
                <a href="#">Monogatari Series: Second Season</a>
              </h5>
              <span>
                <i className="fa fa-eye" /> 19.141 Viewes
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

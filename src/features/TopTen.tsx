import { useEffect, useState } from "react";
import ListAnimeModel from "../models/listAnimeModel";
import GalleryService from "../services/listAnimeService";
import Moment from "moment";
import { Themes } from "../themes/color";

interface TopTenProps {
  bypassImages(url: string): string;
  local: string;
}

export default function TopTen({ bypassImages, local }: TopTenProps) {
  const [listAnime, setListAnime] = useState<ListAnimeModel[]>();
  const [dateNow, setDateNow] = useState<string>("");

  useEffect(() => {
    Moment.locale("en");
    const dt = Date();
    setDateNow(Moment(dt).format("DD/MM/YYYY"));
  }, []);

  var numeral = require("numeral");
  useEffect(() => {
    function GetDataShowTen() {
      GalleryService.ListAnimeService.getListAnime("1", "30", "web", `${local}`)
        .then((res) => {
          const view = [];
          for (var i = 0; i < res.data.length; i++) {
            var split = res.data[i].view.split(" ");
            var check = split[0].toLowerCase();
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
    GetDataShowTen();
  }, [local, numeral]);

  return (
    <div className="col-lg-4 col-md-6 col-sm-8">
      <div className="product__sidebar">
        <div className="product__sidebar__view" style={{ marginBottom: 310 }}>
          <div className="section-title">
            <h5>10 อันดับ</h5>
          </div>
          <ul className="filter__controls">
            <li className="active" data-filter="*">
              {dateNow}
            </li>
          </ul>
          {listAnime?.map((item: ListAnimeModel, index) => (
            <div className="filter__gallery" key={index}>
              <div
                className="product__sidebar__view__item set-bg mix day years"
                style={{ marginBottom: 300 }}
              >
                <img src={bypassImages(item.cover)} alt="" />
                <div className="ep">{item.episode_id}</div>
                <div className="view">
                  <i className="fa fa-eye" /> {item.view}
                </div>
                <h5
                  style={{
                    marginBlock: -320,
                    backgroundColor: Themes.buttonshow,
                  }}
                >
                  <a href={`https://www.bilibili.tv/th/play/${item.season_id}`}>
                    {item.title}
                  </a>
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

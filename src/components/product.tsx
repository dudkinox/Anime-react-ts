import { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import ListAnimeModel from "../models/listAnimeModel";
import GalleryService from "../services/listAnimeService";

interface Props {
  local: string;
}

export default function Product({ local }: Props) {
  const [listAnime, setListAnime] = useState<ListAnimeModel[]>();
  const [entries, setEntries] = useState("");
  const [query, setQuery] = useState("");

  const bypassImages = (url: string) => {
    const formatUrl = url.split("https://pic.bstarstatic.com/ogv/");
    return "assets/" + formatUrl[1];
  };

  useEffect(() => {
    const fetchData = async () => {
      GalleryService.CategoriesAnimeService.getListAnimeCategory()
        .then((res) => {
          setListAnime(res.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    };

    fetchData();
  }, [entries, local]);

  const optionSelect = [
    {
      value: 10,
    },
    {
      value: 25,
    },
    {
      value: 50,
    },
    {
      value: 100,
    },
  ];

  return (
    <section className="product">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
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
                      className="search-box"
                      style={{ border: "none", borderRadius: "10px" }}
                      placeholder={
                        local === "th_TH"
                          ? "ค้นหาเรื่องที่ชื่นชอบ"
                          : "Search Movie"
                      }
                      onChange={(event) => setQuery(event.target.value)}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="btn__all text-white">
                    <Row>
                      <Col xs={6}>
                        <Form.Group>
                          <Form.Control
                            as="select"
                            onChange={(e) => setEntries(e.target.value)}
                            value={entries}
                            className="bg-dark text-white"
                          >
                            {optionSelect.map((option, index) => {
                              return (
                                <option value={option.value} key={index}>
                                  {option.value}
                                </option>
                              );
                            })}
                          </Form.Control>
                        </Form.Group>
                      </Col>
                      <Col xs={6}>
                        <a href="#all">
                          ดูทั้งหมด <span className="arrow_right" />
                        </a>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6" key="1">
                  <div className="product__item">
                    <div className="product__item__pic set-bg">
                      <img src="https://picsum.photos/200/300" alt="" />
                      <div className="ep">18 / 18</div>
                      <div className="view">
                        <i className="fa fa-eye" /> 1121212
                      </div>
                    </div>
                    <div className="product__item__text">
                      <ul>
                        <li>จบแล้ว</li>
                      </ul>
                      <h5>
                        <a
                          href={`https://www.bilibili.tv/th/play/post.season_id`}
                        >
                          "post.title"
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

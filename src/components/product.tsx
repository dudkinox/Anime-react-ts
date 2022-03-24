import { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import TopTen from "../features/TopTen";

import ListAnimeModel from "../models/listAnimeModel";
import GalleryService from "../services/listAnimeService";
import Pagination from "./pagination/Pagination";

export default function Product() {
  const [listAnime, setListAnime] = useState<ListAnimeModel[]>();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(3);
  const [entries, setEntries] = useState("");

  const handlePrevPage = (prevPage: number) => {
    setPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = (nextPage: number) => {
    setPage((nextPage) => nextPage + 1);
  };

  const bypassImages = (url: string) => {
    const formatUrl = url.split("https://pic.bstarstatic.com/ogv/");
    return "assets/" + formatUrl[1];
  };

  useEffect(() => {
    const fetchData = async () => {
      GalleryService.ListAnimeService.getListAnime(
        `${page}`,
        `${entries}`,
        "web",
        "th_TH"
      )
        .then((res) => {
          setListAnime(res.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    };

    fetchData();
  }, [page, entries]);

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
              {listAnime?.length.toString() === entries.toString() ? (
                <Pagination
                  totalPages={totalPages}
                  currentPage={page}
                  handlePrevPage={handlePrevPage}
                  handleNextPage={handleNextPage}
                />
              ) : (
                <Pagination
                  totalPages={totalPages}
                  currentPage={page}
                  handlePrevPage={handlePrevPage}
                  handleNextPage={handleNextPage}
                />
              )}
              ;
            </div>
          </div>
          <TopTen bypassImages={bypassImages} />
        </div>
      </div>
    </section>
  );
}

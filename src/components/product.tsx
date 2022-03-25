import { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import TopTen from "../features/TopTen";
import ListAnimeModel from "../models/listAnimeModel";
import GalleryService from "../services/listAnimeService";
import Pagination from "./pagination/Pagination";

interface Props {
  local: string;
  category: number;
}

export default function Product({ local, category }: Props) {
  const [listAnime, setListAnime] = useState<ListAnimeModel[]>();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(3);
  const [entries, setEntries] = useState("");
  const [query, setQuery] = useState("");

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
      GalleryService.CategoriesAnimeService.getListAnimeCategory(
        `${category}`,
        `${page}`,
        `${entries}`,
        "web",
        `${local}`
      )
        .then((res) => {
          setListAnime(res.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    };

    fetchData();
  }, [page, entries, local, category]);

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
                {listAnime
                  ?.filter((post) => {
                    if (query === "") {
                      return post;
                    } else if (
                      post.title.toLowerCase().includes(query.toLowerCase())
                    ) {
                      return post;
                    }
                  })
                  .map((post, index) => (
                    <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                      <div className="product__item">
                        <div
                          className="product__item__pic set-bg"
                          data-setbg=""
                        >
                          <img src={bypassImages(post.cover)} alt="" />
                          <div className="ep">18 / 18</div>
                          <div className="view">
                            <i className="fa fa-eye" /> {post.view}
                          </div>
                        </div>
                        <div className="product__item__text">
                          <ul>
                            <li>
                              {post.index_show === "เสร็จแล้ว"
                                ? "จบแล้ว"
                                : post.index_show}
                            </li>
                          </ul>
                          <h5>
                            <a
                              href={`https://www.bilibili.tv/th/play/${post.season_id}`}
                            >
                              {post.title}
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
          <TopTen bypassImages={bypassImages} local={local} />
        </div>
      </div>
    </section>
  );
}

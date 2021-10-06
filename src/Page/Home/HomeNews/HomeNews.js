import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { LikeOutlined, CommentOutlined } from "@ant-design/icons";
import { Button } from "antd";
export default function HomeNews() {
  const { listNews } = useSelector((state) => state.managementArticlesReducer);
  const [state, setState] = useState({
    film: true,
    review: false,
    bonus: false,
    first: 0,
    last: 7,
  });

  const renderNews = () => {
    if (listNews.length > 0) {
      const listNewsView = [];
      for (let i = state.first; i < state.last; i += 8) {
        listNewsView.push(
          <Fragment key={i}>
            <div className="col-span-4 row-span-6">
              <img
                style={{ borderRadius: "8px", objectFit: "cover" }}
                src={listNews[i].image_full}
                alt={listNews[i].news_title}
                className="cursor-pointer"
              />

              <div>
                <h3 className="text-base font-bold cursor-pointer hover:text-yellow-700">
                  {listNews[i].news_title}
                </h3>
                <p>
                  {listNews[i].news_description.length > 200
                    ? listNews[i].news_description.slice(0, 200) + "..."
                    : listNews[i].news_description}
                </p>
                <ul className="flex items-center ">
                  <li className="mr-4">
                    <a href="#" className="mr-3">
                      <LikeOutlined />
                    </a>
                    <span className="mt-2">{listNews[i].up_vote}</span>
                  </li>
                  <li className="mr-4">
                    <a href="#" className="mr-3">
                      <CommentOutlined />
                    </a>
                    <span className="mt-2">{listNews[i].total_comment}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-span-4 row-span-6 ">
              <img
                style={{
                  borderRadius: "8px",
                  objectFit: "cover",
                  width: "100%",
                  heigth: "100%",
                }}
                src={listNews[i + 1].image_full}
                alt={listNews[i + 1].news_title}
              />

              <div>
                <h3 className="text-base font-bold cursor-pointer hover:text-yellow-700">
                  {listNews[i + 1].news_title}
                </h3>
                <p>
                  {listNews[i + 1].news_description.length > 200
                    ? listNews[i + 1].news_description.slice(0, 200) + "..."
                    : listNews[i + 1].news_description}
                </p>
              </div>
              <ul className="flex items-center ">
                <li className="mr-4">
                  <a href="#" className="mr-3">
                    <LikeOutlined />
                  </a>
                  <span className="mt-2">{listNews[i + 1].up_vote}</span>
                </li>
                <li className="mr-4">
                  <a href="#" className="mr-3">
                    <CommentOutlined />
                  </a>
                  <span className="mt-2">{listNews[i + 1].total_comment}</span>
                </li>
              </ul>
            </div>
            <div className="col-span-3 row-span-4">
              <img
                style={{ borderRadius: "8px", objectFit: "cover" }}
                src={listNews[i + 2].image_full}
                alt={listNews[i + 2].news_title}
              />
              <div>
                <h3 className="text-base font-bold cursor-pointer hover:text-yellow-700">
                  {listNews[i + 2].news_title}
                </h3>
                <p>
                  {listNews[i + 2].news_description.length > 150
                    ? listNews[i + 2].news_description.slice(0, 150) + "..."
                    : listNews[i + 2].news_description}
                </p>
              </div>
              <ul className="flex items-center ">
                <li className="mr-4">
                  <a href="#" className="mr-3">
                    <LikeOutlined />
                  </a>
                  <span className="mt-2">{listNews[i + 2].up_vote}</span>
                </li>
                <li className="mr-4">
                  <a href="#" className="mr-3">
                    <CommentOutlined />
                  </a>
                  <span className="mt-2">{listNews[i + 2].total_comment}</span>
                </li>
              </ul>
            </div>
            <div className="col-span-3 row-span-4">
              <img
                style={{ borderRadius: "8px", objectFit: "cover" }}
                src={listNews[i + 3].image_full}
                alt={listNews[i + 3].news_title}
              />
              <div>
                <h3 className="text-base font-bold cursor-pointer hover:text-yellow-700">
                  {listNews[i + 3].news_title}
                </h3>
                <p>
                  {listNews[i + 3].news_description.length > 150
                    ? listNews[i + 3].news_description.slice(0, 150) + "..."
                    : listNews[i + 3].news_description}
                </p>
              </div>
              <ul className="flex items-center ">
                <li className="mr-4">
                  <a href="#" className="mr-3">
                    <LikeOutlined />
                  </a>
                  <span className="mt-2">{listNews[i + 3].up_vote}</span>
                </li>
                <li className="mr-4">
                  <a href="#" className="mr-3">
                    <CommentOutlined />
                  </a>
                  <span className="mt-2">{listNews[i + 3].total_comment}</span>
                </li>
              </ul>
            </div>
            <div className="col-span-2 row-span-1">
              <div className="flex">
                <img
                  style={{
                    borderRadius: "8px",
                    objectFit: "cover",
                    width: 50,
                    height: 50,
                  }}
                  src={listNews[i + 4].image_full}
                  alt={listNews[i + 4].news_title}
                />
                <p className="ml-2 font-bold cursor-pointer hover:text-yellow-700">
                  {listNews[i + 4].news_title.length > 35
                    ? listNews[i + 4].news_title.slice(0, 35) + "..."
                    : listNews[i + 4].news_title}
                </p>
              </div>
            </div>
            <div className="col-span-2 row-span-1">
              <div className="flex">
                <img
                  style={{
                    borderRadius: "8px",
                    objectFit: "cover",
                    width: 50,
                    height: 50,
                  }}
                  src={listNews[i + 5].image_full}
                  alt={listNews[i + 5].news_title}
                />
                <p className="ml-2 font-bold cursor-pointer hover:text-yellow-700">
                  {listNews[i + 5].news_title.length > 35
                    ? listNews[i + 5].news_title.slice(0, 35) + "..."
                    : listNews[i + 5].news_title}
                </p>
              </div>
            </div>
            <div className="col-span-2 row-span-1">
              <div className="flex">
                <img
                  style={{
                    borderRadius: "8px",
                    objectFit: "cover",
                    width: 50,
                    height: 50,
                  }}
                  src={listNews[i + 6].image_full}
                  alt={listNews[i + 6].news_title}
                />
                <p className="ml-2 font-bold cursor-pointer hover:text-yellow-700">
                  {listNews[i + 6].news_title.length > 35
                    ? listNews[i + 6].news_title.slice(0, 35) + "..."
                    : listNews[i + 6].news_title}
                </p>
              </div>
            </div>
            <div className="col-span-2 row-span-1">
              <div className="flex">
                <img
                  style={{
                    borderRadius: "8px",
                    objectFit: "cover",
                    width: 50,
                    height: 50,
                  }}
                  src={listNews[i + 7].image_full}
                  alt={listNews[i + 7].news_title}
                />
                <p className="ml-2 font-bold cursor-pointer hover:text-yellow-700">
                  {listNews[i + 7].news_title.length > 35
                    ? listNews[i + 7].news_title.slice(0, 35) + "..."
                    : listNews[i + 7].news_title}
                </p>
              </div>
            </div>
          </Fragment>
        );
      }
      return listNewsView;
    }
  };
  return (
    <div className="container" id="news">
      <div
        style={{
          paddingTop: "120px",
          background: "url(https://tix.vn/app/assets/img/icons/back-news.png)",
          backgroundSize: " 100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="mx-auto text-center mb-5">
        <ul className="flex items-end justify-center">
          <li>
            <span
              className={`${state.film ? "active" : ""} homeMovie-title `}
              onClick={() => {
                setState({
                  first: 0,
                  last: 7,
                  film: true,
                  review: false,
                  bonus: false,
                });
              }}
            >
              Điện Ảnh 24h
            </span>
          </li>
          <li>
            <span
              className={`${state.review ? "active" : ""} homeMovie-title `}
              onClick={() => {
                setState({
                  first: 8,
                  last: 15,
                  film: false,
                  review: true,
                  bonus: false,
                });
              }}
            >
              Review
            </span>
          </li>
          <li>
            <span
              className={`${state.bonus ? "active" : ""} homeMovie-title `}
              onClick={() => {
                setState({
                  first: 16,
                  last: 23,
                  film: false,
                  review: false,
                  bonus: true,
                });
              }}
            >
              Khuyến mãi
            </span>
          </li>
        </ul>
      </div>
      <div className="grid-cols-8 gap-5" style={{ display: "grid" }}>
        {renderNews()}
      </div>
      <div className="my-16 text-center">
        <Button>Xem Thêm</Button>
      </div>
    </div>
  );
}

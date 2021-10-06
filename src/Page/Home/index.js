import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getListNewsAction } from "../../redux/actions/ManagementArticlesActions";
import { getInfoCinemaSystemByIdAction } from "../../redux/actions/ManagementCinemaActions";

import { getListFilmAction } from "../../redux/actions/ManagementFilmActions";
import HomeApp from "./HomeApp/HomeApp";
import Carousel from "./HomeCarousel/HomeCarousel";
import HomeCinemaComplex from "./HomeCinemaComplex/HomeCinemaComplex";
import HomeMovie from "./HomeMovie/HomeMovie";
import HomeNews from "./HomeNews/HomeNews";
import HomeTool from "./HomeTool/HomeTool";

export default function Home(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListFilmAction());
    dispatch(getInfoCinemaSystemByIdAction());
    dispatch(getListNewsAction());
  }, []);
  const hanldeRenderHomeTool = () => {
    return <HomeTool {...props} />;
  };
  return (
    <div>
      <Carousel />
      {hanldeRenderHomeTool()}
      <HomeMovie />
      <HomeCinemaComplex {...props} />
      <HomeNews />
      <HomeApp />
    </div>
  );
}

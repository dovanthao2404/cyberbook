import React, { useEffect } from "react";
import "react-circular-progressbar/dist/styles.css";
import { useDispatch } from "react-redux";
import { getShowtimesByFilmIdAction } from "../../redux/actions/ManagementCinemaActions";
import DetailMainTop from "./DetailMainTop/DetailMainTop";
import DetailShowtimes from "./DetailShowtimes/DetailShowtimes";
export default function Detail(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getShowtimesByFilmIdAction(props.match.params.id));
  }, []);
  return (
    <>
      <DetailMainTop />
      <DetailShowtimes {...props} />
    </>
  );
}

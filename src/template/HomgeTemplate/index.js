import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";
import { getListCinemaSystemAction } from "../../redux/actions/ManagementCinemaActions";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";

const HomeTemplate = ({ Component, ...props }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  useEffect(() => {
    dispatch(getListCinemaSystemAction());
  }, []);

  return (
    <Route
      {...props}
      render={(propsRoute) => {
        return (
          <>
            <Header />
            <Component {...propsRoute} />
            <Footer />
          </>
        );
      }}
    />
  );
};
export default HomeTemplate;

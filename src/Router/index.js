import Detail from "../Page/Detail";
import Home from "../Page/Home";
import HomeTemplate from "../template/HomgeTemplate";

const ListHomePage = [
  {
    Component: Home,
    exact: true,
    path: "/",
  },
  {
    Component: Home,
    exact: false,
    path: "/home",
  },
  {
    Component: Detail,
    exact: false,
    path: "/detail/:id",
  },
];

// const UserTemplate = [];
// const CheckoutTemplate = [];

// const AdminTemplate = [];

export const HomeRoute = () =>
  ListHomePage.map((HomeItem, index) => (
    <HomeTemplate
      key={index}
      Component={HomeItem.Component}
      exact={HomeItem.exact}
      path={HomeItem.path}
    />
  ));

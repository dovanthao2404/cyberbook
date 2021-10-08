import Checkout from "../Page/Checkout";
import Detail from "../Page/Detail";
import Home from "../Page/Home";
import CheckoutTemplate from "../template/CheckoutTemplate";
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

const ListCheckout = [
  {
    Component: Checkout,
    exact: false,
    path: "/checkout/:id",
  },
];

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

export const CheckoutRoute = () =>
  ListCheckout.map((Checkout, index) => (
    <CheckoutTemplate
      key={index}
      Component={Checkout.Component}
      exact={Checkout.exact}
      path={Checkout.path}
    />
  ));

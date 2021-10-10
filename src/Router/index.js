import Dashboard from "../Page/Admin/Dashboard/Dashboard";
import AddFilm from "../Page/Admin/Film/AddFilm/AddFilm";
import EditFilm from "../Page/Admin/Film/EditFilm/EditFilm";
import ManagementFilm from "../Page/Admin/Film/ManagementFim/ManagementFilm";
import Showtimes from "../Page/Admin/Film/Showtimes/Showtimes";
import ManagementUser from "../Page/Admin/ManagementUser/ManagementUser";
import AddUser from "../Page/Admin/User/AddUser/AddUser";
import Checkout from "../Page/Checkout";
import Detail from "../Page/Detail";
import Home from "../Page/Home";
import Profile from "../Page/Profile";
import AdminTemplate from "../template/AdminTemplate";
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
  { Component: Profile, exact: false, path: "/profile/:id" },
];

const ListCheckout = [
  {
    Component: Checkout,
    exact: false,
    path: "/checkout/:id",
  },
];

const ListAdmin = [
  {
    Component: Dashboard,
    exact: true,
    path: "/admin",
  },
  {
    Component: Dashboard,
    exact: true,
    path: "/admin/dashboard",
  },
  {
    Component: ManagementUser,
    exact: false,
    path: "/admin/management-user",
  },
  {
    Component: AddUser,
    exact: false,
    path: "/admin/add-user",
  },
  {
    Component: AddFilm,
    exact: false,
    path: "/admin/add-film",
  },

  {
    Component: ManagementFilm,
    exact: false,
    path: "/admin/management-films",
  },
  {
    Component: EditFilm,
    exact: false,
    path: "/admin/edit-film/:id",
  },
  {
    Component: Showtimes,
    exact: false,
    path: "/admin/showtimes/:id",
  },
];

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

export const AdminRoute = () =>
  ListAdmin.map((admin, index) => (
    <AdminTemplate
      key={index}
      Component={admin.Component}
      exact={admin.exact}
      path={admin.path}
    />
  ));

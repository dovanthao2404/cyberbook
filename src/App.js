// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import { signInAction } from "./redux/actions/ManagementUserActions";
import { AdminRoute, CheckoutRoute, HomeRoute } from "./Router";
import LoginAdmin from "./template/LoginAdmin";
import PageNotFound from "./template/PageNotFound";
// import { USER_LOGIN } from "./utils/setting/config";

function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   const userLoginLocal = JSON.parse(localStorage.getItem(USER_LOGIN));
  //   console.log(userLoginLocal);
  //   const info = {
  //     taiKhoan: userLoginLocal.taiKhoan,
  //     matKhau: userLoginLocal.matKhau,
  //   };
  //   dispatch(signInAction(info));
  // }, []);
  return (
    <BrowserRouter>
      <Switch>
        {HomeRoute()}
        {CheckoutRoute()}
        {AdminRoute()}
        <Route path="/login-admin" component={LoginAdmin} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

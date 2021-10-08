import { BrowserRouter, Switch, Route } from "react-router-dom";
import Checkout from "./Page/Checkout";
import { CheckoutRoute, HomeRoute } from "./Router";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {HomeRoute()}
        {CheckoutRoute()}
      </Switch>
    </BrowserRouter>
  );
}

export default App;

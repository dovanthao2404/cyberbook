import { BrowserRouter, Switch } from "react-router-dom";
import { HomeRoute } from "./Router";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <HomeRoute />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

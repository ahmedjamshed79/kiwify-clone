import "./App.css";
import { Switch, Route } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        {<Signup />}
      </Route>
      <Route path="/login">
        {<Login />}
      </Route>
    </Switch>
  );
}

export default App;

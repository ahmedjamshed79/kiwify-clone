import "./App.css";
import { Switch, Route } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Modal from "./modal/Modal";
import { useState } from "react";

function App() {
  const [open, setIsOpen] = useState(false)

  const closeHandler = () => {
    setIsOpen(false);
  }
  return (
    // <Switch>
    //   <Route exact path="/">
    //     {<Signup />}
    //   </Route>
    //   <Route path="/login">
    //     {<Login />}
    //   </Route>
    // </Switch>
    
    <Modal/>
    
  );
}

export default App;

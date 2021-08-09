import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "../component/Menu/Menu";
import Barang from "../pages/Barang/Barang";
import CreateBarang from "../pages/Barang/CreateBarang";
import UpdateBarang from "../pages/Barang/UpdateBarang";
import Home from "../pages/Home/Home";
const Routes = () => {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/barang" exact component={Barang} />
        <Route path="/create_barang" exact component={CreateBarang} />
        <Route path="/update_barang/:id" exact component={UpdateBarang} />
      </Switch>
    </Router>
  );
};

export default Routes;

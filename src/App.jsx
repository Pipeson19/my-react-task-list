import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Tareas from "./components/Tareas";
import SobreNosotros from "./components/SobreNosotros";
import Menu from "./components/Menu";

export function App() {
  return (
    <Router>
      <div>
        <Menu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/tareas" component={Tareas} />
          <Route path="/sobre-nosotros" component={SobreNosotros} />
        </Switch>
      </div>
    </Router>
  );
}

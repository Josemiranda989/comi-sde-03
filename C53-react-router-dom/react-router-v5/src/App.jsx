import "./App.css";
import AnimeFetch from "./components/AnimeFetch";
import { Counter } from "./components/Counter";
import { Form } from "./components/Form";
import { StateFullSimpleClass } from "./components/StateFullSimpleClass";
import { StatelessClass } from "./components/StatelessClass";
import { Navbar } from "./components/Navbar";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <hr />

      <Switch>
        <Route
          path="/"
          exact
          component={() => (
            <h3> Class Components - Ciclo de vida de un componente </h3>
          )}
        />
        {/* <StatelessClass />  */}
        <Route path="/state-less" component={StatelessClass} />

        {/* <StateFullSimpleClass /> */}
        <Route path="/state-full" component={StateFullSimpleClass} />

        {/* <Counter /> */}
        <Route path="/counter" component={Counter} />

        {/* <Form /> */}
        <Route path="/form" component={Form} />

        {/* <AnimeFetch />  */}
        <Route path="/anime" component={AnimeFetch} />
      </Switch>
    </>
  );
}

export default App;

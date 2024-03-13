import "./App.css";
import AnimeFetch from "./components/AnimeFetch";
import { Counter } from "./components/Counter";
import { Form } from "./components/Form";
import { StateFullSimpleClass } from "./components/StateFullSimpleClass";
import { StatelessClass } from "./components/StatelessClass";
import { Navbar } from "./components/Navbar";
import { Test } from "./components/Test";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <hr />

      <Routes>
        <Route
          path="/"
          exact
          element={() => (
            <h3> Class Components - Ciclo de vida de un componente </h3>
          )}
        />
        {/* <StatelessClass />  */}
        <Route path="/state-less" element={<StatelessClass />} />

        {/* <StateFullSimpleClass /> */}
        <Route path="/state-full" element={<StateFullSimpleClass />} />

        {/* <Counter /> */}
        <Route path="/counter" element={<Counter />} />

        {/* <Form /> */}
        <Route path="/form" element={<Form />} />

        {/* <AnimeFetch />  */}
        <Route path="/anime" element={<AnimeFetch />} />

        {/* Test */}
        <Route path="/test/:id" element={<Test />} />
      </Routes>
    </>
  );
}

export default App;

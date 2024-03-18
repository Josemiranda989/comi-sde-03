import "./App.css";
import ApiCallList from "./components/ApiCallList";
import { Counter } from "./components/Counter";
import FocusInput from "./components/FocusInput";

function App() {
  return (
    <>
      <h1>Hooks</h1>
      <hr />
      <FocusInput />
      <hr />
      <Counter />
      <hr />
      <ApiCallList />
      <hr />
    </>
  );
}

export default App;

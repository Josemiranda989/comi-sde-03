import "./App.css";
import { PokemonsList } from "./components/PokemonsList";
import { SimpleProps } from "./components/SimpleProps";

function App() {
  return (
    <>
      <h1>Trabajando con Componentes</h1>
      <SimpleProps nombre="Juan" />
      <SimpleProps nombre="Jose" />
      <hr />
      <PokemonsList />
    </>
  );
}

export default App;

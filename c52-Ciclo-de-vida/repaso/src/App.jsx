import './App.css'
import AnimeFetch from './components/AnimeFetch'
import { Counter } from './components/Counter'
import { Form } from './components/Form'
import { StateFullSimpleClass } from './components/StateFullSimpleClass'
import { StatelessClass } from './components/StatelessClass'

function App() {

  return (
    <>
      <h3> Class Components - Ciclo de vida de un component </h3>

      <StatelessClass /> {/* Componente de clase sin estado */}
      <hr />
      <StateFullSimpleClass />
      <hr />
      <Counter />
      <hr />
      <Form />
      <hr />
      <AnimeFetch />
    </>
  )
}

export default App

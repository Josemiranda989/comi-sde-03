import { Link } from "react-router-dom";
import logo from "../assets/react.svg";

export function Navbar() {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  return (
    <nav className="navbar">
      <Link to="/">
        <img src={logo} alt="logo de la pagina" />
      </Link>
      <ul>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
        <li>
          <Link to="/state-full">StateFullSimpleClass</Link>
        </li>
        <li>
          <Link to="/form">Form</Link>
        </li>
        <li>
          <Link to="/anime">AnimeFetch</Link>
        </li>
        <li>
          <Link to="/state-less">StatelessClass</Link>
        </li>
        <li>
          <Link to={`/test/${getRandomInt(20)}`}>UseParamsRandom</Link>
        </li>
      </ul>
    </nav>
  );
}

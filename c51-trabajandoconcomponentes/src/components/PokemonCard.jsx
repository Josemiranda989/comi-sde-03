import "./PokemonCard.css";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
export const PokemonCard = ({ nombre, tipo, nivel, children }) => {
  //   console.log(props);
  return (
    <div className="bgColor spacing">
      <h3>Nombre: {nombre || "Pokemon Legendario"}</h3>
      <p>Tipo: {tipo}</p>
      <p>Nivel: {nivel}</p>
      {children}
    </div>
  );
};

PokemonCard.propTypes = {
  nombre: PropTypes.string.isRequired,
  nivel: PropTypes.number,
};

// PokemonCard.defaultProps = {
//   nombre: "Snorlax",
// };

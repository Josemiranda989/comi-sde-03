import { PokemonCard } from "./PokemonCard";
import styles from "./PokemonsList.module.css";

export const PokemonsList = () => {
  const pokemons = [
    {
      nombre: "Pikachu",
      tipo: "Eléctrico",
      nivel: 25,
    },
    {
      nombre: "Charmander",
      tipo: "Fuego",
      nivel: 20,
    },
    {
      nombre: "Bulbasaur",
      tipo: "Planta",
      nivel: 18,
    },
  ];

  return (
    <div className={`${styles.container} ${styles.bgColor}`}>
      {pokemons.map((pokemon, i) => (
        <PokemonCard
          key={i}
          nombre={pokemon.nombre}
          nivel={pokemon.nivel}
          tipo={pokemon.tipo}
          //{...pokemon}
          //pokemon={pokemon}
        >
          <small>Fin del pokemon</small>
          <hr />
        </PokemonCard>
      ))}
    </div>
  );
};

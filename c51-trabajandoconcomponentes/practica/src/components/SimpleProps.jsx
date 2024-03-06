// export const SimpleProps = (props) => {
export const SimpleProps = ({ nombre }) => {
  //   console.log(props);

  return (
    <div>
      {/* <h2>Bienvenido: {props.nombre}</h2> */}
      <h2>Bienvenido: {nombre}</h2>
    </div>
  );
};

// data.pokemon?.name

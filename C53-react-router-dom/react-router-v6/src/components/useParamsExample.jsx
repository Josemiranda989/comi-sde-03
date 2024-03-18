import { useParams } from "react-router-dom";

export function Test() {
  const { id } = useParams();
  // console.log(useParams());
  return (
    <>
      <h4>El numero que salió es: {id}</h4>
      {id < 5 && <p>El numero es menor a 5</p>}
      {id > 5 && <p>El numero es mayor a 5</p>}
      {id == 5 && <p>Acertaste</p>}
    </>
  );
}

import { useEffect, useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Se renderizó por primera vez");
  }, []);

  useEffect(() => {
    console.log("Se actualizó el estado");
  }, [count]);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>El valor del contador es : {count}</h2>
      <button onClick={handleIncrement}> Multiplicar numero </button>
    </div>
  );
};

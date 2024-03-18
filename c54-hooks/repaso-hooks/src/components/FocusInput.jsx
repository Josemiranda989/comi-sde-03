import { useState, useEffect, useRef } from "react";

const FocusInput = () => {
  const [name, setName] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const showName = () => {
    // alert(`El nombre es ${inputRef.current.value}`);
    setName(inputRef.current.value);
    inputRef.current.style.backgroundColor = "black";
    inputRef.current.value = "";
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={showName}>Mostrar nombre</button>
      {name && <p>El nombre es: {name}</p>}
    </div>
  );
};

export default FocusInput;

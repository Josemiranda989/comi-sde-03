import { useState, useEffect } from "react";

const ApiCallList = () => {
  const [planets, setPlanets] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://swapi.dev/api/planets/")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setPlanets(data.results);
        setCount(data.count);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h2>
        Show Planets {planets.length || 0} of {count || 0}
      </h2>
      <div className="container">
        {loading && <p>loading all planets...</p>}

        {error && <p>{error.message}</p>}

        {planets.length > 0 &&
          planets?.map((p, i) => {
            return (
              <div key={i} className="card">
                <h3>Planet: {p.name}</h3>
                <p>Diameter: {p.diameter}</p>
                <p>Climate: {p.climate}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ApiCallList;

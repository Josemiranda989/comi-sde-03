window.onload = async () => {
  const app = document.getElementById("root");
  const container = document.createElement("div");
  container.setAttribute("class", "container");
  app.appendChild(container);

  // Aqui debemos agregar nuestro fetch
  const response = await fetch("http://localhost:4000/api/movies")
  let peliculas = await response.json()

  let data = peliculas.data;

  // Obtener de localStorage los favoritos en string y convertirlo a array
  let favoritasStr = localStorage.getItem("favoritas")
  let favoritas = favoritasStr.split(",")

  // Filtrar peliculas que coincidan con los favoritos
  const peliculasFavoritas = data.filter((movie)=>{
      // console.log(favoritas.includes(String(movie.id)));
      return favoritas.includes(String(movie.id))
    })

    peliculasFavoritas.forEach((movie) => {
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      const h1 = document.createElement("h1");
      h1.textContent = movie.title;

      const p = document.createElement("p");
      p.textContent = `Rating: ${movie.rating}`;

      const duracion = document.createElement("p");
      duracion.textContent = `Duración: ${movie.length}`;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
      if (movie.genre !== null) {
        const genero = document.createElement("p");
        genero.textContent = `Genero: ${movie.genre.name}`;
        card.appendChild(genero);
      }
      card.appendChild(duracion);
    });

};

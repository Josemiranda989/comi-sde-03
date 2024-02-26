function agregarFavorito(id){
  let favoritas = localStorage.getItem("favoritas")
  if(favoritas){
    let arr = favoritas.split(',')
    arr.push(id)
    localStorage.setItem("favoritas", arr)
    // console.log(localStorage.getItem("favoritas"));
  } else {
    localStorage.setItem("favoritas", id)
    // console.log(localStorage.getItem("favoritas"));
  }
}

window.onload = async () => {
  const app = document.getElementById("root");
  const container = document.createElement("div");

  container.setAttribute("class", "container");
  app.appendChild(container);

  // Aqui debemos agregar nuestro fetch
  const getMovies = async function (URI) {
    const response = await fetch(URI);
    const data = await response.json();
    return data.data;
  };

  // Codigo que debemos usar para mostrar los datos en el frontend
  let data = await getMovies("http://localhost:4000/api/movies");

  if(localStorage.getItem("favoritas")){
    const btnFavoritas = document.createElement('a')
    btnFavoritas.href = `http://127.0.0.1:5500/frontend/favoritas.html`
    btnFavoritas.innerHTML = "FAVORITAS"
    app.appendChild(btnFavoritas)
  }

  data.forEach((movie) => {
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    const botonEditar = document.createElement("a");
    botonEditar.textContent = "Editar";
    botonEditar.href = "/frontend/formulario.html?id=" + movie.id;

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
    card.appendChild(botonEditar);

    const favoritas = document.createElement('span');
    favoritas.innerHTML = `
    <a onclick="agregarFavorito(${movie.id})">★</a>
    `
    card.appendChild(favoritas)
  });


};

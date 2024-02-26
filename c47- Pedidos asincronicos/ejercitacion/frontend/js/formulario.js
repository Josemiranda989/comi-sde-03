window.onload = async () => {
  const getMovies = async function (URI) {
    const base = "http://localhost:3031/";
    const response = await fetch(base + URI);
    const data = await response.json();
    return data.data;
  };

  const updateMovie = async (data) => {
    const { id, title, rating, awards, release_date, length } = data;
    const response = await fetch("http://localhost:3031/api/movies/update/" + id);
    const data = response
  };

  const query = new URLSearchParams(location.search);
  const id = query.get("id");

  const data = await getMovies("api/movies/" + id);
  const form = document.querySelector("form");

  form.title.value = data.title;
  form.rating.value = data.rating;
  form.awards.value = data.awards;
  form.release_date.value = data.release_date.split("T")[0];
  form.length.value = data.length;

  const btnEditar = docuemnt.getElementById("editar");
  btnEditar.addEventListener("click", (e) => {
    e.preventDefault();
  });
};

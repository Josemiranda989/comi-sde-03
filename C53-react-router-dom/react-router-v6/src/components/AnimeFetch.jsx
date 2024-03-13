import { Component } from "react";
import { Card } from "./Card";

export default class AnimeFetch extends Component {
  constructor() {
    super();
    this.state = {
      animeList: null,
      cargando: true,
      error: null,
    };
  }

  // URL = "https://api.jikan.moe/v4/anime"
  componentDidMount() {
    fetch("https://api.jikan.moe/v4/anime")
      // fetch(this.URL)
      .then((res) => res.json())
      .then((res) => {
        // console.log(res.data);
        this.setState({
          animeList: res.data,
          cargando: false,
        });
      })
      .catch((e) => {
        console.log(e);
        this.setState({
          error: e,
          cargando: false,
        });
      });
  }

  render() {
    const { animeList, cargando, error } = this.state;

    if (cargando) {
      return <p>Cargando...</p>;
    }

    if (error) {
      return <p>Error: {error.message}</p>;
    }

    return (
      <div className="container">
        {animeList?.map((anime) => {
          return (
            <Card
              key={anime.mal_id}
              title={anime.title}
              img={anime.images.jpg.large_image_url}
            />
          );
        })}
      </div>
    );
  }
}

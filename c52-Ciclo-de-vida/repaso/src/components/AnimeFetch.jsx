import React, { Component } from 'react'
import { Card } from './Card'


export default class AnimeFetch extends Component {
    constructor() {
        super()
        this.state = {
            animeList: null,
            cargando: true,
        }
    }

    // URL = "https://api.jikan.moe/v4/anime"
    componentDidMount() {
        fetch("https://api.jikan.moe/v4/anime")
            // fetch(this.URL)        
            .then(res => res.json())
            .then(res => {
                // console.log(res.data);
                this.setState({
                    animeList: res.data,
                    cargando: false
                })

            })
            .catch(e => console.log(e.message))
    }

    render() {
        if (this.state.cargando) {
            return <p>Cargando...</p>
        }


        return (
            <div className='container'>
                {this.state.animeList?.map((anime) => {
                    return <Card
                        key={anime.mal_id}
                        title={anime.title}
                        img={anime.images.jpg.large_image_url}
                    />
                })}
            </div>
        )
    }
}

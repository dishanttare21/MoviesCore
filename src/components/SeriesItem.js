import React, { useEffect, useState } from 'react'
import style from '../css_components/ItemDetail.module.css'

const SeriesItem = ({ match }) => {
    const API_KEY = 'c468f1a4793dde84b380dc978e620225';
    const SERIES_REQ_URL = `https://api.themoviedb.org/3/tv/${match.params.id}?api_key=${API_KEY}&language=en-US`

    const [item, setItem] = useState({
        backdrop_path: {},
        genres: [],
        created_by: [],
        networks: [],
        seasons: []
    });
    useEffect(() => {
        fetchItems();
        console.log(match);
    }, [])

    const fetchItems = async () => {
        const response = await fetch(SERIES_REQ_URL);
        const data = await response.json();
        setItem(data);
        console.log(data);
    }
    const source = 'http://image.tmdb.org/t/p/w500/' + item.poster_path;
    console.log('hello')
    console.log(item.seasons.length)
    return (
        <div className={style.container}>
            <div className={style.detailscard}>
                <div className={style.imgDiv}>
                    <img src={source} alt="" />
                </div>
                <div className={style.contentDiv}>
                    <h1>{item.name} <span className={style.releaseyear}>({item.first_air_date})</span></h1>
                    {/* <h3>Created by: </h3> */}
                    {/* <p>{item.created_by[0].name}</p> */}
                    <ul class={style.genreList}>
                            {item.genres.map(genre => (
                                <li className={style.genre} key={genre.id}>{genre.name} </li>
                            ))}
                        </ul>
                    <p><strong>Created by:</strong> {item.created_by.map(creator => (creator.name))}</p>
                    <h4>Plot:</h4>
                    <p>{item.overview}</p>
                    <div className={style.otherdetails}>
                        <div>
                            <h4>Rating</h4>
                            <p>{item.vote_average}/10</p>
                        </div>
                        <div>
                            <h4>Last Aired:</h4>
                            <p>{item.last_air_date}</p>
                        </div>
                        <div>
                            <h4>Status</h4>
                            <p>{item.status}</p>
                        </div>
                        <div>
                            <h4>Seasons</h4>
                            <p>{item.seasons.length}</p>
                        </div>
                    </div>
                    <h5>Available on:</h5>
                    <div className={style.networks}>
                        <p>
                            {item.networks.map(network => (
                                <span className={style.network}>{network.name} </span>
                            ))}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SeriesItem

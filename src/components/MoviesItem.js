import React, { useEffect, useState } from 'react'
import style from '../css_components/ItemDetail.module.css'

const MoviesItem = ({ match }) => {
    const API_KEY = 'c468f1a4793dde84b380dc978e620225';
    const MOVIE_REQ_URL = `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=${API_KEY}&language=en-US`;

    const [item, setItem] = useState({
        backdrop_path: {},
        genres: [],
        releasedate : ''
    });

    useEffect(() => {
        fetchItems();
        console.log(match);
    }, [])

    const fetchItems = async () => {
        const response = await fetch(MOVIE_REQ_URL);
        const data = await response.json();
        setItem(data);
        console.log(data);
    }
    const source = 'http://image.tmdb.org/t/p/w500/' + item.poster_path;
    const backdrop  = 'http://image.tmdb.org/t/p/w500/' + item.backdrop_path;
    return (
        <div className={style.container}>
            <div className={style.detailscard}>
                <div className={style.imgDiv}>
                    <img src={source} alt="" />
                </div>
                <div className={style.contentDiv}>
                    <h1>{item.title} <span className={style.releaseyear}>({item.release_date})</span></h1>
                    
                    <div className={style.genres}>
                        {item.genres.map(genre => (
                            <span className={style.genre} key={genre.id}>{genre.name} </span>
                        ))}
                    </div>
                    
                    <h3>Plot:</h3>
                    <p>{item.overview}</p>
                    <div className={style.otherdetails}>
                        <div>
                            <h4>Rating</h4>
                            <p>{item.vote_average}/10</p>
                        </div>
                        <div>
                            <h4>Budget</h4>
                            <p>${item.budget}</p>
                        </div>
                        <div>
                            <h4>Revenue</h4>
                            <p>${item.revenue}</p>
                        </div>
                        <div>
                            <h4>Runtime</h4>
                            <p>{item.runtime} mins</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoviesItem

import React, { useState, useEffect } from 'react'
import Item from './Item';
import style from '../css_components/Cards.module.css'
import Loading from './Loading';

const Movies = () => {
    const API_KEY = 'c468f1a4793dde84b380dc978e620225';
    const REQ_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getMovies();
    }, [])

    const getMovies = async () => {
        const response = await fetch(REQ_URL);
        const data = await response.json();
        setMovies(data.results);
        console.log('movies')
        setLoading(true);
        console.log(data.results);
    }
    return (
        <div className={style.cards}>
            {movies.map((movie, index) => (
                <Item
                    key={index}
                    id={movie.id}
                    title={movie.title}
                    poster={movie.poster_path}
                    rating={movie.vote_average}
                    type="movie"
                />
            ))}
        </div>
    )
}

export default Movies

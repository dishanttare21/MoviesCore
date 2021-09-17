import React, { useState, useEffect } from 'react'
import '../../App.css';
import Item from '../Item';
import style from '../../css_components/Cards.module.css'

const TopRatedMovies = ({start, stop}) => {
    const API_KEY = 'c468f1a4793dde84b380dc978e620225';
    const TOP_RATED_REQ_URL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=' + API_KEY + '&language=en-US&page=1';
    const [top_ratedMovies, setLatestMovies] = useState([]);

    useEffect(() => {
        getLatestMovies();
    }, [])

    const getLatestMovies = async () => {
        const top_ratedResponse = await fetch(TOP_RATED_REQ_URL);
        const top_ratedData = await top_ratedResponse.json();
        setLatestMovies(top_ratedData.results);
        console.log('Top Rated')
        console.log(top_ratedData.results);
    }
    return (
        <section>
            <h1 className="sectiontitle">Top Rated Movies</h1>
            <div className={style.cards}>
                {top_ratedMovies.slice(start, stop).map((top_ratedMovie, index) => (
                    <Item
                        key={index}
                        id={top_ratedMovie.id}
                        title={top_ratedMovie.title}
                        poster={top_ratedMovie.poster_path}
                        rating={top_ratedMovie.vote_average}
                        type="movie"
                    />
                ))}
            </div>
        </section>
    )
}

export default TopRatedMovies

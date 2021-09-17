import React, { useState, useEffect } from 'react'
import '../../App.css';
import Item from '../Item';
import style from '../../css_components/Cards.module.css'

const PopularMovies = ({start, stop}) => {
    const API_KEY = 'c468f1a4793dde84b380dc978e620225';
    const POPULAR_REQ_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=' + API_KEY + '&language=en-US&page=1';

    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        getPopularMovies();
    }, [])

    const getPopularMovies = async () => {
        const popularResponse = await fetch(POPULAR_REQ_URL);
        const popularData = await popularResponse.json();
        setPopularMovies(popularData.results);
        console.log('popular')
        console.log(popularData.results);
    }
    return (
        <section>
            <h1 className="sectiontitle">Popular Movies</h1>
            <div className={style.cards}>
                {popularMovies.slice(start, stop).map((popularMovie, index) => (
                    <Item
                        key={index}
                        id={popularMovie.id}
                        title={popularMovie.title}
                        poster={popularMovie.poster_path}
                        rating={popularMovie.vote_average}
                        type="movie"
                    />
                ))}
            </div>
        </section>
    )
}

export default PopularMovies

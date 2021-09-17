import React, { useState, useEffect } from 'react'
import Item from './Item';
import style from '../css_components/Cards.module.css'
import style2 from '../css_components/Search.module.css'

const Search = () => {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('afagsgsgsg')

    const API_KEY = 'c468f1a4793dde84b380dc978e620225';
    const SEARCH_URL = `https://api.themoviedb.org/3/search/multi?api_key=c468f1a4793dde84b380dc978e620225&language=en-US&query=${query}&page=1&include_adult=false`

    useEffect(() => {
        getMovies();
    }, [query])

    const getMovies = async () => {
        const response = await fetch(SEARCH_URL);
        const data = await response.json();
        setMovies(data.results);
        console.log(data.results);
    }

    const updateSearch = (e,) => {
        setSearch(e.target.value);
        console.log(search);
    }

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        // setSearch('');
    }

    return (
        <div>
            <form onSubmit={getSearch} className={style2.searchForm} >
                <input
                    className={style2.searchBar}
                    type="text"
                    value={search}
                    onChange={updateSearch}
                    placeholder="Search for movies and tv shows" />
                <button className={style2.searchBtn} type="submit">Search</button>
            </form>
            <div className={style.cards}>
                {movies.map(movie => (
                    <Item
                        key={movie.id}
                        id={movie.id}
                        title={movie.title || movie.name}
                        poster={movie.poster_path || movie.profile_path}
                        rating={movie.vote_average}
                        type={movie.media_type}
                    />
                ))}
            </div>
        </div>
    )
}

export default Search

import React, { useState, useEffect } from 'react'
import Item from './Item';
import style from '../css_components/Cards.module.css'
const Series = () => {
    const API_KEY = 'c468f1a4793dde84b380dc978e620225';
    const REQ_URL = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate`
    const [series, setSeries] = useState([]);

    useEffect(() => {
        getSeries();
    }, [])

    const getSeries = async () => {
        const response = await fetch(REQ_URL);
        const data = await response.json();
        setSeries(data.results);
        console.log('Series')
        console.log(data.results);
    }
    return (
        <div className={style.cards}>
                {series.map((show, index) => (
                    <Item
                        key={index}
                        id={show.id}
                        title={show.name}
                        poster={show.poster_path}
                        rating={show.vote_average}
                        type="series"
                    />
                ))}
            </div>
    )
}

export default Series

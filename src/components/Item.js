import React, { useEffect, useState } from 'react';
import style from '../css_components/movie.module.css';
import { Link } from 'react-router-dom';

const Item = ({ id, title, poster, rating, type }) => {
    const image = 'http://image.tmdb.org/t/p/w500/' + poster;
    if(type === "movie"){
        var path1= `/MoviesCore/moviedetail/${id}`
    }else{
        var path1=`/MoviesCore/seriesdetail/${id}`
    }
    return (
        <div className={style.movie}>
            <Link to={path1}>
                <img src={image} alt="No image available" />
                <h4>{title}</h4>
            </Link>
            <p>{rating}</p>
        </div>
    )
}

export default Item

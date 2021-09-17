import React from 'react'
import style from '../css_components/Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className={style.header}>
            <nav className={style.nav}>
                <Link to="/">
                    <img className={style.logo} src="https://see.fontimg.com/api/renderfont4/WyonA/eyJyIjoiZnMiLCJoIjo3OCwidyI6MTI1MCwiZnMiOjYyLCJmZ2MiOiIjRkZGRkZGIiwiYmdjIjoiIzM1M0Q0QiIsInQiOjF9/TW92aWVzQ29yZQ/momcake-bold.png" alt="" />
                </Link>

                <ul className={style.links}>
                    <Link to="/search">
                        <li>Search</li>
                    </Link>
                    <Link to="/movies">
                        <li>Movies</li>
                    </Link>
                    <Link to="/series">
                        <li>TV Shows</li>
                    </Link>
                </ul>
                <button className={style.auth}>Login/Register</button>
            </nav>
        </header>
    )
}

export default Header

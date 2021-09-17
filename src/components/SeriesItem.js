import React,{useEffect, useState} from 'react'
import style from '../css_components/ItemDetail.module.css'

const SeriesItem = ({match}) => {
    const API_KEY = 'c468f1a4793dde84b380dc978e620225';
    const SERIES_REQ_URL =`https://api.themoviedb.org/3/tv/${match.params.id}?api_key=${API_KEY}&language=en-US`

    const [item, setItem] = useState({
        backdrop_path : {},
        genres: []
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
    const source = 'http://image.tmdb.org/t/p/w500/'+item.poster_path;
    console.log('hello')
    console.log(item.genres.name)
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
                        <h5>{item.vote_average}/10</h5>
                    </div>
                    <div>
                        <h4>Budget</h4>
                        <h5>${item.budget}</h5>
                    </div>
                    <div>
                        <h4>Revenue</h4>
                        <h5>${item.revenue}</h5>
                    </div>
                    <div>
                        <h4>Revenue</h4>
                        <h5>{item.runtime} mins</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
        // <div className={style.container}>
        //     <div className={style.detailscard}>
        //         <img src={source} alt="" />
        //         <div>
        //             <h1>{item.name}</h1>
        //             <div className={style.genres}>
        //                 {item.genres.map(genre => (
        //                     <span className={style.genre} key={genre.id}>{genre.name} </span>
        //                 ))}
        //             </div>
        //             <h3>Plot:</h3>
        //             <p>{item.overview}</p>
                    
        //         </div>
        //     </div>
        // </div>
        
    )
}

export default SeriesItem

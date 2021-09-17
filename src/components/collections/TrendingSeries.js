import React,{useState, useEffect} from 'react'
import Item from '../Item';
import style from '../../css_components/Cards.module.css'

const TrendingSeries = ({start, stop}) => {
    const API_KEY = 'c468f1a4793dde84b380dc978e620225';
    const TRENDING_REQ_URL = 'https://api.themoviedb.org/3/trending/tv/week?api_key=' + API_KEY;

    const [trendingSeries, setTrendingSeries] = useState([]);

    useEffect(() => {
        getTrendingSeries();
    }, [])

    const getTrendingSeries = async () => {
        const trendingResponse = await fetch(TRENDING_REQ_URL);
        const trendingData = await trendingResponse.json();
        setTrendingSeries(trendingData.results);
        console.log('trending')
        console.log(trendingData.results);
    }
    return (
        <section>
                <h1 className="sectiontitle">Trending Series</h1>
                <div className={style.cards}>
                    {trendingSeries.slice(start,stop).map((trending, index) => (
                        <Item
                            key={index}
                            id={trending.id}
                            title={trending.name}
                            poster={trending.poster_path}
                            rating={trending.vote_average}
                            type="series"
                        />
                    ))}
                </div>
            </section>
    )
}

export default TrendingSeries

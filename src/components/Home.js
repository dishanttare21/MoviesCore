import '../App.css';
import PopularMovies from './collections/PopularMovies';
import TopRatedMovies from './collections/TopRatedMovies';
import TrendingSeries from './collections/TrendingSeries';
import style from '../css_components/Home.module.css'

const Home = (match) => {
    
    return (
        <div className={style.home}>
            <PopularMovies start={0} stop={10} />
            <TrendingSeries start={0} stop={10} />
            <TopRatedMovies start={10} stop={20}/>
        </div>
    )
}

export default Home

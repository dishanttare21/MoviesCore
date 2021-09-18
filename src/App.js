import './App.css';
import React from 'react'
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Movies from './components/Movies';
import Series from './components/Series';
import MoviesItem from './components/MoviesItem';
import SeriesItem from './components/SeriesItem';
import Search from './components/Search';

function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/MoviesCore" exact component={Home} />
          <Route path="/MoviesCore/search" component={Search} />
          <Route path="/MoviesCore/movies" component={Movies} />
          <Route path="/MoviesCore/series" component={Series} />
          <Route path="/MoviesCore/moviedetail/:id" component={MoviesItem} />
          <Route path="/MoviesCore/seriesdetail/:id" component={SeriesItem} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

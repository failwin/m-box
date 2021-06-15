import './App.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from './pages/home/home';
import Movies from './pages/movies/movies';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import {useState} from 'react';
import MovieItemInfo from './pages/movie-item-info/movie-item-info';

function App() {

    const [theme, setTheme]= useState(localStorage.getItem('theme'));

    const activeMode = mode => {
        setTheme(mode);
    };

    return (
    <div className={theme !== 'light' ? 'App' : 'App light-mode'}>
      <Router>
      <Header activeMode={activeMode}/>
        <Switch>
            <Route exact path={'/'} render={(props) => <Home />} />
            <Route exact path={'/movies'} render={() => <Movies/>} />
            <Route exact path={'/movies/:id'} render={(props) => {
                let {match:{params:{id}}} = props;
                return <MovieItemInfo filmId={id}/>}
            } />
        </Switch>
      <Footer />
      </Router>
    </div>
  );
}

export default App;

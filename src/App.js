import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./assets/logo.svg";
import Home from "./Containers/Home";
import Nowplaying from "./Containers/Nowplaying";
import Upcoming from "./Containers/Upcoming";
import "./App.css";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [nowPlayingList, setNowPlayingList] = useState([]);
  const [upcomingList, setUpcomingList] = useState([]);
  const [page, setPage] = useState(1);

  console.log(page);

  const fetchDataNow = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=f6102bdcf50d58b04b50380aa65a1652&language=fr&page=" +
        page
    );
    setNowPlayingList([...nowPlayingList, ...response.data.results]);
    setIsLoading(false);
  };

  const fetchDataUp = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=f6102bdcf50d58b04b50380aa65a1652&language=en-US&page=" +
        page
    );
    setUpcomingList([...upcomingList, ...response.data.results]);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchDataNow();
    fetchDataUp();
  }, [page]);

  return (
    <Router>
      <div className="App">
        {isLoading === true ? (
          <p>En cours de chargement</p>
        ) : (
          <>
            <header className="App-header">
              <Link to="/">
                <img src={logo} className="App-logo" alt="logo" />
              </Link>
            </header>
            <Switch>
              <Route path="/nowplaying">
                <Nowplaying
                  page={page}
                  setPage={setPage}
                  nowPlayingList={nowPlayingList}
                />
              </Route>
              <Route path="/upcoming">
                <Upcoming
                  page={page}
                  setPage={setPage}
                  upcomingList={upcomingList}
                />
              </Route>
              <Route path="/">
                <Home
                  nowPlayingList={nowPlayingList}
                  upcomingList={upcomingList}
                />
              </Route>
            </Switch>
          </>
        )}
      </div>
    </Router>
  );
};

export default App;

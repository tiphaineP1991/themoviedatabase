import React from "react";
import Moviecard from "../Components/Moviecard";
import { Link } from "react-router-dom";

const Home = ({
  nowPlayingList,
  upcomingList,
  showModal,
  setShowModal,
  setMovieClicked
}) => {
  return (
    <>
      <div className="movie-sectionHome">
        <div className="section-title">
          <p>{"Movies now playing"}</p>
        </div>
        <Moviecard
          list={nowPlayingList}
          showModal={showModal}
          setShowModal={setShowModal}
          setMovieClicked={setMovieClicked}
        />
        <div className="loadMore">
          <Link to="/nowplaying">
            <button className="button">Voir plus...</button>
          </Link>
        </div>
      </div>
      <div className="movie-sectionHome">
        <div className="section-title">
          <p>{"Movies up coming"}</p>
        </div>
        <Moviecard
          list={upcomingList}
          showModal={showModal}
          setShowModal={setShowModal}
          setMovieClicked={setMovieClicked}
        />
        <div className="loadMore">
          <Link to="/upcoming">
            <button className="button">Voir plus...</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;

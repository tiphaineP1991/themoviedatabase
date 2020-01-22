import React from "react";
import MovieCard from "../Components/Moviecard";

const Nowplaying = ({
  page,
  setPage,
  nowPlayingList,
  showModal,
  setShowModal,
  setMovieClicked
}) => {
  const handleChange = e => {
    let element = e.target;
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      setPage(page + 1);
    }
  };
  console.log(nowPlayingList);

  return (
    <div className="movie-section">
      <div className="section-title">
        <p>{"All movies now playing"}</p>
      </div>
      <MovieCard
        function={handleChange}
        list={nowPlayingList}
        showModal={showModal}
        setShowModal={setShowModal}
        setMovieClicked={setMovieClicked}
      />
    </div>
  );
};

export default Nowplaying;

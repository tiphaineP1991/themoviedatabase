import React from "react";

const Moviecard = props => {
  return (
    <div
      onScroll={props.function}
      className={props.function ? "movie-list" : "movie-listHome"}
    >
      {props.list.map((product, index) => {
        return (
          <div className="movieCard" key={index}>
            <div className="poster">
              <img
                src={
                  "https://image.tmdb.org/t/p/w370_and_h556_bestv2/" +
                  product.poster_path
                }
              ></img>
            </div>
            <div className="movie-title">
              <span>{product.title}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Moviecard;

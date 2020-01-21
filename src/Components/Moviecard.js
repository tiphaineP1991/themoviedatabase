import React from "react";
import { Link } from "react-router-dom";

const Moviecard = props => {
  return (
    <div className="lastMovie-section">
      <p className="section-title">{props.title}</p>
      <div className="movie-list">
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
      <div className="loadMore">
        <Link to={props.link}>
          <button className="button">Voir plus</button>
        </Link>
      </div>
    </div>
  );
};

export default Moviecard;

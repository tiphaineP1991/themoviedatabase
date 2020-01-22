import React from "react";
import moment from "moment";
import "moment/locale/fr";

const Modal = ({ showModal, movieClicked, setShowModal }) => {
  const localDate = new Date(movieClicked.release_date);
  const date = localDate.toLocaleDateString();
  return (
    <>
      {showModal === true && (
        <div className="bgmodal" onClick={() => setShowModal(!showModal)}>
          <div className="modal-card">
            <div className="modal-img">
              <img
                src={
                  "https://image.tmdb.org/t/p/w370_and_h556_bestv2/" +
                  movieClicked.poster_path
                }
              />
            </div>
            <div className="modal-details">
              <span className="modal-title">{movieClicked.title}</span>
              <span className="modal-date">{date}</span>
              <span className="modal-overview">{movieClicked.overview}</span>
              <span className="modal-grade">
                {movieClicked.vote_average.toFixed(1)}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

import React from "react";

const Nowplaying = ({ page, setPage, nowPlayingList, upcomingList }) => {
  return (
    <div>
      <span>coucou</span>
      <div>
        <span
          onClick={() => {
            setPage(page + 1);
          }}
        >
          +
        </span>
        <span
          onClick={() => {
            setPage(page - 1);
          }}
        >
          -
        </span>
      </div>
    </div>
  );
};

export default Nowplaying;

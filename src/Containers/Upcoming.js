import React from "react";

const Upcoming = ({ page, setPage }) => {
  return (
    <div>
      <span>coucou Upcoming</span>
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

export default Upcoming;

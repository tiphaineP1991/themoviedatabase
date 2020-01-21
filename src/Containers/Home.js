import React from "react";
import Moviecard from "../Components/Moviecard";

const Home = ({ nowPlayingList, upcomingList }) => {
  return (
    <div>
      <Moviecard
        list={nowPlayingList}
        link={"/nowplaying"}
        title={"Now Playing Movies"}
      />
      <Moviecard
        list={upcomingList}
        link={"/upcoming"}
        title={"Upcoming Movies"}
      />
    </div>
  );
};

export default Home;

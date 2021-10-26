import { Skeleton } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "../../axios.js";
import requests from "../../requests.js";
import "./Banner.css";

function Banner(props) {
  const { loading = false } = props;
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  console.log(movie);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return loading ? (
    <Skeleton variant="rectangular" height={448} sx={{bgcolor:'grey.900'}} />
  ) : (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.orignal_name}
          <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>
          </div>
        </h1>
        <h1>
          <h1 className="banner__description">
            {truncate(movie?.overview, 150)}
          </h1>
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;

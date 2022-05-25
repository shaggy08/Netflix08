import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../axios";
import YouTube, { YouTubeProps } from "react-youtube";
import movieTrailer from "movie-trailer";
import getYoutubeId from "get-youtube-id";
import ReactPlayer from "react-player";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";

const baseUrl = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
      controls: 0,
      origin: "http://localhost:3000",
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl !== "") {
      setTrailerUrl("");
    } else {
      var trail = movieTrailer(movie?.name || movie?.title);
      // console.log(movie.name);
      trail.then((result) => {
        //console.log(result);
        var youtubeId = getYoutubeId(result, opts);
        setTrailerUrl(result);
      });
    }
  };
  var player;
  function onYouTubeIframeAPIReady() {
    console.log("done");
    player = new YouTube.Player("player", {
      height: "390",
      width: "640",
      videoId: trailerUrl,
      events: {
        onReady: onPlayerReady,
      },
    });
  }
  function onPlayerReady(event) {
    event.target.playVideo();
  }
  console.log(trailerUrl);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div
        className="row__posters"
        //     onMouseEnter={() => setIsHovered(true)}
        // onMouseLeave={() => setIsHovered(false)} >
      >
        {movies?.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row__poster  ${isLargeRow && "row__posterLarge"} `}
            src={`${baseUrl}${
              isLargeRow ? movie?.poster_path : movie?.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
        {/* {isHovered && (
                  <>
                   <video src="video/Start-Up.mp4" autoPlay={true} loop />
                   
                   </>
              )} */}
      </div>
      {/* { trailerUrl && <ReactPlayer url={trailerUrl} width="100%" height="390px" controls={true}  playing={true} /> } */}

      {/* {trailerUrl && < YouTube videoId={trailerUrl} opts={opts} />} */}
    </div>
  );
}

export default Row;

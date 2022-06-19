

import React, { useRef, useEffect, useState } from "react";
import "./Row.css";
import axios from "../axios";
import movieTrailer from "movie-trailer";
import getYoutubeId from "get-youtube-id";

import RowItem from "./RowItem";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowbackIcon from "@mui/icons-material/ArrowBackIos";

const baseUrl = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const listRef = useRef();
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const [clickLimit, setClickLimit] = useState(window.innerWidth / 230);

  const [movies, setMovies] = useState( ()=>{
    return [];
  });
  const [clickedmovies, setclickedMovies] = useState([]);
  const [isHoveredd, setIsHoveredd] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [hoveredMovieId, setHoveredMovieId] = useState(null);

  const handleClickslide = (direction) => {
    setIsMoved(true);

    let distance = listRef.current.getBoundingClientRect().x - 50;
    console.log(distance);
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 2 - clickLimit) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
      console.log("im slided right");
    }
  };

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

  const handleClickinfo = (movie, info, index) => {
  
    setHoveredMovieId(index);

    if (isHoveredd) {
      setIsHoveredd(info);
    } else {
      setIsHoveredd(info);
    }

    setclickedMovies(movie);
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
  
  return (
    <div className="row">
      <h2 className="row_title">{title}</h2>

      <div className="row__posters">
        <ArrowbackIcon
          className="sliderArrow left"
          onClick={() => handleClickslide("right")}
        />
        {movies?.map((movie, index) => {
         
          return (
            <div
              className="row__poster_container"
  
              
              onMouseEnter={() => handleClickinfo(movie, true, index)}
              onMouseLeave={() => handleClickinfo(movie, false, null)}
            >
              {index === hoveredMovieId ? (
                <RowItem item={clickedmovies} key={movie.id} />
              ) : (
                
                <img
                  key={movie.id}
                  className="row_img"
                  // onClick={() => handleClick(movie)}
                  onClick={() => {
                    handleClickinfo(movie);
                  }}
                  className={
                    isLargeRow
                      ? "row__posterLarge"
                      : "row__poster_container_normal"
                  }
                  src={`${baseUrl}${
                    isLargeRow ? movie?.poster_path : movie?.backdrop_path
                  }`}
                  alt={movie.name}
                />
              )}
            </div>
          );
        })}
        <ArrowForwardIosIcon
          className="sliderArrow right"
          onClick={() => handleClickslide("right")}
        />
      </div>

      {/* {isHoveredd && (
        <Card
          item={clickedmovies}
          discription={clickedmovies.overview}
          poster={clickedmovies.backdrop_path}
          name={
            clickedmovies?.name ||
            clickedmovies?.original_title ||
            clickedmovies?.original_name
          }
        />
      )} */}
      {/* { trailerUrl && <ReactPlayer url={trailerUrl} width="100%" height="390px" controls={true}  playing={true} /> } */}

      {/* {trailerUrl && < YouTube videoId={trailerUrl} opts={opts} />} */}
    </div>
  );
}

export default Row;

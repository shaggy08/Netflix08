import React, { useState, useEffect } from "react";
import axios from "../axios";
import './Banner.css';
import {PlayArrow, InfoOutlined} from "@material-ui/icons";
//import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import requests from '../requests';

function Banner() {
  const [movie, setmovie] = useState([]);
  const baseurl = "https://image.tmdb.org/t/p/original/";


  useEffect(() => {
    async function fetchdata() {
      const api = await axios.get(requests.fetchNetflixOriginals);
      setmovie(
        api.data.results[
          Math.floor(Math.random() * api.data.results.length - 1)
        ]
      );
      return api;
    }
    fetchdata();
  }, []);


//   var background=baseurl+ movie.backdrop_path;
var background="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABa9ryeJ-BGcKm6Lo9X4AFQfV5GjnC8ZP5z17FhfXqCz6gP6O2MtQSxfPpuEtOZeBvLVkvBQj7ZN-wRltkd-U4i859xIljg7V59oY.webp?r=43b"
  console.log(background);
  function truncate(str,n){
      return str?.length>n ?str.substr(0,n-1)+"..." : str;
  }
  return (
    <header
      className="banner"
      style={{
        
        backgroundSize: "cover",
        backgroundImage: `url(${background})`,
        backgroundPosition: "center center",
        
      }}
    >
        <div className=" banner_contents">
        {/* <h1 className="banner_title"> */}
            <img className="banner_title"
            src="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABV2N1D5L69Fum-S1mj8LEefMHtVFNzMTDU_6LxWaaU78tbGh3yXHlSMC69Als1Sg7uqdywM7frFP5_TmUHwWxMHTGLk9t60TNbqs6NvkpyYWrChv_OJUAS_oEXg3WrVYbDvUX4F4-v6CANCjDsaL96liuhOALkE5VuJoGWx_KIjUJTkH8dHQAw.webp?r=a34"
            ></img>
               {/* {movie?.title || movie?.name || movie?.original_name} */}
           {/* </h1> */}
           <div>
           <h1 className="banner_discription" > {truncate(movie.overview,150) }</h1>

           </div>
           <div className="banner_buttons" >
            <button className="banner_button_play" >
            <PlayArrow />
            <span>Play</span>
              </button>
            <button className="banner_button_mylist" >
            <InfoOutlined />
            <span>My List</span>
              </button>
               
           </div>
        </div>
    
        {/* <div className="banner_bottom_fade" /> */}
       
        
    </header>
       
  );
}

export default Banner;


import React, { useState  } from "react";
import "./Banner.css";
import InfoIcon from "@mui/icons-material/InfoOutlined";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";


function Banner() {
  // const [movie, setmovie] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
 

  // useEffect(() => {
  //   async function fetchdata() {
  //     const api = await axios.get(requests.fetchNetflixOriginals);
  //     setmovie(
  //       api.data.results[
  //         Math.floor(Math.random() * api.data.results.length - 1)
  //       ]
  //     );
  //     return api;
  //   }
  //   fetchdata();
  // }, []);

  //   var background=baseurl+ movie.backdrop_path;
  var background =
    "https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABa9ryeJ-BGcKm6Lo9X4AFQfV5GjnC8ZP5z17FhfXqCz6gP6O2MtQSxfPpuEtOZeBvLVkvBQj7ZN-wRltkd-U4i859xIljg7V59oY.webp?r=43b";
  // console.log(background);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  const dis ="Young entrepreneurs aspiring to launch virtual dreams into reality compete for success and love in the cutthroat world of Korea's high-tech industry. Watch all you want. Bae Suzy reunites with the creators of While You Were Sleeping for this romantic comedy with Nam Joo-hyuk.";
  return (
    <header
      className="banner"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${background})`,
        backgroundPosition: "center center",
        width: "100%",
      }}
    >
      {isHovered && (
        <>
          <video src="video/Start-Up.mp4" autoPlay={true} />
        </>
      )}
      <div className=" banner_contents">
        <div>
          {/* < ReactPlayer url='video/Start-Up.mp4'  width="100%" height="390px" controls={false} playing={true} /> */}
          {/* <video autoPlay loop src="video/Start-Up.mp4"   controls={false}/> */}
        </div>

        {/* <h1 className="banner_title"> */}
        <img
          className="banner_title"
          src="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABV2N1D5L69Fum-S1mj8LEefMHtVFNzMTDU_6LxWaaU78tbGh3yXHlSMC69Als1Sg7uqdywM7frFP5_TmUHwWxMHTGLk9t60TNbqs6NvkpyYWrChv_OJUAS_oEXg3WrVYbDvUX4F4-v6CANCjDsaL96liuhOALkE5VuJoGWx_KIjUJTkH8dHQAw.webp?r=a34"
          alt="banner_img"
        ></img>
        {/* {movie?.title || movie?.name || movie?.original_name} */}
        {/* </h1> */}
        <div>
          <h1 className="banner_discription">
            {" "}
            {truncate(dis, 150)}
          </h1>
        </div>
        <div className="banner_buttons">
          <button className="banner_button_play">
            <PlayArrowIcon />
            <span>Play</span>
          </button>
          <button className="banner_button_mylist">
            <InfoIcon />
            <span>My List</span>
          </button>
        </div>
      </div>

      {/* <div className="banner_bottom_fade" /> */}
    </header>
  );
}

export default Banner;

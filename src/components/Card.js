import React from "react";
import ReactPlayer from "react-player";
import "./Card.css";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";
function Card({ discription, poster, name }) {
  const baseUrl = "https://image.tmdb.org/t/p/original/";
  // baseUrl+="poster";
  // console.log(baseUrl);

  console.log(discription);
  console.log(poster);
  console.log(name);
  return (
    <div className="conatiner">
      <div className="card_gradient" > </div>
      {/* style={{
            backgroundImage:"url(https://image.tmdb.org/t/p/original//3Aj7j0xHXwGntChU1VaL9seBGIe.jpg)",
            backgroundSize: "cover",
            width:"100%",
            height:"240px",
       }} */}
      <div className="card_componets">
        <img
          className="discription_img"
          //  style={{
          //   backgroundSize: "cover",
          //   backgroundImage: `${baseUrl}${poster}`,
          //   width:"100%",
          //   height:"240px",
          // }}

          src={`${baseUrl}${poster}`}
          alt=""
        ></img>
        {/* <video
                src="video/Batman.mp4"
                autoPlay={true}
                loop
                width="100%"
                height="240px"
              /> */}
        <div className="content__description">
            <div className="card_title"> <p>{name} </p></div>
          <h1>
            {discription}
          </h1>
          <div className="card_icons">
            <PlayArrow className="card_icon" />
            <Add className="card_icon" />
            <ThumbUpAltOutlined className="card_icon" />
            <ThumbDownOutlined className="card_icon" />
          </div>
        </div>
        </div>
      

    </div>
  );
}

export default Card;

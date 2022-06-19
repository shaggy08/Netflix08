// import React from "react";
// import ReactPlayer from "react-player";
// import "./Card.css";
// import PlayArrowIcon from "@mui/icons-material/PlayArrow";
// import AddIcon from "@mui/icons-material/Add";
// import ThumbUpIcon from "@mui/icons-material/ThumbUp";
// import ThumbDownIcon from "@mui/icons-material/ThumbDown";
// function Card({ discription, poster, name }) {
//   const baseUrl = "https://image.tmdb.org/t/p/original/";
//   // baseUrl+="poster";
//   // console.log(baseUrl);

//   console.log(discription);
//   console.log(poster);
//   console.log(name);
//   return (
//     <div className="conatiner">
//       <div className="card_gradient"> </div>
//       {/* style={{
//             backgroundImage:"url(https://image.tmdb.org/t/p/original//3Aj7j0xHXwGntChU1VaL9seBGIe.jpg)",
//             backgroundSize: "cover",
//             width:"100%",
//             height:"240px",
//        }} */}
//       <div className="card_componets">
//         <img
//           className="discription_img"
//           //  style={{
//           //   backgroundSize: "cover",
//           //   backgroundImage: `${baseUrl}${poster}`,
//           //   width:"100%",
//           //   height:"240px",
//           // }}

//           src={`${baseUrl}${poster}`}
//           alt=""
//         ></img>
//         {/* <video
//                 src="video/Batman.mp4"
//                 autoPlay={true}
//                 loop
//                 width="100%"
//                 height="240px"
//               /> */}
//         <div className="content__description">
//           <div className="card_title">
//             {" "}
//             <p>{name} </p>
//           </div>
//           <h1>{discription}</h1>
//           <div className="card_icons">
//             <PlayArrowIcon className="card_icon" />
//             <AddIcon className="card_icon" />
//             <ThumbUpIcon className="card_icon" />
//             <ThumbDownIcon className="card_icon" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Card;

import React, { useEffect, useState } from "react";
import "./RowItem.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

function Card(props) {
  const { item } = props;
  const baseUrl = "https://image.tmdb.org/t/p/original/";
  const poster = item.backdrop_path;
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <div className="listItem">
      <img className="rowitem_img" src={`${baseUrl}${poster}`} alt="" />
      <div className="rowitem_itemInfo">
        <div className="rowitem_icons">
          <PlayCircleFilledIcon className="rowitem_icon_play" />
          <AddIcon className="rowitem_icon" />
          <ThumbUpIcon className="rowitem_icon" />
          {/* <ThumbDownIcon className="rowitem_icon" /> */}
        </div>
        <div className="itemInfoTop">
          <span className="limit">
            {item?.name || item?.original_title || item?.original_name}
          </span>
      <br></br>
          <span>2h30minljsfg</span>
          {/* <span>{2022}</span> */}
        </div>
        <div className="desc">{truncate(item.overview, 100)}</div>
      </div>
    </div>
  );
}

export default Card;

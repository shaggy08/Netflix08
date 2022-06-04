import React, { useEffect, useState } from "react";
import "./RowItem.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

function RowItem(props) {
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
          <span>2h30min </span>
          {/* <span>{2022}</span> */}
        </div>
        <div className="desc">{truncate(item.overview, 140)}</div>
        {/* <div className="desc">{item.overview}</div> */}
      </div>
    </div>
  );
}

export default RowItem;

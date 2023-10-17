import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="flex flex-col p-2 m-2 w-[378px] h-[370px] shadow-lg cursor-pointer">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <div className="max-w-[100%]">
        <ul>
          <li>
            <p className="font-bold break-all">{title}</p>
          </li>
          <li>{channelTitle}</li>
          <li>{statistics.viewCount} views</li>
        </ul>
      </div>
    </div>
  );
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className="p-1 m-1 border border-red-900 ">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;

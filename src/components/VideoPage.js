import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const VideoPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  });
  return (
    <div className="m-5">
      <div className="flex">
        <iframe
          width="1200"
          height="600"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div>
          <LiveChat />
        </div>
      </div>
      <div>
        <CommentsContainer />
      </div>
    </div>
  );
};

export default VideoPage;
